import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LearningStateService } from '../../services/learning-state.service';
import { AudioService } from '../../services/audio.service';
import { CourseUnit, Exercise } from '../../models/course.model';

type LessonTab = 'vocabulary' | 'grammar' | 'dialogue' | 'exercises' | 'test';

@Component({
  selector: 'app-lesson-player',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    @if (unit(); as currentUnit) {
      <div class="lesson-container fade-in">
        <!-- ზედა პანელი -->
        <div class="lesson-header card">
          <div class="header-left">
            <div class="top-row-links">
              <a routerLink="/curriculum" class="back-btn">← კურსის რუკა</a>
              <span class="autosave-indicator">💾 პროგრესი ავტომატურად ინახება</span>
            </div>
            <div class="unit-title-wrap">
              <span class="unit-emoji">{{ currentUnit.icon }}</span>
              <div>
                <span class="badge badge-primary">{{ currentUnit.level }} • Unit {{ currentUnit.unitNumber }}</span>
                <h1>{{ currentUnit.titleGe }}</h1>
              </div>
            </div>
          </div>

          <!-- გაკვეთილის ეტაპების ტაბები -->
          <div class="lesson-tabs">
            <button class="l-tab" [class.active]="activeTab() === 'vocabulary'" (click)="switchTab('vocabulary')">
              1. ლექსიკა ({{ currentUnit.vocabulary.length }})
            </button>
            <button class="l-tab" [class.active]="activeTab() === 'grammar'" (click)="switchTab('grammar')">
              2. გრამატიკა
            </button>
            <button class="l-tab" [class.active]="activeTab() === 'dialogue'" (click)="switchTab('dialogue')">
              3. დიალოგი
            </button>
            <button class="l-tab" [class.active]="activeTab() === 'exercises'" (click)="switchTab('exercises')">
              4. პრაქტიკა ({{ currentUnit.exercises.length }})
            </button>
            <button class="l-tab" [class.active]="activeTab() === 'test'" (click)="switchTab('test')">
              5. ტესტი ({{ currentUnit.unitTest.length }})
            </button>
          </div>
        </div>

        <!-- TAB 1: ლექსიკა -->
        @if (activeTab() === 'vocabulary') {
          <div class="tab-content fade-in">
            <div class="section-intro card">
              <div>
                <h2>📚 იუნიტის სიტყვები და გამოთქმა</h2>
                <p>მოუსმინე თითოეულ სიტყვას (🔊 ჩვეულებრივი, 🐢 ნელი) და დააკვირდი ქართულ ტრანსკრიფციას.</p>
              </div>
              <button class="btn btn-primary" (click)="switchTab('grammar')">
                შემდეგი: გრამატიკა →
              </button>
            </div>

            <div class="vocab-grid">
              @for (word of currentUnit.vocabulary; track word.id) {
                <div class="card vocab-card">
                  <div class="vocab-top">
                    <span class="pos-tag">{{ word.partOfSpeech }}</span>
                    <div class="vocab-actions">
                      <button class="audio-btn" (click)="audio.speak(word.english, 0.9)" title="მოსმენა">🔊</button>
                      <button class="audio-btn audio-slow" (click)="audio.speak(word.english, 0.6)" title="ნელა მოსმენა">🐢</button>
                      <button
                        class="save-btn"
                        [class.saved]="stateService.isWordSaved(word.id)"
                        (click)="stateService.toggleSavedWord(word.id)"
                        title="პირად ლექსიკონში შენახვა">
                        {{ stateService.isWordSaved(word.id) ? '⭐' : '☆' }}
                      </button>
                    </div>
                  </div>

                  <div class="vocab-main">
                    <h3>{{ word.english }}</h3>
                    <span class="transcription">[{{ word.transcriptionGe }}]</span>
                    <p class="ge-meaning">{{ word.georgian }}</p>
                  </div>

                  <div class="vocab-example">
                    <div class="ex-en">
                      <span>"{{ word.exampleEn }}"</span>
                      <button class="mini-audio" (click)="audio.speak(word.exampleEn, 0.85)">🔊</button>
                    </div>
                    <div class="ex-ge">{{ word.exampleGe }}</div>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <!-- TAB 2: გრამატიკა -->
        @if (activeTab() === 'grammar') {
          <div class="tab-content fade-in">
            <div class="card grammar-card">
              <div class="grammar-head">
                <span class="badge badge-primary">გრამატიკის წესები ქართულად</span>
                <h2>{{ currentUnit.grammar.title }}</h2>
                <p class="summary">{{ currentUnit.grammar.summaryGe }}</p>
              </div>

              @if (currentUnit.grammar.georgianComparison) {
                <div class="comparison-box">
                  <h4>🇬🇪 შედარება ქართულ ენასთან (რატომ გვეშლება ხოლმე?):</h4>
                  <p>{{ currentUnit.grammar.georgianComparison }}</p>
                </div>
              }

              @for (sec of currentUnit.grammar.sections; track sec.heading) {
                <div class="grammar-section">
                  <h3>{{ sec.heading }}</h3>
                  <p>{{ sec.explanationGe }}</p>

                  <div class="examples-list">
                    @for (ex of sec.examples; track ex.en) {
                      <div class="example-item">
                        <div class="ex-main">
                          <button class="audio-btn" (click)="audio.speak(ex.en, 0.85)">🔊</button>
                          <div>
                            <strong class="en">{{ ex.en }}</strong>
                            <span class="ge"> — {{ ex.ge }}</span>
                          </div>
                        </div>
                        @if (ex.note) {
                          <div class="ex-note">💡 {{ ex.note }}</div>
                        }
                      </div>
                    }
                  </div>
                </div>
              }

              @for (table of currentUnit.grammar.tables; track table.title) {
                <div class="table-wrapper">
                  <h3>📊 {{ table.title }}</h3>
                  <table class="grammar-table">
                    <thead>
                      <tr>
                        @for (th of table.headers; track th) {
                          <th>{{ th }}</th>
                        }
                      </tr>
                    </thead>
                    <tbody>
                      @for (row of table.rows; track $index) {
                        <tr>
                          @for (cell of row; track $index) {
                            <td>{{ cell }}</td>
                          }
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              }

              @if (currentUnit.grammar.commonMistakes.length > 0) {
                <div class="mistakes-box">
                  <h3>⚠️ ყურადღება! ხშირად დაშვებული შეცდომები:</h3>
                  @for (m of currentUnit.grammar.commonMistakes; track m.wrong) {
                    <div class="mistake-row">
                      <div class="wrong">❌ {{ m.wrong }}</div>
                      <div class="right">✅ {{ m.right }}</div>
                      <div class="m-exp">{{ m.explanationGe }}</div>
                    </div>
                  }
                </div>
              }

              <div class="step-footer">
                <button class="btn btn-secondary" (click)="switchTab('vocabulary')">← ლექსიკა</button>
                <button class="btn btn-primary" (click)="switchTab('dialogue')">შემდეგი: დიალოგი →</button>
              </div>
            </div>
          </div>
        }

        <!-- TAB 3: დიალოგი -->
        @if (activeTab() === 'dialogue') {
          <div class="tab-content fade-in">
            <div class="card dialogue-card">
              <div class="dialogue-header">
                <div>
                  <h2>💬 {{ currentUnit.dialogue.title }}</h2>
                  <p>{{ currentUnit.dialogue.contextGe }}</p>
                </div>
                <div class="dialogue-controls">
                  <button class="btn btn-secondary btn-sm" (click)="showTranslations.set(!showTranslations())">
                    {{ showTranslations() ? '🙈 ქართული თარგმანის დამალვა' : '👁️ ქართული თარგმანის ჩვენება' }}
                  </button>
                  <button class="btn btn-primary btn-sm" (click)="playFullDialogue(currentUnit)">
                    🔊 მთლიანი დიალოგის მოსმენა
                  </button>
                </div>
              </div>

              <div class="chat-list">
                @for (line of currentUnit.dialogue.lines; track $index) {
                  <div class="chat-bubble" [class.alt]="$index % 2 === 1">
                    <div class="speaker-avatar">{{ line.avatar }}</div>
                    <div class="bubble-body">
                      <div class="speaker-name">{{ line.speaker }}</div>
                      <div class="en-line">
                        <span>{{ line.english }}</span>
                        <button class="audio-btn" (click)="audio.speak(line.english, 0.88)">🔊</button>
                      </div>
                      @if (showTranslations()) {
                        <div class="ge-line">{{ line.georgian }}</div>
                      }
                    </div>
                  </div>
                }
              </div>

              <div class="step-footer">
                <button class="btn btn-secondary" (click)="switchTab('grammar')">← გრამატიკა</button>
                <button class="btn btn-primary" (click)="switchTab('exercises')">შემდეგი: პრაქტიკული სავარჯიშოები →</button>
              </div>
            </div>
          </div>
        }

        <!-- TAB 4 & 5: პრაქტიკა და ტესტი -->
        @if (activeTab() === 'exercises' || activeTab() === 'test') {
          <div class="tab-content fade-in">
            @if (!quizCompleted()) {
              @if (currentExercise(); as ex) {
                <div class="card exercise-card">
                  <div class="ex-top-bar">
                    <span class="badge badge-primary">
                      {{ activeTab() === 'test' ? '🏆 შემაჯამებელი ტესტი' : '✍️ პრაქტიკული სავარჯიშო' }}
                      • {{ currentIndex() + 1 }} / {{ activeExerciseList().length }}
                    </span>
                    <span class="ex-type-tag">{{ getExerciseTypeName(ex.type) }}</span>
                  </div>

                  <div class="progress-bar-container">
                    <div
                      class="progress-bar-fill"
                      [style.width.%]="((currentIndex() + 1) / activeExerciseList().length) * 100">
                    </div>
                  </div>

                  <div class="ex-prompt">
                    <p class="prompt-ge">{{ ex.promptGe }}</p>
                    <div class="question-box">
                      <h3>{{ ex.question }}</h3>
                      @if (ex.type === 'listening' && ex.audioText) {
                        <div class="listening-controls">
                          <button class="btn btn-primary" (click)="audio.speak(ex.audioText, 0.9)">
                            🔊 მოუსმინე ჩანაწერს
                          </button>
                          <button class="btn btn-secondary" (click)="audio.speak(ex.audioText, 0.6)">
                            🐢 მოუსმინე ნელა
                          </button>
                        </div>
                      }
                    </div>
                  </div>

                  @if (ex.type === 'multiple-choice' && ex.options) {
                    <div class="options-grid">
                      @for (opt of ex.options; track opt) {
                        <button
                          class="option-btn"
                          [class.selected]="userAnswer() === opt"
                          [disabled]="feedbackGiven()"
                          (click)="userAnswer.set(opt)">
                          {{ opt }}
                        </button>
                      }
                    </div>
                  }

                  @if (ex.type === 'word-order') {
                    <div class="word-order-area">
                      <div class="constructed-sentence">
                        @if (orderedWords().length === 0) {
                          <span class="placeholder">დააჭირე ქვემოთ მოცემულ სიტყვებს წინადადების ასაწყობად...</span>
                        }
                        @for (w of orderedWords(); track $index) {
                          <button class="word-chip active" [disabled]="feedbackGiven()" (click)="removeWordFromOrder($index)">
                            {{ w }} ✕
                          </button>
                        }
                      </div>

                      <div class="word-bank">
                        @for (w of availableWords(); track $index) {
                          <button class="word-chip" [disabled]="feedbackGiven()" (click)="addWordToOrder(w, $index)">
                            {{ w }}
                          </button>
                        }
                      </div>
                    </div>
                  }

                  @if (ex.type === 'matching' && ex.matchingPairs) {
                    <div class="matching-grid">
                      <div class="match-col">
                        <h4>ინგლისური</h4>
                        @for (item of matchingLeftItems(); track item) {
                          <button
                            class="match-btn"
                            [class.selected]="selectedLeft() === item"
                            [class.solved]="solvedPairs().includes(item)"
                            [disabled]="solvedPairs().includes(item) || feedbackGiven()"
                            (click)="selectLeftMatch(item)">
                            {{ item }}
                          </button>
                        }
                      </div>
                      <div class="match-col">
                        <h4>ქართული</h4>
                        @for (item of matchingRightItems(); track item) {
                          <button
                            class="match-btn"
                            [class.solved]="isRightSolved(item)"
                            [disabled]="isRightSolved(item) || feedbackGiven()"
                            (click)="selectRightMatch(item, ex)">
                            {{ item }}
                          </button>
                        }
                      </div>
                    </div>
                  }

                  @if (ex.type === 'fill-blank' || ex.type === 'translation-ge-en' || ex.type === 'listening' || ex.type === 'typing') {
                    <div class="input-area">
                      <input
                        type="text"
                        class="text-input"
                        placeholder="აკრიფე პასუხი ინგლისურად..."
                        [(ngModel)]="textInputAnswer"
                        [disabled]="feedbackGiven()"
                        (keyup.enter)="!feedbackGiven() && checkCurrentAnswer()" />
                    </div>
                  }

                  @if (feedbackGiven()) {
                    <div class="feedback-banner" [class.correct]="isCurrentCorrect()" [class.wrong]="!isCurrentCorrect()">
                      <div class="fb-title">
                        {{ isCurrentCorrect() ? '🎉 სწორია! ყოჩაღ! (+10 XP)' : '❌ არასწორია. სწორი პასუხია: ' + ex.correctAnswer }}
                      </div>
                      <p class="fb-exp">{{ ex.explanationGe }}</p>
                    </div>
                  }

                  <div class="ex-actions">
                    @if (!feedbackGiven()) {
                      <button class="btn btn-primary" (click)="checkCurrentAnswer()">
                        პასუხის შემოწმება
                      </button>
                    } @else {
                      <button class="btn btn-primary" (click)="nextExercise()">
                        {{ currentIndex() + 1 < activeExerciseList().length ? 'შემდეგი კითხვა →' : 'შედეგების ნახვა 🏆' }}
                      </button>
                    }
                  </div>
                </div>
              }
            } @else {
              <div class="card completion-card fade-in">
                <div class="trophy">🏆</div>
                <h2>{{ activeTab() === 'test' ? 'იუნიტი წარმატებით დასრულდა!' : 'პრაქტიკული ბლოკი დასრულებულია!' }}</h2>
                <p class="score-text">
                  შენ დააგროვე <strong>{{ correctAnswersCount() }}</strong> სწორი პასუხი
                  <strong>{{ activeExerciseList().length }}</strong>-დან
                  ({{ getSessionPercentage() }}%)!
                </p>

                <div class="completion-actions">
                  <button class="btn btn-secondary" (click)="restartExercises()">
                    🔄 თავიდან გავლა
                  </button>
                  @if (activeTab() === 'exercises') {
                    <button class="btn btn-primary" (click)="switchTab('test')">
                      🏆 გადადი შემაჯამებელ ტესტზე →
                    </button>
                  } @else {
                    <a routerLink="/curriculum" class="btn btn-success">
                      ✅ კურსის რუკაზე დაბრუნება (+50 XP)
                    </a>
                  }
                </div>
              </div>
            }
          </div>
        }
      </div>
    }
  `,
  styles: [`
    .lesson-container { display: flex; flex-direction: column; gap: 24px; }
    .lesson-header {
      display: flex; flex-direction: column; gap: 20px;
      .top-row-links {
        display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;
      }
      .back-btn { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; font-weight: 600; &:hover { color: var(--primary); } }
      .autosave-indicator { font-size: 0.8rem; color: var(--success); font-weight: 600; }
      .unit-title-wrap {
        display: flex; align-items: center; gap: 16px;
        .unit-emoji { font-size: 2.5rem; }
        h1 { font-size: 1.5rem; font-weight: 800; margin-top: 4px; }
      }
    }
    .lesson-tabs {
      display: flex; flex-wrap: wrap; gap: 8px; border-top: 1px solid var(--border-color); padding-top: 16px;
      .l-tab {
        padding: 10px 18px; border-radius: var(--radius-md); font-weight: 700; font-size: 0.9rem;
        background-color: var(--bg-subtle); color: var(--text-muted);
        &.active { background-color: var(--primary); color: #ffffff; }
      }
    }
    .section-intro {
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;
      h2 { font-size: 1.25rem; }
      p { color: var(--text-muted); font-size: 0.9rem; }
    }
    .vocab-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
    .vocab-card {
      display: flex; flex-direction: column; gap: 12px; padding: 20px;
      .vocab-top {
        display: flex; justify-content: space-between; align-items: center;
        .pos-tag { font-size: 0.75rem; padding: 2px 8px; background-color: var(--bg-subtle); border-radius: 6px; color: var(--text-muted); font-weight: 600; }
        .vocab-actions { display: flex; align-items: center; gap: 6px; }
        .save-btn { font-size: 1.3rem; color: var(--text-muted); &.saved { color: var(--warning); } }
      }
      .vocab-main {
        h3 { font-size: 1.4rem; font-weight: 800; color: var(--primary); }
        .transcription { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; }
        .ge-meaning { font-size: 1.1rem; font-weight: 700; margin-top: 4px; }
      }
      .vocab-example {
        background-color: var(--bg-subtle); padding: 10px 12px; border-radius: var(--radius-sm); font-size: 0.85rem;
        .ex-en { display: flex; justify-content: space-between; align-items: center; font-weight: 600; margin-bottom: 4px; }
        .ex-ge { color: var(--text-muted); }
      }
    }
    .grammar-card {
      display: flex; flex-direction: column; gap: 24px;
      .grammar-head { h2 { font-size: 1.5rem; margin: 8px 0; } .summary { font-size: 1rem; color: var(--text-muted); } }
      .comparison-box { background-color: var(--warning-light); border-left: 4px solid var(--warning); padding: 16px 20px; border-radius: var(--radius-sm); h4 { margin-bottom: 6px; } }
      .grammar-section {
        display: flex; flex-direction: column; gap: 12px;
        h3 { font-size: 1.2rem; color: var(--primary); }
        .examples-list { display: flex; flex-direction: column; gap: 10px; }
        .example-item {
          background-color: var(--bg-subtle); padding: 12px 16px; border-radius: var(--radius-md);
          .ex-main { display: flex; align-items: center; gap: 12px; }
          .ex-note { margin-top: 6px; font-size: 0.85rem; color: var(--primary); font-weight: 600; }
        }
      }
      .table-wrapper { overflow-x: auto; h3 { margin-bottom: 12px; } }
      .grammar-table {
        width: 100%; border-collapse: collapse;
        th, td { border: 1px solid var(--border-color); padding: 12px; text-align: left; font-size: 0.9rem; }
        th { background-color: var(--bg-subtle); font-weight: 700; }
      }
      .mistakes-box {
        background-color: var(--danger-light); padding: 20px; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 12px;
        .mistake-row { background-color: var(--bg-surface); padding: 12px; border-radius: var(--radius-sm); .wrong { color: var(--danger); font-weight: 700; } .right { color: var(--success); font-weight: 700; } .m-exp { font-size: 0.85rem; color: var(--text-muted); margin-top: 4px; } }
      }
    }
    .dialogue-card {
      display: flex; flex-direction: column; gap: 24px;
      .dialogue-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; }
      .dialogue-controls { display: flex; gap: 10px; flex-wrap: wrap; }
      .chat-list { display: flex; flex-direction: column; gap: 16px; }
      .chat-bubble {
        display: flex; gap: 14px; align-items: flex-start; max-width: 80%;
        &.alt { align-self: flex-end; flex-direction: row-reverse; .bubble-body { background-color: var(--primary-light); } }
        .speaker-avatar { font-size: 2.2rem; background: var(--bg-subtle); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .bubble-body {
          background-color: var(--bg-subtle); padding: 14px 18px; border-radius: var(--radius-md);
          .speaker-name { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px; }
          .en-line { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.05rem; }
          .ge-line { margin-top: 6px; font-size: 0.9rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 6px; }
        }
      }
    }
    .exercise-card {
      max-width: 760px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 20px;
      .ex-top-bar { display: flex; justify-content: space-between; align-items: center; .ex-type-tag { font-size: 0.8rem; font-weight: 700; color: var(--text-muted); } }
      .ex-prompt { .prompt-ge { color: var(--text-muted); font-weight: 600; margin-bottom: 8px; } .question-box { background-color: var(--bg-subtle); padding: 20px; border-radius: var(--radius-md); h3 { font-size: 1.3rem; } } .listening-controls { display: flex; gap: 12px; margin-top: 14px; } }
      .options-grid {
        display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;
        .option-btn { padding: 16px; border-radius: var(--radius-md); border: 2px solid var(--border-color); background-color: var(--bg-surface); font-size: 1.05rem; font-weight: 700; color: var(--text-main); text-align: left; &.selected { border-color: var(--primary); background-color: var(--primary-light); color: var(--primary); } }
      }
      .word-order-area {
        display: flex; flex-direction: column; gap: 16px;
        .constructed-sentence { min-height: 60px; padding: 14px; border: 2px dashed var(--border-color); border-radius: var(--radius-md); display: flex; flex-wrap: wrap; gap: 8px; align-items: center; .placeholder { color: var(--text-muted); font-size: 0.9rem; } }
        .word-bank { display: flex; flex-wrap: wrap; gap: 10px; }
        .word-chip { padding: 8px 16px; border-radius: var(--radius-sm); background-color: var(--bg-subtle); border: 1px solid var(--border-color); font-weight: 700; color: var(--text-main); &.active { background-color: var(--primary); color: #fff; } }
      }
      .matching-grid {
        display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        .match-col { display: flex; flex-direction: column; gap: 10px; h4 { font-size: 0.85rem; color: var(--text-muted); text-align: center; } }
        .match-btn { padding: 12px; border-radius: var(--radius-sm); border: 2px solid var(--border-color); background-color: var(--bg-surface); color: var(--text-main); font-weight: 600; &.selected { border-color: var(--primary); background-color: var(--primary-light); } &.solved { border-color: var(--success); background-color: var(--success-light); opacity: 0.6; } }
      }
      .text-input { width: 100%; padding: 14px 18px; font-size: 1.05rem; border-radius: var(--radius-md); border: 2px solid var(--border-color); background-color: var(--bg-surface); color: var(--text-main); }
      .feedback-banner { padding: 16px; border-radius: var(--radius-md); &.correct { background-color: var(--success-light); border-left: 4px solid var(--success); } &.wrong { background-color: var(--danger-light); border-left: 4px solid var(--danger); } .fb-title { font-weight: 800; margin-bottom: 4px; } }
      .ex-actions { display: flex; justify-content: flex-end; }
    }
    .step-footer { display: flex; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--border-color); }
    .completion-card { text-align: center; max-width: 540px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; padding: 40px 24px; .trophy { font-size: 4rem; } .completion-actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 12px; } }
  `]
})
export class LessonPlayerComponent implements OnInit {
  private route = inject(ActivatedRoute);
  public stateService = inject(LearningStateService);
  public audio = inject(AudioService);

  public unit = signal<CourseUnit | undefined>(undefined);
  public activeTab = signal<LessonTab>('vocabulary');
  public showTranslations = signal<boolean>(true);

  public currentIndex = signal<number>(0);
  public userAnswer = signal<string>('');
  public textInputAnswer: string = '';
  public orderedWords = signal<string[]>([]);
  public availableWords = signal<string[]>([]);

  public matchingLeftItems = signal<string[]>([]);
  public matchingRightItems = signal<string[]>([]);
  public selectedLeft = signal<string | null>(null);
  public solvedPairs = signal<string[]>([]);

  public feedbackGiven = signal<boolean>(false);
  public isCurrentCorrect = signal<boolean>(false);
  public correctAnswersCount = signal<number>(0);
  public quizCompleted = signal<boolean>(false);

  public activeExerciseList = computed<Exercise[]>(() => {
    const u = this.unit();
    if (!u) return [];
    return this.activeTab() === 'test' ? u.unitTest : u.exercises;
  });

  public currentExercise = computed<Exercise | undefined>(() => {
    return this.activeExerciseList()[this.currentIndex()];
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const unitId = params.get('unitId');
      if (unitId) {
        const found = this.stateService.getUnitById(unitId);
        this.unit.set(found);

        // აღვადგინოთ შენახული პოზიცია (თუ მომხმარებელი შუა გზაზე გაჩერდა)
        const savedDraft = this.stateService.getLessonDraft(unitId);
        if (savedDraft) {
          this.activeTab.set(savedDraft.activeTab);
          this.currentIndex.set(savedDraft.currentIndex);
          this.correctAnswersCount.set(savedDraft.correctAnswersCount);
          this.quizCompleted.set(false);
          this.setupCurrentExerciseState();
        } else {
          this.switchTab('vocabulary');
        }
      }
    });
  }

  private persistCurrentDraft(): void {
    const u = this.unit();
    if (!u) return;
    this.stateService.saveLessonDraft(u.id, {
      activeTab: this.activeTab(),
      currentIndex: this.currentIndex(),
      correctAnswersCount: this.correctAnswersCount()
    });
  }

  public switchTab(tab: LessonTab): void {
    this.activeTab.set(tab);
    this.currentIndex.set(0);
    this.correctAnswersCount.set(0);
    this.quizCompleted.set(false);
    if (tab === 'exercises' || tab === 'test') {
      this.setupCurrentExerciseState();
    }
    this.persistCurrentDraft();
  }

  public playFullDialogue(unit: CourseUnit): void {
    const fullText = unit.dialogue.lines.map(l => l.english).join('. ');
    this.audio.speak(fullText, 0.88);
  }

  public restartExercises(): void {
    this.currentIndex.set(0);
    this.correctAnswersCount.set(0);
    this.quizCompleted.set(false);
    this.setupCurrentExerciseState();
    this.persistCurrentDraft();
  }

  private setupCurrentExerciseState(): void {
    this.userAnswer.set('');
    this.textInputAnswer = '';
    this.feedbackGiven.set(false);
    this.isCurrentCorrect.set(false);

    const ex = this.currentExercise();
    if (!ex) return;

    if (ex.type === 'word-order' && ex.options) {
      this.orderedWords.set([]);
      this.availableWords.set([...ex.options]);
    }

    if (ex.type === 'matching' && ex.matchingPairs) {
      this.solvedPairs.set([]);
      this.selectedLeft.set(null);
      this.matchingLeftItems.set(ex.matchingPairs.map(p => p.left));
      const shuffledRight = [...ex.matchingPairs.map(p => p.right)].sort(() => Math.random() - 0.5);
      this.matchingRightItems.set(shuffledRight);
    }
  }

  public addWordToOrder(word: string, index: number): void {
    this.orderedWords.update(list => [...list, word]);
    this.availableWords.update(list => list.filter((_, i) => i !== index));
  }

  public removeWordFromOrder(index: number): void {
    const removed = this.orderedWords()[index];
    this.orderedWords.update(list => list.filter((_, i) => i !== index));
    this.availableWords.update(list => [...list, removed]);
  }

  public selectLeftMatch(leftItem: string): void {
    this.selectedLeft.set(leftItem);
  }

  public selectRightMatch(rightItem: string, ex: Exercise): void {
    const left = this.selectedLeft();
    if (!left || !ex.matchingPairs) return;

    const pair = ex.matchingPairs.find(p => p.left === left && p.right === rightItem);
    if (pair) {
      this.solvedPairs.update(s => [...s, left]);
      this.selectedLeft.set(null);
      if (this.solvedPairs().length === ex.matchingPairs.length) {
        this.userAnswer.set('matched');
        this.checkCurrentAnswer();
      }
    } else {
      this.selectedLeft.set(null);
    }
  }

  public isRightSolved(rightItem: string): boolean {
    const ex = this.currentExercise();
    if (!ex || !ex.matchingPairs) return false;
    const pair = ex.matchingPairs.find(p => p.right === rightItem);
    return pair ? this.solvedPairs().includes(pair.left) : false;
  }

  private normalize(str: string): string {
    return str
      .trim()
      .toLowerCase()
      .replace(/[.,!?]/g, '')
      .replace(/\s+/g, ' ');
  }

  public checkCurrentAnswer(): void {
    const ex = this.currentExercise();
    if (!ex) return;

    let finalUserAns = this.userAnswer();
    if (ex.type === 'word-order') {
      finalUserAns = this.orderedWords().join(' ');
    } else if (
      ex.type === 'fill-blank' ||
      ex.type === 'translation-ge-en' ||
      ex.type === 'listening' ||
      ex.type === 'typing'
    ) {
      finalUserAns = this.textInputAnswer;
    }

    const normUser = this.normalize(finalUserAns);
    const possibleAnswers = [ex.correctAnswer, ...(ex.acceptedAnswers || [])].map(a =>
      this.normalize(a)
    );

    const isCorrect = possibleAnswers.includes(normUser);
    this.isCurrentCorrect.set(isCorrect);
    this.feedbackGiven.set(true);

    if (isCorrect) {
      this.correctAnswersCount.update(c => c + 1);
    }

    this.stateService.recordExerciseAttempt(ex, finalUserAns || '(ცარიელი)', isCorrect);
    this.persistCurrentDraft();
  }

  public nextExercise(): void {
    const list = this.activeExerciseList();
    if (this.currentIndex() + 1 < list.length) {
      this.currentIndex.update(i => i + 1);
      this.setupCurrentExerciseState();
      this.persistCurrentDraft();
    } else {
      this.quizCompleted.set(true);
      const u = this.unit();
      if (u) {
        this.stateService.clearLessonDraft(u.id);
        if (this.activeTab() === 'test') {
          this.stateService.completeUnit(u.id, this.getSessionPercentage());
        }
      }
    }
  }

  public getSessionPercentage(): number {
    const total = this.activeExerciseList().length;
    if (total === 0) return 100;
    return Math.round((this.correctAnswersCount() / total) * 100);
  }

  public getExerciseTypeName(type: string): string {
    const map: Record<string, string> = {
      'multiple-choice': 'არჩევითი კითხვა',
      'fill-blank': 'გამოტოვებული სიტყვა',
      'word-order': 'წინადადების აწყობა',
      'matching': 'წყვილების დაკავშირება',
      'translation-ge-en': 'თარგმანი (ქართ ➔ ინგლ)',
      'listening': 'მოსმენა (Listening)',
      'typing': 'სიტყვის აკრეფა'
    };
    return map[type] || type;
  }
}