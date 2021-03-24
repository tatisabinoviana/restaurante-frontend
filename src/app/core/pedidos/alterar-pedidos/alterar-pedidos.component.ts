import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from './../../../layout/shared/model/pedido';
import { PedidoService } from './../../../layout/shared/services/pedido/pedido.service';
import { SweetAlert } from './../../../layout/shared/sweet-alert';

@Component({
  selector: 'app-alterar-pedidos',
  templateUrl: './alterar-pedidos.component.html',
  styleUrls: ['./alterar-pedidos.component.css']
})
export class AlterarPedidosComponent implements OnInit {
  public lista: FormGroup;

  get id(): any { return this.lista.get('id') }
  get item(): any { return this.lista.get('item') }
  get valor(): any { return this.lista.get('valor') }
  get situacao(): any { return this.lista.get('situacao') }

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pedidoService.buscarPorId(id).subscribe((pedido: any) => {
      this.lista = this.formBuilder.group({
        id: [pedido.id, Validators.required],
        item: [pedido.item, Validators.required],
        valor: [pedido.valor, Validators.required],
        situacao: [pedido.situacao, Validators.required]
      })
    })
  }

  submit() {
    if (this.lista.valid) {
      const pedido: Pedido = new Pedido();

      pedido.item = this.item.value;
      pedido.valor = this.valor.value;
      pedido.situacao = this.situacao.value;

      this.pedidoService.alterar(this.id.value, pedido).subscribe((retorno: Pedido) => {
        SweetAlert.exibirSucesso('Pedido ' + retorno.item + ' alterado com sucesso!').then(() => {
          this.router.navigate(['pedidos/detalhes-pedidos']);
        })
      })
    } else {
      SweetAlert.exibirErro('Pedido Inválido')
    }
  }

}
