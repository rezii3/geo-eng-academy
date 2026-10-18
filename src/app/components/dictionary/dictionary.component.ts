import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LearningStateService } from '../../services/learning-state.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="dictionary-page fade-in">
      <div class="page-head">
        <div>
          <h1>📖 პირადი და კურსის ლექსიკონი</h1>
          <p>მოძებნე ნებისმიერი სიტყვა ქართულად ან ინგლისურად, მოუსმინე გამოთქმას და შეინახე რჩეულებში (⭐).</p>
        </div>

        <div class="dict-tabs">
          <button
            class="btn btn-sm"
            [class.btn-primary]="viewMode() === 'all'"
            [class.btn-secondary]="viewMode() !== 'all'"
            (click)="viewMode.set('all')">
            ყველა სიტყვა ({{ stateService.allVocab.length }})
          </button>
          <button
            class="btn btn-sm"
            [class.btn-primary]="viewMode() === 'saved'"
            [class.btn-secondary]="viewMode() !== 'saved'"
            (click)="viewMode.set('saved')">
            ⭐ შენახული ({{ stateService.savedVocabulary().length }})
          </button>
        </div>
      </div>

      <!-- ძებნის ველი -->
      <div class="card search-bar">
        <input
          type="text"
          placeholder="🔍 მოძებნე სიტყვა ინგლისურად ან ქართულად (მაგ: family, ოჯახი)..."
          [ngModel]="searchQuery()"
          (ngModelChange)="searchQuery.set($event)" />
      </div>

      <!-- სიტყვების ცხრილი / სია -->
      <div class="words-list">
        @for (w of filteredWords(); track w.id) {
          <div class="card word-row">
            <div class="w-left">
              <button class="audio-btn" (click)="audio.speak(w.english, 0.9)" title="მოსმენა">🔊</button>
              <button class="audio-btn audio-slow" (click)="audio.speak(w.english, 0.6)" title="ნელა">🐢</button>
              <div>
                <div class="w-title">
                  <strong>{{ w.english }}</strong>
                  <span class="trans">[{{ w.transcriptionGe }}]</span>
                  <span class="badge badge-primary">{{ w.level }}</span>
                </div>
                <div class="w-ge">{{ w.georgian }} <span class="pos">({{ w.partOfSpeech }})</span></div>
              </div>
            </div>

            <div class="w-right">
              <div class="w-example">
                <div>"{{ w.exampleEn }}"</div>
                <small>{{ w.exampleGe }}</small>
              </div>
              <button
                class="star-btn"
                [class.saved]="stateService.isWordSaved(w.id)"
                (click)="stateService.toggleSavedWord(w.id)">
                {{ stateService.isWordSaved(w.id) ? '⭐' : '☆' }}
              </button>
            </div>
          </div>
        } @empty {
          <div class="card empty-dict">
            <p>სიტყვები ვერ მოიძებნა. გაკვეთილის გავლისას დააჭირე ⭐ ვარსკვლავს სიტყვების შესანახად!</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .dictionary-page {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .page-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 16px;

      h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 4px; }
      p { color: var(--text-muted); font-size: 0.92rem; }
      .dict-tabs { display: flex; gap: 10px; }
    }

    .search-bar {
      padding: 12px 16px;
      input {
        width: 100%;
        border: none;
        background: transparent;
        font-size: 1rem;
        color: var(--text-main);
        outline: none;
      }
    }

    .words-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .word-row {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;

      .w-left {
        display: flex;
        align-items: center;
        gap: 12px;

        .w-title {
          display: flex;
          align-items: center;
          gap: 8px;
          strong { font-size: 1.2rem; color: var(--primary); }
          .trans { font-size: 0.85rem; color: var(--text-muted); }
        }

        .w-ge {
          font-weight: 700;
          margin-top: 2px;
          .pos { font-weight: 400; font-size: 0.8rem; color: var(--text-muted); }
        }
      }

      .w-right {
        display: flex;
        align-items: center;
        gap: 16px;

        .w-example {
          text-align: right;
          font-size: 0.88rem;
          small { color: var(--text-muted); }

          @media (max-width: 650px) {
            text-align: left;
          }
        }

        .star-btn {
          font-size: 1.5rem;
          color: var(--text-muted);
          &.saved { color: var(--warning); }
        }
      }
    }

    .empty-dict {
      text-align: center;
      color: var(--text-muted);
      padding: 36px;
    }
  `]
})
export class DictionaryComponent {
  public stateService = inject(LearningStateService);
  public audio = inject(AudioService);

  public viewMode = signal<'all' | 'saved'>('all');
  public searchQuery = signal<string>('');

  public filteredWords = computed(() => {
    const base = this.viewMode() === 'saved'
      ? this.stateService.savedVocabulary()
      : this.stateService.allVocab;

    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return base;

    return base.filter(
      w =>
        w.english.toLowerCase().includes(q) ||
        w.georgian.toLowerCase().includes(q) ||
        w.transcriptionGe.toLowerCase().includes(q)
    );
  });
}