import { Injectable, signal, computed, effect } from '@angular/core';
import {
  CefrLevel,
  CourseUnit,
  Exercise,
  FlashcardProgress,
  LessonDraftState,
  MistakeRecord,
  UserProgressState,
  VocabItem
} from '../models/course.model';
import { CURRICULUM_A1_UNITS } from '../data/curriculum-a1.data';
import { CURRICULUM_A2_B1_UNITS } from '../data/placement-and-plan.data';

const STORAGE_KEY = 'geo_eng_academy_state_v1';

const INITIAL_STATE: UserProgressState = {
  xp: 0,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  placementLevel: null,
  placementScore: null,
  completedUnitIds: [],
  unitScores: {},
  savedVocabIds: [],
  flashcards: {},
  mistakes: [],
  completedPlanTaskIds: [],
  lessonDrafts: {},
  lastVisitedUnitId: null,
  totalAnswered: 0,
  totalCorrect: 0,
  darkMode: false
};

@Injectable({
  providedIn: 'root'
})
export class LearningStateService {
  private stateSignal = signal<UserProgressState>(this.loadFromStorage());

  public readonly allUnits: CourseUnit[] = [
    ...CURRICULUM_A1_UNITS,
    ...CURRICULUM_A2_B1_UNITS
  ];

  public readonly allVocab: VocabItem[] = this.allUnits.reduce(
    (acc, unit) => [...acc, ...unit.vocabulary],
    [] as VocabItem[]
  );

  public readonly state = this.stateSignal.asReadonly();
  public readonly xp = computed(() => this.stateSignal().xp);
  public readonly streakDays = computed(() => this.stateSignal().streakDays);
  public readonly darkMode = computed(() => this.stateSignal().darkMode);
  public readonly mistakes = computed(() => this.stateSignal().mistakes);

  public readonly accuracyPercentage = computed(() => {
    const s = this.stateSignal();
    if (s.totalAnswered === 0) return 100;
    return Math.round((s.totalCorrect / s.totalAnswered) * 100);
  });

  public readonly savedVocabulary = computed(() => {
    const ids = new Set(this.stateSignal().savedVocabIds);
    return this.allVocab.filter(v => ids.has(v.id));
  });

  public readonly dueFlashcardsCount = computed(() => {
    const today = new Date().toISOString().split('T')[0];
    const cards = Object.values(this.stateSignal().flashcards);
    return cards.filter(c => c.nextReviewDate <= today).length;
  });

