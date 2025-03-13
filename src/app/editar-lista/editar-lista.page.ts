import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonButton,IonLabel} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.page.html',
  styleUrls: ['./editar-lista.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem,IonButton,IonLabel]
})
export class EditarListaPage implements OnInit {

  listaId: string | null = null;
  nombreLista = '';
  items: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.listaId = this.route.snapshot.paramMap.get('id');
    
    if (this.listaId !== 'nueva') {
      // Aquí podrías cargar los datos de la lista a editar desde un servicio
      this.nombreLista = 'Ejemplo de Lista'; // Reemplazar por datos reales
      this.items = 'Leche, Pan, Huevos'; // Reemplazar por datos reales
    }
  }

  guardarLista() {
    console.log('Lista guardada:', { nombre: this.nombreLista, items: this.items.split(', ') });
    this.router.navigate(['/home']); // Regresa a la vista principal
  }

}
