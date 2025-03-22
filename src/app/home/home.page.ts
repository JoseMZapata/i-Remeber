import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonModal, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFab, IonFabButton,IonSearchbar,IonMenu,IonButtons,IonMenuButton,IonItem,IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ListasService } from '../services/listas.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonModal,IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFab, IonFabButton, CommonModule,IonSearchbar,IonMenu,IonButtons,IonMenuButton,IonItem,IonButton,IonIcon]
})
export class HomePage implements OnInit {
  
  listas: { id: string, nombre: string, items: string[] }[] = [];

  constructor(private router: Router, private listasService: ListasService) {}
  

  ngOnInit() {
    this.cargarListas();
  }

  ionViewWillEnter() {
    this.cargarListas();
  }

  cargarListas() {
    this.listas = this.listasService.getListas();
  }

  goToLista(id: string) {
    this.router.navigate(['/editar-lista', id]);
  }

  agregarLista() {
    this.router.navigate(['/editar-lista', 'nueva']);
  }
}

