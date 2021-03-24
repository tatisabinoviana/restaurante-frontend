import { Router } from '@angular/router';
import { MesasService } from './../../../layout/shared/services/mesa/mesas.service';
import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/layout/shared/model/mesa';

@Component({
  selector: 'app-visualizar-mesa',
  templateUrl: './visualizar-mesa.component.html',
  styleUrls: ['./visualizar-mesa.component.css']
})
export class VisualizarMesaComponent implements OnInit {

  public listaDeMesas: Array<Mesa> = new Array<Mesa>();

  constructor(
    private mesasService: MesasService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.mesasService.visualizar().subscribe((mesas: Array<Mesa>) => {
      this.listaDeMesas = mesas;
    })
  }
  detalhesPedidos(id) {
    this.router.navigate([`pedidos/detalhes-pedidos/${id}`])
  }
  // fecharMesa(id, mesa: Mesa) {
  //   this.router.navigate
  // }

  incluirMesa(id) {
    this.router.navigate([`mesas/incluir-mesa/${id}`])
  }

}
