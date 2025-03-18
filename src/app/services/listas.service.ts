import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasService {
  private listas: { id: string, nombre: string, items: string[] }[] = [];

  constructor() {}

  getListas() {
    return this.listas;
  }

  getLista(id: string) {
    return this.listas.find(lista => lista.id === id);
  }

  guardarLista(id: string, nombre: string, items: string) {
    const index = this.listas.findIndex(lista => lista.id === id);

    if (index !== -1) {
      // Si la lista existe, la actualiza
      this.listas[index] = { id, nombre, items: items.split(',').map(item => item.trim()) };
    } else {
      // Si no existe, la crea
      this.listas.push({ id, nombre, items: items.split(',').map(item => item.trim()) });
    }
  }
}
