import { environment2 } from './../../../../../environments/environment';
import { Pedido } from './../../model/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) {}
  
  incluir(pedido: Pedido) {
    return this.httpClient.post(environment2.urlBackEnd, pedido);
  }

  alterar(id: any, pedido: Pedido) {
    return this.httpClient.put(`${environment2.urlBackEnd}/${id}`, pedido)
  }
  detalhes() {
    return this.httpClient.get(`${environment2.urlBackEnd}`)
  }
  
  cancelar(id: any, pedido: Pedido) {
    return this.httpClient.put(`${environment2.urlBackEnd}/${id}`, pedido)
  }

  concluir(id: any, pedido: Pedido) {
    return this.httpClient.put(`${environment2.urlBackEnd}/${id}`, pedido)
  }
  
  buscarPorId(id: any) {
    return this.httpClient.get(`${environment2.urlBackEnd}/${id}`)
  }
}