  constructor() {
    this.checkAndUpdateDailyStreak();
    this.initializeDefaultFlashcards();
    this.applyTheme(this.stateSignal().darkMode);

    // ავტომატური შენახვა ნებისმიერ ცვლილებაზე
    effect(() => {
      const currentState = this.stateSignal();
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
        } catch (err) {
          console.error('პროგრესის შენახვის შეცდომა:', err);
        }
      }
    });
  }

  private loadFromStorage(): UserProgressState {
    if (typeof window === 'undefined' || !window.localStorage) {
      return INITIAL_STATE;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return INITIAL_STATE;
      const parsed = JSON.parse(raw);
      return {
        ...INITIAL_STATE,
        ...parsed,
        lessonDrafts: parsed.lessonDrafts || {},
        unitScores: parsed.unitScores || {},
        flashcards: parsed.flashcards || {}
      };
    } catch {
      return INITIAL_STATE;
    }
  }

  private saveToStorage(newState: UserProgressState): void {
    this.stateSignal.set(newState);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    }
  }

  private checkAndUpdateDailyStreak(): void {
    const current = this.stateSignal();
    const today = new Date().toISOString().split('T')[0];
    if (current.lastActiveDate === today) return;

    const lastDate = new Date(current.lastActiveDate);
    const todayDate = new Date(today);
    const diffTime = todayDate.getTime() - lastDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

    let newStreak = current.streakDays;
    if (diffDays === 1) {
      newStreak += 1;
    } else if (diffDays > 1) {
      newStreak = 1;
    }

    this.saveToStorage({
      ...current,
      streakDays: newStreak,
      lastActiveDate: today
    });
  }

  private initializeDefaultFlashcards(): void {
    const current = this.stateSignal();
    const flashcards = { ...current.flashcards };
    const today = new Date().toISOString().split('T')[0];
    let changed = false;

    for (const vocab of this.allVocab) {
      if (!flashcards[vocab.id]) {
        flashcards[vocab.id] = {
          vocabId: vocab.id,
          box: 1,
          nextReviewDate: today,
          correctCount: 0,
          wrongCount: 0
        };
        changed = true;
      }
    }

    if (changed) {
      this.saveToStorage({ ...current, flashcards });
    }
  }

  public toggleDarkMode(): void {
    const current = this.stateSignal();
    const nextDark = !current.darkMode;
    this.applyTheme(nextDark);
    this.saveToStorage({ ...current, darkMode: nextDark });
  }

  private applyTheme(isDark: boolean): void {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-theme', isDark);
    }
  }

  public getUnitById(unitId: string): CourseUnit | undefined {
    return this.allUnits.find(u => u.id === unitId);
  }

  public getLevelProgress(level: CefrLevel): number {
    const levelUnits = this.allUnits.filter(u => u.level === level);
    if (levelUnits.length === 0) return 0;
    const completed = levelUnits.filter(u =>
      this.stateSignal().completedUnitIds.includes(u.id)
    ).length;
    return Math.round((completed / levelUnits.length) * 100);
  }

  // გაკვეთილის მიმდინარე პოზიციის (ტაბი, კითხვის ნომერი) შენახვა
  public saveLessonDraft(unitId: string, draft: LessonDraftState): void {
    const current = this.stateSignal();
    this.saveToStorage({
      ...current,
      lastVisitedUnitId: unitId,
      lessonDrafts: {
        ...current.lessonDrafts,
        [unitId]: draft
      }
    });
  }

  public getLessonDraft(unitId: string): LessonDraftState | undefined {
    return this.stateSignal().lessonDrafts[unitId];
  }

  public clearLessonDraft(unitId: string): void {
    const current = this.stateSignal();
    const updatedDrafts = { ...current.lessonDrafts };
    delete updatedDrafts[unitId];
    this.saveToStorage({
      ...current,
      lessonDrafts: updatedDrafts
    });
  }

  public recordExerciseAttempt(exercise: Exercise, userAnswer: string, isCorrect: boolean): void {
    const current = this.stateSignal();
    const xpGain = isCorrect ? 10 : 2;
    let mistakes = [...current.mistakes];

    if (!isCorrect) {
      const existingIndex = mistakes.findIndex(m => m.exercise.id === exercise.id);
      if (existingIndex >= 0) {
        mistakes[existingIndex] = {
          ...mistakes[existingIndex],
          userAnswer,
          timestamp: new Date().toISOString(),
          mistakeCount: mistakes[existingIndex].mistakeCount + 1
        };
      } else {
        mistakes.unshift({
          exercise,
          userAnswer,
          timestamp: new Date().toISOString(),
          mistakeCount: 1
        });
      }
    } else {
      mistakes = mistakes.filter(m => m.exercise.id !== exercise.id);
    }

    this.saveToStorage({
      ...current,
      xp: current.xp + xpGain,
      totalAnswered: current.totalAnswered + 1,
      totalCorrect: current.totalCorrect + (isCorrect ? 1 : 0),
      mistakes
    });
  }

  public completeUnit(unitId: string, scorePercentage: number): void {
    const current = this.stateSignal();
    const completedUnitIds = current.completedUnitIds.includes(unitId)
      ? current.completedUnitIds
      : [...current.completedUnitIds, unitId];

    const bestScore = Math.max(current.unitScores[unitId] || 0, scorePercentage);

    this.saveToStorage({
      ...current,
      xp: current.xp + 50,
      completedUnitIds,
      unitScores: {
        ...current.unitScores,
        [unitId]: bestScore
      }
    });
  }

  public toggleSavedWord(vocabId: string): void {
    const current = this.stateSignal();
    const exists = current.savedVocabIds.includes(vocabId);
    const savedVocabIds = exists
      ? current.savedVocabIds.filter(id => id !== vocabId)
      : [...current.savedVocabIds, vocabId];

    this.saveToStorage({
      ...current,
      savedVocabIds
    });
  }

  public isWordSaved(vocabId: string): boolean {
    return this.stateSignal().savedVocabIds.includes(vocabId);
  }

  public reviewFlashcard(vocabId: string, remembered: boolean): void {
    const current = this.stateSignal();
    const card: FlashcardProgress = current.flashcards[vocabId] || {
      vocabId,
      box: 1,
      nextReviewDate: new Date().toISOString().split('T')[0],
      correctCount: 0,
      wrongCount: 0
    };

    const nextBox = remembered
      ? (Math.min(5, card.box + 1) as 1 | 2 | 3 | 4 | 5)
      : 1;

    const intervalDaysMap: Record<number, number> = {
      1: 0,
      2: 2,
      3: 4,
      4: 7,
      5: 14
    };

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDaysMap[nextBox]);
    const nextReviewDate = nextDate.toISOString().split('T')[0];

    this.saveToStorage({
      ...current,
      xp: current.xp + (remembered ? 5 : 1),
      flashcards: {
        ...current.flashcards,
        [vocabId]: {
          vocabId,
          box: nextBox,
          nextReviewDate,
          correctCount: card.correctCount + (remembered ? 1 : 0),
          wrongCount: card.wrongCount + (remembered ? 0 : 1)
        }
      }
    });
  }

  public togglePlanTask(taskId: string): void {
    const current = this.stateSignal();
    const exists = current.completedPlanTaskIds.includes(taskId);
    const completedPlanTaskIds = exists
      ? current.completedPlanTaskIds.filter(id => id !== taskId)
      : [...current.completedPlanTaskIds, taskId];

    this.saveToStorage({
      ...current,
      xp: exists ? current.xp : current.xp + 15,
      completedPlanTaskIds
    });
  }

  public savePlacementResult(level: CefrLevel, score: number): void {
    const current = this.stateSignal();
    this.saveToStorage({
      ...current,
      placementLevel: level,
      placementScore: score,
      xp: current.xp + 30
    });
  }

  // პროგრესის სარეზერვო ფაილად გადმოწერა (JSON)
  public exportProgressJson(): void {
    const dataStr = JSON.stringify(this.stateSignal(), null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `geoeng-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // ფაილიდან პროგრესის აღდგენა
  public importProgressJson(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (typeof parsed.xp !== 'number' || !Array.isArray(parsed.completedUnitIds)) {
        return false;
      }
      const merged: UserProgressState = {
        ...INITIAL_STATE,
        ...parsed
      };
      this.saveToStorage(merged);
      this.applyTheme(merged.darkMode);
      return true;
    } catch {
      return false;
    }
  }

  public resetAllProgress(): void {
    this.saveToStorage(INITIAL_STATE);
    this.initializeDefaultFlashcards();
  }
}