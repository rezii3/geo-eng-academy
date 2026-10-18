import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LearningStateService } from '../../services/learning-state.service';
import { CefrLevel } from '../../models/course.model';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="curriculum-page fade-in">
      <div class="page-head">
        <div>
          <h1>🗺️ სასწავლო კურიკულუმის რუკა (A1 - B1)</h1>
          <p>აირჩიე დონე და გაიარე იუნიტები თანმიმდევრულად: ლექსიკა, გრამატიკა, დიალოგები და სავარჯიშოები.</p>
        </div>

        <!-- დონის ფილტრის ტაბები -->
        <div class="level-tabs">
          @for (lvl of ['ALL', 'A1', 'A2', 'B1']; track lvl) {
            <button
              class="tab-btn"
              [class.active]="selectedLevel() === lvl"
              (click)="setLevel(lvl)">
              {{ lvl === 'ALL' ? 'ყველა (30)' : lvl + ' დონე' }}
            </button>
          }
        </div>
      </div>

      <!-- იუნიტების სია -->
      <div class="units-grid">
        @for (unit of filteredUnits(); track unit.id) {
          <div class="card unit-card" [class.completed]="isCompleted(unit.id)" [class.template-only]="!unit.isAvailable">
            <div class="unit-card-top">
              <div class="unit-icon">{{ unit.icon }}</div>
              <div class="unit-badges">
                <span class="badge badge-primary">{{ unit.level }} • Unit {{ unit.unitNumber }}</span>
                @if (isCompleted(unit.id)) {
                  <span class="badge badge-success">✓ დასრულებული ({{ getScore(unit.id) }}%)</span>
                } @else if (unit.isAvailable) {
                  <span class="badge badge-warning">ხელმისაწვდომია</span>
                } @else {
                  <span class="badge">გეგმაშია</span>
                }
              </div>
            </div>

            <div class="unit-body">
              <h3>{{ unit.titleGe }}</h3>
              <span class="en-sub">{{ unit.titleEn }}</span>
              <p>{{ unit.descriptionGe }}</p>
            </div>

            <div class="unit-meta">
              <span>⏱️ {{ unit.estimatedMinutes }} წთ</span>
              @if (unit.isAvailable) {
                <span>📚 {{ unit.vocabulary.length }} სიტყვა</span>
                <span>✍️ {{ unit.exercises.length + unit.unitTest.length }} დავალება</span>
              }
            </div>

            <div class="unit-footer">
              @if (unit.isAvailable) {
                <a [routerLink]="['/lesson', unit.id]" class="btn btn-primary full-width">
                  {{ isCompleted(unit.id) ? '🔄 თავიდან გავლა' : '▶ გაკვეთილის დაწყება' }}
                </a>
              } @else {
                <button class="btn btn-secondary full-width" disabled>
                  🔒 კონტენტი ემატება ეტაპობრივად
                </button>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .curriculum-page {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .page-head {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;
      gap: 16px;

      h1 {
        font-size: 1.6rem;
        font-weight: 800;
        margin-bottom: 6px;
      }

      p {
        color: var(--text-muted);
        font-size: 0.95rem;
      }
    }

    .level-tabs {
      display: flex;
      gap: 8px;
      background-color: var(--bg-surface);
      padding: 6px;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-color);

      .tab-btn {
        padding: 8px 16px;
        border-radius: var(--radius-sm);
        font-weight: 700;
        color: var(--text-muted);
        font-size: 0.9rem;

        &.active {
          background-color: var(--primary);
          color: #ffffff;
        }
      }
    }

    .units-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }

    .unit-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 16px;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-3px);
        box-shadow: var(--card-shadow-hover);
      }

      &.completed {
        border-color: var(--success);
      }

      &.template-only {
        opacity: 0.78;
      }
    }

    .unit-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .unit-icon {
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        background-color: var(--bg-subtle);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
      }

      .unit-badges {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 6px;
      }
    }

    .unit-body {
      h3 {
        font-size: 1.15rem;
        font-weight: 700;
        margin-bottom: 2px;
      }

      .en-sub {
        display: block;
        font-size: 0.8rem;
        color: var(--primary);
        font-weight: 600;
        margin-bottom: 8px;
      }

      p {
        font-size: 0.88rem;
        color: var(--text-muted);
      }
    }

    .unit-meta {
      display: flex;
      gap: 14px;
      font-size: 0.8rem;
      color: var(--text-muted);
      font-weight: 600;
      padding-top: 10px;
      border-top: 1px solid var(--border-color);
    }

    .full-width {
      width: 100%;
    }
  `]
})
export class CurriculumComponent {
  public stateService = inject(LearningStateService);
  public selectedLevel = signal<string>('ALL');

  public filteredUnits = computed(() => {
    const lvl = this.selectedLevel();
    if (lvl === 'ALL') return this.stateService.allUnits;
    return this.stateService.allUnits.filter(u => u.level === (lvl as CefrLevel));
  });

  public setLevel(lvl: string): void {
    this.selectedLevel.set(lvl);
  }

  public isCompleted(unitId: string): boolean {
    return this.stateService.state().completedUnitIds.includes(unitId);
  }

  public getScore(unitId: string): number {
    return this.stateService.state().unitScores[unitId] || 100;
  }
}