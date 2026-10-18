import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LearningStateService } from '../../services/learning-state.service';
import { MistakeRecord } from '../../models/course.model';

@Component({
  selector: 'app-mistakes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="mistakes-page fade-in">
      <div class="page-head">
        <div>
          <h1>🎯 შეცდომების ანალიზი და გამოსწორება</h1>
          <p>
            აქ ავტომატურად გროვდება ყველა კითხვა, სადაც შეცდომა დაუშვი. უპასუხე სწორად და ის ამოიშლება სიიდან!
          </p>
        </div>
      </div>

      @if (stateService.mistakes().length === 0) {
        <div class="card empty-card">
          <div class="icon">🌟</div>
          <h2>შეცდომების ბანკი ცარიელია!</h2>
          <p>შენ არ გაქვს გამოუსწორებელი შეცდომები. განაგრძე ახალი იუნიტების გავლა!</p>
        </div>
      } @else {
        <div class="mistakes-list">
          @for (item of stateService.mistakes(); track item.exercise.id) {
            <div class="card mistake-card">
              <div class="m-header">
                <span class="badge badge-danger">შეცდომა დაფიქსირდა {{ item.mistakeCount }}-ჯერ</span>
                <span class="m-unit">იუნიტი: {{ item.exercise.unitId }}</span>
              </div>

              <p class="m-prompt">{{ item.exercise.promptGe }}</p>
              <h3 class="m-question">{{ item.exercise.question }}</h3>

              <div class="m-comparison">
                <div class="your-ans">
                  <span>შენი წინა პასუხი:</span>
                  <strong>❌ {{ item.userAnswer }}</strong>
                </div>
              </div>

              <!-- ხელახლა ცდის ველი -->
              <div class="retry-box">
                @if (item.exercise.options && item.exercise.type === 'multiple-choice') {
                  <div class="retry-options">
                    @for (opt of item.exercise.options; track opt) {
                      <button class="btn btn-secondary btn-sm" (click)="retryAttempt(item, opt)">
                        {{ opt }}
                      </button>
                    }
                  </div>
                } @else {
                  <div class="retry-input-row">
                    <input
                      type="text"
                      class="retry-input"
                      placeholder="ჩაწერე სწორი პასუხი გამოსასწორებლად..."
                      [(ngModel)]="retryInputs[item.exercise.id]"
                      (keyup.enter)="retryAttempt(item, retryInputs[item.exercise.id] || '')" />
                    <button
                      class="btn btn-primary btn-sm"
                      (click)="retryAttempt(item, retryInputs[item.exercise.id] || '')">
                      შემოწმება
                    </button>
                  </div>
                }
              </div>

              @if (feedbackMap()[item.exercise.id]; as fb) {
                <div class="fb-msg">{{ fb }}</div>
              }

              <details class="hint-details">
                <summary>💡 წესის შეხსენება და სწორი პასუხის ნახვა</summary>
                <p><strong>სწორი პასუხი:</strong> {{ item.exercise.correctAnswer }}</p>
                <p>{{ item.exercise.explanationGe }}</p>
              </details>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .mistakes-page {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .page-head {
      h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 4px; }
      p { color: var(--text-muted); }
    }

    .empty-card {
      text-align: center;
      padding: 48px 24px;
      .icon { font-size: 3.5rem; margin-bottom: 12px; }
      p { color: var(--text-muted); margin-top: 6px; }
    }

    .mistakes-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .mistake-card {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .m-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .m-unit { font-size: 0.8rem; color: var(--text-muted); font-weight: 600; }
      }

      .m-prompt {
        font-size: 0.88rem;
        color: var(--text-muted);
      }

      .m-question {
        font-size: 1.2rem;
        font-weight: 800;
      }

      .your-ans {
        background-color: var(--danger-light);
        padding: 10px 14px;
        border-radius: var(--radius-sm);
        font-size: 0.9rem;
        display: flex;
        gap: 8px;
        strong { color: var(--danger); }
      }

      .retry-options {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .retry-input-row {
        display: flex;
        gap: 10px;

        .retry-input {
          flex: 1;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background-color: var(--bg-surface);
          color: var(--text-main);
        }
      }

      .fb-msg {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--danger);
      }

      .hint-details {
        font-size: 0.88rem;
        color: var(--text-muted);
        cursor: pointer;

        summary {
          font-weight: 600;
          color: var(--primary);
        }

        p {
          margin-top: 6px;
        }
      }
    }
  `]
})
export class MistakesComponent {
  public stateService = inject(LearningStateService);
  public retryInputs: { [id: string]: string } = {};
  public feedbackMap = signal<{ [id: string]: string }>({});

  private normalize(str: string): string {
    return str.trim().toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
  }

  public retryAttempt(item: MistakeRecord, answer: string): void {
    const ex = item.exercise;
    const possible = [ex.correctAnswer, ...(ex.acceptedAnswers || [])].map(a => this.normalize(a));
    const isCorrect = possible.includes(this.normalize(answer));

    if (isCorrect) {
      this.stateService.recordExerciseAttempt(ex, answer, true);
    } else {
      this.feedbackMap.update(m => ({
        ...m,
        [ex.id]: 'ჯერ კიდევ არასწორია. გახსენი ქვემოთ მინიშნება!'
      }));
    }
  }
}