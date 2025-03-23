import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { EditarListaPage } from './editar-lista/editar-lista.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'editar-lista/:id', component: EditarListaPage }
];
