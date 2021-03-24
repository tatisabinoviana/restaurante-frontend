import { Mesa } from './../../model/mesa';
import { environment } from './../../../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private httpClient: HttpClient) {}

  incluir(mesa: Mesa) {
    return this.httpClient.post(environment.urlBackEnd, mesa);
  }

  visualizar() {
    return this.httpClient.get(`${environment.urlBackEnd}`);
  }

  fechar(id: any, mesa: Mesa) {
    return this.httpClient.put(`${environment.urlBackEnd}/${id}`, mesa)
  }
}
