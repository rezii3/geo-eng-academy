import { Routes } from '@angular/router';

// პირდაპირი იმპორტი (გამორიცხავს dynamic import-ის შეცდომებს)
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { LessonPlayerComponent } from './components/lesson-player/lesson-player.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { MistakesComponent } from './components/mistakes/mistakes.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { StudyPlanComponent } from './components/study-plan/study-plan.component';
import { PlacementTestComponent } from './components/placement-test/placement-test.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'curriculum',
    component: CurriculumComponent
  },
  {
    path: 'lesson/:unitId',
    component: LessonPlayerComponent
  },
  {
    path: 'flashcards',
    component: FlashcardsComponent
  },
  {
    path: 'mistakes',
    component: MistakesComponent
  },
  {
    path: 'dictionary',
    component: DictionaryComponent
  },
  {
    path: 'study-plan',
    component: StudyPlanComponent
  },
  {
    path: 'placement-test',
    component: PlacementTestComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];