export type CefrLevel = 'A1' | 'A2' | 'B1';

export type ExerciseType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'word-order'
  | 'matching'
  | 'translation-ge-en'
  | 'listening'
  | 'typing';

export interface VocabItem {
  id: string;
  english: string;
  georgian: string;
  transcriptionGe: string;
  partOfSpeech: string;
  exampleEn: string;
  exampleGe: string;
  unitId: string;
  level: CefrLevel;
}

export interface GrammarTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface GrammarRule {
  title: string;
  summaryGe: string;
  georgianComparison: string;
  sections: {
    heading: string;
    explanationGe: string;
    examples: { en: string; ge: string; note?: string }[];
  }[];
  tables: GrammarTable[];
  commonMistakes: { wrong: string; right: string; explanationGe: string }[];
}

export interface DialogueLine {
  speaker: string;
  avatar: string;
  english: string;
  georgian: string;
}

export interface ReadingSection {
  title: string;
  contextGe: string;
  lines: DialogueLine[];
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface Exercise {
  id: string;
  unitId: string;
  type: ExerciseType;
  promptGe: string;
  question: string;
  audioText?: string;
  options?: string[];
  matchingPairs?: MatchingPair[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  explanationGe: string;
}

export interface CourseUnit {
  id: string;
  level: CefrLevel;
  unitNumber: number;
  titleGe: string;
  titleEn: string;
  descriptionGe: string;
  estimatedMinutes: number;
  icon: string;
  isAvailable: boolean;
  vocabulary: VocabItem[];
  grammar: GrammarRule;
  dialogue: ReadingSection;
  exercises: Exercise[];
  unitTest: Exercise[];
}

export interface FlashcardProgress {
  vocabId: string;
  box: 1 | 2 | 3 | 4 | 5;
  nextReviewDate: string;
  correctCount: number;
  wrongCount: number;
}

export interface MistakeRecord {
  exercise: Exercise;
  userAnswer: string;
  timestamp: string;
  mistakeCount: number;
}

export interface StudyDayTask {
  id: string;
  dayTitleGe: string;
  descriptionGe: string;
  durationMinutes: number;
  linkedUnitId?: string;
}

export interface StudyWeek {
  weekNumber: number;
  level: CefrLevel;
  titleGe: string;
  goalGe: string;
  days: StudyDayTask[];
}

export interface LessonDraftState {
  activeTab: 'vocabulary' | 'grammar' | 'dialogue' | 'exercises' | 'test';
  currentIndex: number;
  correctAnswersCount: number;
}

export interface UserProgressState {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  placementLevel: CefrLevel | null;
  placementScore: number | null;
  completedUnitIds: string[];
  unitScores: { [unitId: string]: number };
  savedVocabIds: string[];
  flashcards: { [vocabId: string]: FlashcardProgress };
  mistakes: MistakeRecord[];
  completedPlanTaskIds: string[];
  lessonDrafts: { [unitId: string]: LessonDraftState }; // ინახავს მიმდინარე გაკვეთილის პოზიციას
  lastVisitedUnitId: string | null;                     // ბოლოს გახსნილი იუნიტი
  totalAnswered: number;
  totalCorrect: number;
  darkMode: boolean;
}