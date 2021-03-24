import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from 'src/app/layout/shared/model/pedido';
import { PedidoService } from '../../../layout/shared/services/pedido/pedido.service';
import { SweetAlert } from '../../../layout/shared/sweet-alert';


@Component({
  selector: 'app-incluir-pedidos',
  templateUrl: './incluir-pedidos.component.html',
  styleUrls: ['./incluir-pedidos.component.css']
})
export class IncluirPedidosComponent implements OnInit {

  public pedido: FormGroup;

  get item(): any { return this.pedido.get('item') }
  get valor(): any { return this.pedido.get('valor') }
  get situacao(): any { return this.pedido.get('situacao') }

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService
    ) {}

  ngOnInit(): void {
    this.configurarPedido();
    
    // let mesas = [
    // new Mesa('01', 'Mesa 01'),
    
    // ];
  }

  configurarPedido(){
    this.pedido = this.formBuilder.group({
      item: [null, Validators.required],
      valor: [null, Validators.required]
      // situacao: [null, Validators.required]

    })
  }

  submit(){
    if (this.pedido.valid) {
      const pedido: Pedido = new Pedido();

      pedido.item = this.item.value;
      pedido.valor = this.valor.value;
      pedido.situacao = 'Novo';

      this.pedidoService.incluir(pedido).subscribe((retorno: Pedido) => {
        SweetAlert.exibirSucesso('Pedido' + retorno.item + ' adicionado com sucesso!')
      })
    } else {
      SweetAlert.exibirErro('Desculpe, pedido não adicionado.')
    }
  }

}
