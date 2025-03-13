import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard,IonCardContent,IonCardHeader,
      IonCardTitle, IonButton,IonFab,IonFabButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule,IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonFab,IonFabButton],
})
export class HomePage {
  listas = [
    { id: 1, nombre: 'Supermercado', items: ['Leche', 'Pan', 'Huevos'] },
    { id: 2, nombre: 'Verduras', items: ['Zanahoria', 'Papa', 'Tomate'] }
  ];

  constructor(private router: Router) {}

  // Redirige a la página de edición/agregado
  goToLista(id?: number) {
    this.router.navigate(['/editar-lista', id ? id : 'nueva']);
  }

  agregarLista() {
    this.router.navigate(['/editar-lista/nueva']);
  }
  
  
}
