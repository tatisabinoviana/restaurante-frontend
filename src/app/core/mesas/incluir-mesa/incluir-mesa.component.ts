import { SweetAlert } from './../../../layout/shared/sweet-alert';
import { Mesa } from './../../../layout/shared/model/mesa';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MesasService } from 'src/app/layout/shared/services/mesa/mesas.service';

@Component({
  selector: 'app-incluir-mesa',
  templateUrl: './incluir-mesa.component.html',
  styleUrls: ['./incluir-mesa.component.css']
})
export class IncluirMesaComponent implements OnInit {

  public mesa: FormGroup;

  get nomeMesa(): any { return this.mesa.get('nomeMesa') }

  constructor(
    private formBuilder: FormBuilder,
    private mesasService: MesasService
    ) {}

  ngOnInit(): void {
    this.configurarPedido();
  }

  configurarPedido(){
    this.mesa = this.formBuilder.group({
      nomeMesa: [null, Validators.required]

    })
  }

  submit(){
    if (this.mesa.valid) {
      const mesa: Mesa = new Mesa();

      mesa.nomeMesa = this.nomeMesa.value;

      this.mesasService.incluir(mesa).subscribe((retorno: Mesa) => {
        SweetAlert.exibirSucesso('Mesa' + retorno.nomeMesa + ' adicionada com sucesso!')
      })
    } else {
      SweetAlert.exibirErro('Desculpe, mesa não adicionada.')
    }
  }
}
