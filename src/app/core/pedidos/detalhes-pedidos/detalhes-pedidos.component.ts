import { Router } from '@angular/router';
import { PedidoService } from './../../../layout/shared/services/pedido/pedido.service';
import { Pedido } from './../../../layout/shared/model/pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-pedidos',
  templateUrl: './detalhes-pedidos.component.html',
  styleUrls: ['./detalhes-pedidos.component.css']
})
export class DetalhesPedidosComponent implements OnInit {

  public listaDePedidos: Array<Pedido> = new Array<Pedido>();

  constructor(
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pedidoService.detalhes().subscribe((pedidos: Array<Pedido>) => {
      this.listaDePedidos = pedidos;
    })
  }
  alterarPedido(id, pedido: Pedido) {
    this.router.navigate([`pedidos/alterar-pedidos/${id}`, pedido])
  }
  cancelarPedido(id, pedido: Pedido) {
    this.router.navigate([`pedidos/cancelar-pedidos/${id}`, pedido])
  }
  concluirPedido(id, pedido: Pedido) {
    this.router.navigate([`pedidos/concluir-pedidos/${id}`, pedido])
  }
}