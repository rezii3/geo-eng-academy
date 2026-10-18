import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LearningStateService } from './services/learning-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  public stateService = inject(LearningStateService);

  public getMascotMessage(): string {
    const xp = this.stateService.xp();
    if (xp === 0) {
      return 'გამარჯობა! მზად ხარ ინგლისურის სასწავლად? დაიწყე Unit 1-ით!';
    } else if (xp < 200) {
      return 'შესანიშნავი დასაწყისია! ყოველდღე 15 წუთი და შედეგი გაგაოცებს.';
    } else if (this.stateService.dueFlashcardsCount() > 0) {
      return 'გასამეორებელი ბარათები გელოდება! გადახედე.';
    } else {
      return 'კარგი ტემპია! განაგრძე ასე!';
    }
  }
}