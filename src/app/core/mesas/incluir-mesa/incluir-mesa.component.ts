import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Mesa } from './../../../layout/shared/model/mesa';
import { MesasService } from 'src/app/layout/shared/services/mesa/mesas.service';
import { SweetAlert } from './../../../layout/shared/sweet-alert';

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
    private mesasService: MesasService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.configurarMesa();
  }

  configurarMesa(){
    this.mesa = this.formBuilder.group({
      nomeMesa: [null, Validators.required]

    })
  }

  submit(){
    if (this.mesa.valid) {
      const mesa: Mesa = new Mesa();

      mesa.nomeMesa = this.nomeMesa.value;

      this.mesasService.incluir(mesa).subscribe((retorno: Mesa) => {
        SweetAlert.exibirSucesso('Mesa' + retorno.nomeMesa + ' adicionada com sucesso!').then(() => {
          this.router.navigate(['mesas/visualizar-mesa']);
        })
      })
    } else {
      SweetAlert.exibirErro('Desculpe, mesa não adicionada.')
    }
  }
}
