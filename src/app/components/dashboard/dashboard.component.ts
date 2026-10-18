import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LearningStateService } from '../../services/learning-state.service';
import { CefrLevel } from '../../models/course.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="dashboard fade-in">
      <!-- მისალმების ბანერი -->
      <section class="hero-card">
        <div class="hero-content">
          <span class="badge badge-primary">CEFR A1 ➔ B1 სრული კურსი</span>
          <h1>გამარჯობა! მზად ხარ დღევანდელი გაკვეთილისთვის? 🚀</h1>
          <p>
            ყველა შენი პასუხი, ქულა, ნასწავლი სიტყვა და გაკვეთილის პოზიცია ავტომატურად ინახება ბრაუზერში!
          </p>
          <div class="hero-actions">
            <a [routerLink]="['/lesson', nextRecommendedUnit().id]" class="btn btn-primary">
              ▶ განაგრძე: Unit {{ nextRecommendedUnit().unitNumber }} — {{ nextRecommendedUnit().titleGe }}
            </a>
            @if (!stateService.state().placementLevel) {
              <a routerLink="/placement-test" class="btn btn-secondary">
                📝 გაიარე დონის ტესტი
              </a>
            }
          </div>
        </div>
        <div class="hero-illustration">
          <div class="xp-circle">
            <span class="xp-num">{{ stateService.xp() }}</span>
            <span class="xp-label">სულ XP</span>
          </div>
        </div>
      </section>

      <!-- სწრაფი სტატისტიკის ბარათები -->
      <section class="stats-grid">
        <div class="card stat-box">
          <div class="stat-icon-wrap streak-bg">🔥</div>
          <div>
            <h3>{{ stateService.streakDays() }} დღე</h3>
            <p>უწყვეტი სწავლა (Streak)</p>
          </div>
        </div>

        <div class="card stat-box">
          <div class="stat-icon-wrap done-bg">✅</div>
          <div>
            <h3>{{ stateService.state().completedUnitIds.length }} / {{ stateService.allUnits.length }}</h3>
            <p>დასრულებული იუნიტი</p>
          </div>
        </div>

        <div class="card stat-box">
          <div class="stat-icon-wrap acc-bg">🎯</div>
          <div>
            <h3>{{ stateService.accuracyPercentage() }}%</h3>
            <p>პასუხების სიზუსტე</p>
          </div>
        </div>

        <div class="card stat-box">
          <div class="stat-icon-wrap vocab-bg">🗂️</div>
          <div>
            <h3>{{ stateService.dueFlashcardsCount() }} სიტყვა</h3>
            <p>დღეს გასამეორებელი</p>
          </div>
        </div>
      </section>

      <!-- დონეების პროგრესი (A1, A2, B1) -->
      <section class="levels-section">
        <div class="section-header">
          <h2>შენი პროგრესი დონეების მიხედვით</h2>
          <a routerLink="/curriculum" class="link-btn">სრული რუკის ნახვა →</a>
        </div>

        <div class="levels-grid">
          @for (lvl of levels; track lvl.code) {
            <div class="card level-card">
              <div class="level-top">
                <span class="level-badge" [attr.data-level]="lvl.code">{{ lvl.code }}</span>
                <span class="level-pct">{{ stateService.getLevelProgress(lvl.code) }}%</span>
              </div>
              <h3>{{ lvl.nameGe }}</h3>
              <p>{{ lvl.descGe }}</p>
              <div class="progress-bar-container">
                <div class="progress-bar-fill" [style.width.%]="stateService.getLevelProgress(lvl.code)"></div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- სწრაფი მოქმედებების ბარათები -->
      <section class="quick-links-grid">
        <div class="card action-card">
          <div class="action-head">
            <span class="action-emoji">🗂️</span>
            <div>
              <h3>Leitner-ის ფლეშ-ბარათები</h3>
              <p>დაიმახსოვრე სიტყვები სამუდამოდ ინტერვალური გამეორების მეთოდით.</p>
            </div>
          </div>
          <a routerLink="/flashcards" class="btn btn-primary btn-sm">
            ბარათების გახსნა ({{ stateService.dueFlashcardsCount() }})
          </a>
        </div>

        <div class="card action-card">
          <div class="action-head">
            <span class="action-emoji">🎯</span>
            <div>
              <h3>შეცდომების გამოსწორება</h3>
              <p>აქ გროვდება ყველა საკითხი, სადაც შეცდომა დაუშვი, რათა ხელახლა გაიარო.</p>
            </div>
          </div>
          <a routerLink="/mistakes" class="btn btn-secondary btn-sm">
            შეცდომების ნახვა ({{ stateService.mistakes().length }})
          </a>
        </div>

        <div class="card action-card">
          <div class="action-head">
            <span class="action-emoji">🗓️</span>
            <div>
              <h3>12-კვირიანი სასწავლო გეგმა</h3>
              <p>მიჰყევი ყოველდღიურ 45-60 წუთიან გრაფიკს და მონიშნე შესრულებული დღეები.</p>
            </div>
          </div>
          <a routerLink="/study-plan" class="btn btn-secondary btn-sm">
            კალენდრის გახსნა
          </a>
        </div>
      </section>

      <!-- პროგრესის შენახვა / ფაილად გადმოწერა / აღდგენა -->
      <section class="card backup-card">
        <div class="backup-info">
          <h3>💾 პროგრესის სარეზერვო შენახვა (Auto-Save & Backup)</h3>
          <p>
            შენი პროგრესი ავტომატურად ინახება ამ ბრაუზერში (LocalStorage). სურვილის შემთხვევაში, შეგიძლია გადმოწერო პროგრესის ფაილი კომპიუტერში ან აღადგინო იგი.
          </p>
          @if (backupMessage()) {
            <span class="backup-msg">{{ backupMessage() }}</span>
          }
        </div>
        <div class="backup-actions">
          <button class="btn btn-secondary btn-sm" (click)="downloadBackup()">
            ⬇️ პროგრესის ფაილად შენახვა (.json)
          </button>
          <label class="btn btn-secondary btn-sm file-label">
            ⬆️ ფაილიდან აღდგენა
            <input type="file" accept=".json" (change)="onFileSelected($event)" hidden />
          </label>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .dashboard { display: flex; flex-direction: column; gap: 28px; }
    .hero-card {
      background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%);
      color: #ffffff; border-radius: var(--radius-lg); padding: 32px;
      display: flex; align-items: center; justify-content: space-between; gap: 24px;
      box-shadow: 0 12px 24px -6px rgba(79, 70, 229, 0.35);
      @media (max-width: 768px) { flex-direction: column; text-align: center; padding: 24px; }
      .hero-content {
        max-width: 640px;
        .badge { background: rgba(255, 255, 255, 0.2); color: #fff; margin-bottom: 12px; }
        h1 { font-size: 1.75rem; font-weight: 800; margin-bottom: 10px; line-height: 1.25; }
        p { opacity: 0.92; margin-bottom: 20px; font-size: 0.98rem; }
      }
      .hero-actions {
        display: flex; flex-wrap: wrap; gap: 12px;
        @media (max-width: 768px) { justify-content: center; }
        .btn-primary { background-color: #ffffff; color: var(--primary); font-weight: 700; &:hover { background-color: #f1f5f9; } }
        .btn-secondary { background-color: rgba(255, 255, 255, 0.15); color: #ffffff; border-color: rgba(255, 255, 255, 0.3); }
      }
      .xp-circle {
        width: 130px; height: 130px; border-radius: 50%; background: rgba(255, 255, 255, 0.15);
        border: 4px solid rgba(255, 255, 255, 0.4); display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0;
        .xp-num { font-size: 2rem; font-weight: 800; }
        .xp-label { font-size: 0.8rem; opacity: 0.9; }
      }
    }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
    .stat-box {
      display: flex; align-items: center; gap: 16px; padding: 20px;
      .stat-icon-wrap {
        width: 52px; height: 52px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; flex-shrink: 0;
        &.streak-bg { background-color: var(--warning-light); }
        &.done-bg { background-color: var(--success-light); }
        &.acc-bg { background-color: var(--primary-light); }
        &.vocab-bg { background-color: var(--bg-subtle); }
      }
      h3 { font-size: 1.35rem; font-weight: 800; }
      p { font-size: 0.85rem; color: var(--text-muted); }
    }
    .section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; h2 { font-size: 1.25rem; font-weight: 700; } .link-btn { color: var(--primary); text-decoration: none; font-weight: 600; font-size: 0.9rem; } }
    .levels-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
    .level-card {
      display: flex; flex-direction: column; gap: 10px;
      .level-top { display: flex; justify-content: space-between; align-items: center; }
      .level-badge {
        padding: 4px 12px; border-radius: var(--radius-sm); font-weight: 800; font-size: 0.9rem;
        &[data-level="A1"] { background: #dcfce7; color: #15803d; }
        &[data-level="A2"] { background: #dbeafe; color: #1d4ed8; }
        &[data-level="B1"] { background: #f3e8ff; color: #7e22ce; }
      }
      .level-pct { font-weight: 700; color: var(--text-muted); }
      h3 { font-size: 1.1rem; }
      p { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px; }
    }
    .quick-links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
    .action-card {
      display: flex; flex-direction: column; justify-content: space-between; gap: 16px;
      .action-head { display: flex; gap: 14px; align-items: flex-start; .action-emoji { font-size: 2rem; } h3 { font-size: 1.05rem; margin-bottom: 4px; } p { font-size: 0.85rem; color: var(--text-muted); } }
    }
    .backup-card {
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
      background-color: var(--bg-subtle);
      .backup-info {
        max-width: 650px;
        h3 { font-size: 1.05rem; margin-bottom: 4px; }
        p { font-size: 0.85rem; color: var(--text-muted); }
        .backup-msg { display: inline-block; margin-top: 6px; font-size: 0.85rem; font-weight: 700; color: var(--success); }
      }
      .backup-actions { display: flex; gap: 10px; flex-wrap: wrap; }
      .file-label { cursor: pointer; }
    }
  `]
})
export class DashboardComponent {
  public stateService = inject(LearningStateService);
  public backupMessage = signal<string>('');

  public levels: { code: CefrLevel; nameGe: string; descGe: string }[] = [
    {
      code: 'A1',
      nameGe: 'დონე A1 — დამწყები (Beginner)',
      descGe: 'ანბანი, მისალმება, To Be, Have got, Present Simple, Past Simple და საბაზისო 300 სიტყვა.'
    },
    {
      code: 'A2',
      nameGe: 'დონე A2 — ელემენტარული (Elementary)',
      descGe: 'შედარებითი ხარისხები, მომავალი დრო, Present Perfect, მოდალური ზმნები და ყოველდღიური დიალოგები.'
    },
    {
      code: 'B1',
      nameGe: 'დონე B1 — საშუალო (Intermediate)',
      descGe: 'პირობითი წინადადებები, Passive Voice, Past Perfect, ირიბი თქმა, ფრაზული ზმნები და იდიომები.'
    }
  ];

  public nextRecommendedUnit = computed(() => {
    const s = this.stateService.state();
    const availableUnits = this.stateService.allUnits.filter(u => u.isAvailable);

    // თუ ბოლოს რომელიმე იუნიტზე მუშაობდა და ჯერ არ დაუსრულებია, ის გავუხსნათ
    if (s.lastVisitedUnitId) {
      const last = availableUnits.find(u => u.id === s.lastVisitedUnitId);
      if (last && !s.completedUnitIds.includes(last.id)) {
        return last;
      }
    }

    return availableUnits.find(u => !s.completedUnitIds.includes(u.id)) || availableUnits[0];
  });

  public downloadBackup(): void {
    this.stateService.exportProgressJson();
    this.backupMessage.set('✅ პროგრესის ფაილი წარმატებით ჩამოიტვირთა!');
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result as string;
      const ok = this.stateService.importProgressJson(content);
      if (ok) {
        this.backupMessage.set('🎉 პროგრესი წარმატებით აღდგა!');
      } else {
        this.backupMessage.set('❌ ფაილის ფორმატი არასწორია.');
      }
    };
    reader.readAsText(file);
  }
}