import { SweetAlert } from './../../../layout/shared/sweet-alert';
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
  // cancelarPedido(id, pedido: Pedido) {
  //   this.router.navigate([`pedidos/cancelar-pedidos/${id}`, pedido])

  // }
  cancelarPedido(id, pedido: Pedido) {
    const pedidoCancelado: Pedido = new Pedido();

      pedidoCancelado.item = pedido.item;
      pedidoCancelado.valor = pedido.valor;
      pedidoCancelado.situacao = "Cancelado";

      this.pedidoService.alterar(id, pedidoCancelado).subscribe((retorno: Pedido) => {
        SweetAlert.exibirSucesso('Pedido ' + retorno.item + ' cancelado com sucesso!').then(() => {
          this.router.navigate(['pedidos/detalhes-pedidos']);
        })
      })
  }
  concluirPedido(id, pedido: Pedido) {
    const pedidoConcluido: Pedido = new Pedido();

      pedidoConcluido.item = pedido.item;
      pedidoConcluido.valor = pedido.valor;
      pedidoConcluido.situacao = "Concluído";

      this.pedidoService.alterar(id, pedidoConcluido).subscribe((retorno: Pedido) => {
        SweetAlert.exibirSucesso('Pedido ' + retorno.item + ' concluído com sucesso!').then(() => {
          this.router.navigate(['pedidos/detalhes-pedidos/']);
        })
      })
  }
}