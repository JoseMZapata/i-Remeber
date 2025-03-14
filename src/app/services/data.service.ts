import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async getListas(): Promise<any[]> {
    return (await this._storage?.get('listas')) || [];
  }

  async saveLista(lista: any) {
    const listas = await this.getListas();
    listas.push(lista);
    await this._storage?.set('listas', listas);
  }

  async deleteLista(id: number) {
    let listas = await this.getListas();
    listas = listas.filter(l => l.id !== id);
    await this._storage?.set('listas', listas);
  }
}
