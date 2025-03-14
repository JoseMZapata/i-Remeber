import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { EditarListaPage } from './editar-lista/editar-lista.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'home', component: HomePage },
  { path: 'editar-lista/:id', component: EditarListaPage },
];

