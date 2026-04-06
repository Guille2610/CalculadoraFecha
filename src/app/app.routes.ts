import { Routes } from '@angular/router';
import { PersonComponent } from './people/person.component';
import { PersonDetailComponent } from './people/person-detail.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

export const routes: Routes = [
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'items', component: PersonComponent },
  { path: 'item/:id', component: PersonDetailComponent },
];
