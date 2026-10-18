import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LearningStateService } from '../../services/learning-state.service';
import { STUDY_PLAN_WEEKS } from '../../data/placement-and-plan.data';

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="plan-page fade-in">
      <div class="page-head">
        <div>
          <h1>🗓️ 12-კვირიანი სასწავლო გეგმა (A1 ➔ B1)</h1>
          <p>
            ყოველდღიური 45-60 წუთიანი გრაფიკი. მონიშნე შესრულებული დღეები და მიიღე დამატებითი +15 XP!
          </p>
        </div>
        <div class="plan-progress-badge">
          შესრულებულია: <strong>{{ stateService.state().completedPlanTaskIds.length }} / 84 დღე</strong>
        </div>
      </div>

      <!-- კვირების გადამრთველი -->
      <div class="weeks-selector">
        @for (w of weeks; track w.weekNumber) {
          <button
            class="week-pill"
            [class.active]="selectedWeek() === w.weekNumber"
            (click)="selectedWeek.set(w.weekNumber)">
            კვირა {{ w.weekNumber }} ({{ w.level }})
          </button>
        }
      </div>

      <!-- არჩეული კვირის დეტალები -->
      @for (week of weeks; track week.weekNumber) {
        @if (week.weekNumber === selectedWeek()) {
          <div class="card week-card fade-in">
            <div class="week-header">
              <div>
                <span class="badge badge-primary">დონე {{ week.level }} • კვირა {{ week.weekNumber }}</span>
                <h2>{{ week.titleGe }}</h2>
                <p>🎯 კვირის მიზანი: {{ week.goalGe }}</p>
              </div>
            </div>

            <div class="days-checklist">
              @for (day of week.days; track day.id) {
                <div class="day-item" [class.done]="isTaskDone(day.id)">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      [checked]="isTaskDone(day.id)"
                      (change)="stateService.togglePlanTask(day.id)" />
                    <div class="day-info">
                      <h4>{{ day.dayTitleGe }}</h4>
                      <p>{{ day.descriptionGe }}</p>
                    </div>
                  </label>

                  <div class="day-right">
                    <span class="duration">⏱️ {{ day.durationMinutes }} წთ</span>
                    @if (day.linkedUnitId) {
                      <a [routerLink]="['/lesson', day.linkedUnitId]" class="btn btn-secondary btn-sm">
                        გაკვეთილზე გადასვლა →
                      </a>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .plan-page {
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
      p { color: var(--text-muted); }

      .plan-progress-badge {
        background-color: var(--primary-light);
        color: var(--primary);
        padding: 10px 16px;
        border-radius: var(--radius-md);
        font-size: 0.9rem;
      }
    }

    .weeks-selector {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .week-pill {
        padding: 8px 14px;
        border-radius: var(--radius-sm);
        background-color: var(--bg-surface);
        border: 1px solid var(--border-color);
        color: var(--text-muted);
        font-weight: 700;
        font-size: 0.85rem;

        &.active {
          background-color: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }
      }
    }

    .week-card {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .week-header {
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 16px;
        h2 { font-size: 1.35rem; margin: 8px 0 4px; }
        p { color: var(--text-muted); font-weight: 600; }
      }
    }

    .days-checklist {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .day-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 14px;
      padding: 16px;
      border-radius: var(--radius-md);
      background-color: var(--bg-subtle);
      border: 1px solid transparent;

      &.done {
        border-color: var(--success);
        background-color: var(--success-light);

        h4 {
          text-decoration: line-through;
        }
      }

      .checkbox-label {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        cursor: pointer;
        flex: 1;

        input[type="checkbox"] {
          width: 22px;
          height: 22px;
          margin-top: 2px;
          accent-color: var(--success);
          cursor: pointer;
        }

        h4 { font-size: 1.02rem; margin-bottom: 2px; }
        p { font-size: 0.88rem; color: var(--text-muted); }
      }

      .day-right {
        display: flex;
        align-items: center;
        gap: 12px;

        .duration {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-muted);
        }
      }
    }
  `]
})
export class StudyPlanComponent {
  public stateService = inject(LearningStateService);
  public weeks = STUDY_PLAN_WEEKS;
  public selectedWeek = signal<number>(1);

  public isTaskDone(taskId: string): boolean {
    return this.stateService.state().completedPlanTaskIds.includes(taskId);
  }
}