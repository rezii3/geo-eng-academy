import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LearningStateService } from '../../services/learning-state.service';
import { PLACEMENT_TEST_QUESTIONS } from '../../data/placement-and-plan.data';
import { CefrLevel } from '../../models/course.model';

@Component({
  selector: 'app-placement-test',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="placement-page fade-in">
      <div class="card placement-card">
        @if (!finished()) {
          <div class="pt-top">
            <span class="badge badge-primary">დონის განმსაზღვრელი ტესტი (A1 - B1)</span>
            <span>კითხვა {{ currentIdx() + 1 }} / {{ questions.length }}</span>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar-fill" [style.width.%]="((currentIdx() + 1) / questions.length) * 100"></div>
          </div>

          <div class="pt-question">
            <p>{{ questions[currentIdx()].promptGe }}</p>
            <h2>{{ questions[currentIdx()].question }}</h2>
          </div>

          <div class="pt-options">
            @for (opt of questions[currentIdx()].options; track opt) {
              <button
                class="opt-btn"
                [class.selected]="selectedOption() === opt"
                (click)="selectedOption.set(opt)">
                {{ opt }}
              </button>
            }
          </div>

          <div class="pt-footer">
            <button
              class="btn btn-primary"
              [disabled]="!selectedOption()"
              (click)="submitQuestion()">
              {{ currentIdx() + 1 < questions.length ? 'შემდეგი კითხვა →' : 'შედეგის გამოთვლა 🏆' }}
            </button>
          </div>
        } @else {
          <div class="pt-result fade-in">
            <div class="res-icon">🎓</div>
            <span class="badge badge-success">ტესტი დასრულებულია</span>
            <h2>შენი რეკომენდებული საწყისი დონეა: {{ determinedLevel() }}</h2>
            <p class="score-line">
              სწორი პასუხები: <strong>{{ score() }} / {{ questions.length }}</strong>
            </p>
            <p class="recommendation-text">{{ getRecommendationText() }}</p>

            <div class="res-actions">
              <a routerLink="/curriculum" class="btn btn-primary">🗺️ კურსის დაწყება</a>
              <button class="btn btn-secondary" (click)="restartTest()">🔄 ტესტის თავიდან გავლა</button>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .placement-page {
      max-width: 680px;
      margin: 0 auto;
    }

    .placement-card {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .pt-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      font-size: 0.9rem;
    }

    .pt-question {
      p { color: var(--text-muted); margin-bottom: 6px; font-weight: 600; }
      h2 { font-size: 1.4rem; }
    }

    .pt-options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;

      @media (max-width: 540px) {
        grid-template-columns: 1fr;
      }

      .opt-btn {
        padding: 16px;
        border-radius: var(--radius-md);
        border: 2px solid var(--border-color);
        background-color: var(--bg-surface);
        font-weight: 700;
        font-size: 1rem;
        color: var(--text-main);
        text-align: left;

        &.selected {
          border-color: var(--primary);
          background-color: var(--primary-light);
          color: var(--primary);
        }
      }
    }

    .pt-footer {
      display: flex;
      justify-content: flex-end;
    }

    .pt-result {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      padding: 24px 0;

      .res-icon { font-size: 4rem; }
      h2 { font-size: 1.6rem; color: var(--primary); }
      .recommendation-text { color: var(--text-muted); max-width: 500px; }
      .res-actions { display: flex; gap: 12px; margin-top: 12px; flex-wrap: wrap; justify-content: center; }
    }
  `]
})
export class PlacementTestComponent {
  private stateService = inject(LearningStateService);
  public questions = PLACEMENT_TEST_QUESTIONS;

  public currentIdx = signal<number>(0);
  public selectedOption = signal<string>('');
  public score = signal<number>(0);
  public finished = signal<boolean>(false);
  public determinedLevel = signal<CefrLevel>('A1');

  public submitQuestion(): void {
    const q = this.questions[this.currentIdx()];
    if (this.selectedOption() === q.correctAnswer) {
      this.score.update(s => s + 1);
    }

    if (this.currentIdx() + 1 < this.questions.length) {
      this.currentIdx.update(i => i + 1);
      this.selectedOption.set('');
    } else {
      this.calculateFinalLevel();
    }
  }

  private calculateFinalLevel(): void {
    const finalScore = this.score();
    let lvl: CefrLevel = 'A1';
    if (finalScore >= 12) {
      lvl = 'B1';
    } else if (finalScore >= 6) {
      lvl = 'A2';
    }
    this.determinedLevel.set(lvl);
    this.finished.set(true);
    this.stateService.savePlacementResult(lvl, finalScore);
  }

  public getRecommendationText(): string {
    const lvl = this.determinedLevel();
    if (lvl === 'A1') {
      return 'გირჩევთ დაიწყოთ Unit 1-დან, რათა მყარი საფუძველი ჩაუყაროთ გრამატიკასა და გამოთქმას.';
    } else if (lvl === 'A2') {
      return 'საბაზისო საკითხები უკვე გესმით! შეგიძლიათ სწრაფად გადაიმეოროთ A1 და გადახვიდეთ A2 დონეზე.';
    }
    return 'შესანიშნავი შედეგია! თქვენ უკვე მზად ხართ B1 დონის თემების დასამუშავებლად.';
  }

  public restartTest(): void {
    this.currentIdx.set(0);
    this.selectedOption.set('');
    this.score.set(0);
    this.finished.set(false);
  }
}