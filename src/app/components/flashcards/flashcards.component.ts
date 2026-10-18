import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningStateService } from '../../services/learning-state.service';
import { AudioService } from '../../services/audio.service';
import { VocabItem } from '../../models/course.model';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flashcards-page fade-in">
      <div class="page-head">
        <div>
          <h1>🗂️ Leitner-ის ინტერვალური გამეორების ბარათები</h1>
          <p>
            ბარათები ნაწილდება 5 ყუთში: რაც უფრო კარგად გახსოვს სიტყვა, მით უფრო მაღალ ყუთში გადადის!
          </p>
        </div>

        <div class="mode-switch">
          <button
            class="btn btn-sm"
            [class.btn-primary]="filterMode() === 'due'"
            [class.btn-secondary]="filterMode() !== 'due'"
            (click)="setFilter('due')">
            დღეს გასამეორებელი ({{ stateService.dueFlashcardsCount() }})
          </button>
          <button
            class="btn btn-sm"
            [class.btn-primary]="filterMode() === 'all'"
            [class.btn-secondary]="filterMode() !== 'all'"
            (click)="setFilter('all')">
            ყველა სიტყვა ({{ stateService.allVocab.length }})
          </button>
        </div>
      </div>

      <!-- LEITNER-ის 5 ყუთის სტატისტიკა -->
      <div class="boxes-grid">
        @for (boxNum of [1, 2, 3, 4, 5]; track boxNum) {
          <div class="card leitner-box" [class.active-box]="selectedBox() === boxNum" (click)="filterByBox(boxNum)">
            <div class="box-header">
              <span class="box-title">📦 ყუთი {{ boxNum }}</span>
              <span class="badge badge-primary">{{ getBoxCount(boxNum) }}</span>
            </div>
            <p class="box-interval">{{ getBoxLabel(boxNum) }}</p>
          </div>
        }
      </div>

      <!-- მთავარი ბარათის არე -->
      @if (activeCard(); as card) {
        <div class="flashcard-stage">
          <div class="card-counter">
            ბარათი {{ currentIndex() + 1 }} / {{ filteredCards().length }} •
            <span>ყუთი #{{ getCardBox(card.id) }}</span>
          </div>

          <div class="flashcard" [class.flipped]="isFlipped()" (click)="flipCard()">
            @if (!isFlipped()) {
              <!-- წინა მხარე (ინგლისური) -->
              <div class="card-face front">
                <span class="badge badge-primary">{{ card.level }} • {{ card.partOfSpeech }}</span>
                <h2>{{ card.english }}</h2>
                <span class="trans">[{{ card.transcriptionGe }}]</span>

                <div class="audio-row" (click)="$event.stopPropagation()">
                  <button class="btn btn-secondary btn-sm" (click)="audio.speak(card.english, 0.9)">
                    🔊 გამოთქმა
                  </button>
                  <button class="btn btn-secondary btn-sm" (click)="audio.speak(card.english, 0.6)">
                    🐢 ნელა
                  </button>
                </div>

                <p class="flip-hint">👆 დააჭირე ბარათს ქართული თარგმანის სანახავად</p>
              </div>
            } @else {
              <!-- უკანა მხარე (ქართული თარგმანი და მაგალითი) -->
              <div class="card-face back">
                <span class="badge badge-success">თარგმანი და მაგალითი</span>
                <h2 class="ge-word">{{ card.georgian }}</h2>
                <p class="en-repeat">{{ card.english }} — [{{ card.transcriptionGe }}]</p>

                <div class="example-box" (click)="$event.stopPropagation()">
                  <p class="en-ex">
                    "{{ card.exampleEn }}"
                    <button class="audio-btn" (click)="audio.speak(card.exampleEn, 0.85)">🔊</button>
                  </p>
                  <p class="ge-ex">{{ card.exampleGe }}</p>
                </div>
              </div>
            }
          </div>

          <!-- შეფასების ღილაკები -->
          <div class="review-actions">
            <button class="btn btn-danger" (click)="submitReview(card.id, false)">
              ❌ გამიჭირდა (ყუთი 1-ში დაბრუნება)
            </button>
            <button class="btn btn-success" (click)="submitReview(card.id, true)">
              ✅ მახსოვდა! (+5 XP, შემდეგ ყუთში გადატანა)
            </button>
          </div>
        </div>
      } @else {
        <div class="card empty-state">
          <div class="emoji">🎉</div>
          <h3>დღეისათვის ყველა გასამეორებელი ბარათი დასრულებულია!</h3>
          <p>შეგიძლია გადართო რეჟიმზე „ყველა სიტყვა“ ან დააკლიკო რომელიმე ყუთს ზემოთ.</p>
          <button class="btn btn-primary" (click)="setFilter('all')">ყველა სიტყვის ვარჯიში</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .flashcards-page {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .page-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 16px;

      h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 4px; }
      p { color: var(--text-muted); font-size: 0.92rem; }
      .mode-switch { display: flex; gap: 10px; }
    }

    .boxes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
    }

    .leitner-box {
      padding: 16px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        border-color: var(--primary);
        transform: translateY(-2px);
      }

      &.active-box {
        border: 2px solid var(--primary);
        background-color: var(--primary-light);
      }

      .box-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        font-weight: 700;
      }

      .box-interval {
        font-size: 0.8rem;
        color: var(--text-muted);
      }
    }

    .flashcard-stage {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 18px;
      align-items: center;
    }

    .card-counter {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-muted);
    }

    .flashcard {
      width: 100%;
      min-height: 320px;
      background-color: var(--bg-surface);
      border: 2px solid var(--border-color);
      border-radius: var(--radius-lg);
      box-shadow: var(--card-shadow-hover);
      padding: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-align: center;
      user-select: none;
      transition: transform 0.25s ease, border-color 0.25s ease;

      &:hover {
        border-color: var(--primary);
      }

      .card-face {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        width: 100%;

        h2 {
          font-size: 2.3rem;
          font-weight: 800;
          color: var(--primary);
        }

        .ge-word {
          color: var(--success);
        }

        .trans, .en-repeat {
          font-size: 1.05rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .audio-row {
          display: flex;
          gap: 10px;
          margin-top: 6px;
        }

        .flip-hint {
          margin-top: 24px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .example-box {
          margin-top: 12px;
          background-color: var(--bg-subtle);
          padding: 16px;
          border-radius: var(--radius-md);
          width: 100%;

          .en-ex {
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 6px;
          }

          .ge-ex {
            font-size: 0.9rem;
            color: var(--text-muted);
          }
        }
      }
    }

    .review-actions {
      display: flex;
      gap: 14px;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;

      .emoji { font-size: 3.5rem; }
      p { color: var(--text-muted); max-width: 440px; }
    }
  `]
})
export class FlashcardsComponent {
  public stateService = inject(LearningStateService);
  public audio = inject(AudioService);

  public filterMode = signal<'due' | 'all' | 'box'>('due');
  public selectedBox = signal<number | null>(null);
  public currentIndex = signal<number>(0);
  public isFlipped = signal<boolean>(false);

  public filteredCards = computed<VocabItem[]>(() => {
    const all = this.stateService.allVocab;
    const fcMap = this.stateService.state().flashcards;
    const today = new Date().toISOString().split('T')[0];

    if (this.filterMode() === 'box' && this.selectedBox() !== null) {
      return all.filter(v => (fcMap[v.id]?.box || 1) === this.selectedBox());
    }

    if (this.filterMode() === 'due') {
      return all.filter(v => {
        const progress = fcMap[v.id];
        return !progress || progress.nextReviewDate <= today;
      });
    }

    return all;
  });

  public activeCard = computed<VocabItem | undefined>(() => {
    const list = this.filteredCards();
    if (list.length === 0) return undefined;
    const idx = Math.min(this.currentIndex(), list.length - 1);
    return list[idx];
  });

  public setFilter(mode: 'due' | 'all'): void {
    this.filterMode.set(mode);
    this.selectedBox.set(null);
    this.currentIndex.set(0);
    this.isFlipped.set(false);
  }

  public filterByBox(boxNum: number): void {
    this.filterMode.set('box');
    this.selectedBox.set(boxNum);
    this.currentIndex.set(0);
    this.isFlipped.set(false);
  }

  public flipCard(): void {
    this.isFlipped.update(v => !v);
  }

  public submitReview(vocabId: string, remembered: boolean): void {
    this.stateService.reviewFlashcard(vocabId, remembered);
    this.isFlipped.set(false);

    const list = this.filteredCards();
    if (this.currentIndex() >= list.length) {
      this.currentIndex.set(0);
    }
  }

  public getBoxCount(boxNum: number): number {
    const fcMap = this.stateService.state().flashcards;
    return this.stateService.allVocab.filter(v => (fcMap[v.id]?.box || 1) === boxNum).length;
  }

  public getCardBox(vocabId: string): number {
    return this.stateService.state().flashcards[vocabId]?.box || 1;
  }

  public getBoxLabel(boxNum: number): string {
    const labels: Record<number, string> = {
      1: 'ახალი / ყოველდღე',
      2: '2 დღეში ერთხელ',
      3: '4 დღეში ერთხელ',
      4: 'კვირაში ერთხელ',
      5: 'შესწავლილი (14 დღე)'
    };
    return labels[boxNum] || '';
  }
}