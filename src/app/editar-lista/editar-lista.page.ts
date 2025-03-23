import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSelectOption,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonDatetimeButton, IonDatetime, IonModal, IonList, IonImg, IonAvatar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ListasService } from '../services/listas.service'; // Asegúrate de importar bien el servicio

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.page.html',
  styleUrls: ['./editar-lista.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonModal, IonImg, IonSelectOption,IonButtons,IonList, IonModal, IonDatetime, IonDatetimeButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonButton, IonLabel]
})
export class EditarListaPage implements OnInit {
  
  listaId: string | null = null;
  nombreLista = '';
  items: string = '';

  nombreProducto: string = '';
  categoriaProducto: string = '';
  precioProducto: number = 0;

  cerrarModal() {
  }

  guardarProducto() {
    console.log('Producto guardado:', {
      nombre: this.nombreProducto,
      categoria: this.categoriaProducto,
      precio: this.precioProducto,
    });

    // Lógica para guardar en la base de datos o lista
  }
    // Aquí puedes añadir lógica para guardar el producto en una base de datos o lista
  

  constructor(private route: ActivatedRoute, private router: Router, private listasService: ListasService) {}

  ngOnInit() {
    this.listaId = this.route.snapshot.paramMap.get('id');
    
    if (this.listaId && this.listaId !== 'nueva') {
      const lista = this.listasService.getLista(this.listaId);
      if (lista) {
        this.nombreLista = lista.nombre;
        this.items = lista.items.join(', ');
      }
    }
  }

  guardarLista() {
    if (!this.nombreLista.trim()) return;

    const id: string = this.listaId === 'nueva' || !this.listaId ? Date.now().toString() : this.listaId;
    this.listasService.guardarLista(id, this.nombreLista, this.items);

    this.router.navigate(['/home'], { replaceUrl: true });
  }

}
