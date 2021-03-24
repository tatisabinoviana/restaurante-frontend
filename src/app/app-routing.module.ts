import { PaginaNaoEncontradaComponent } from './layout/pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { SituacaoPedidosComponent } from './core/pedidos/situacao-pedidos/situacao-pedidos.component';
import { IncluirPedidosComponent } from './core/pedidos/incluir-pedidos/incluir-pedidos.component';
import { DetalhesPedidosComponent } from './core/pedidos/detalhes-pedidos/detalhes-pedidos.component';
import { AlterarPedidosComponent } from './core/pedidos/alterar-pedidos/alterar-pedidos.component';
import { VisualizarMesaComponent } from './core/mesas/visualizar-mesa/visualizar-mesa.component';
import { IncluirMesaComponent } from './core/mesas/incluir-mesa/incluir-mesa.component';
import { ConcluirPedidosComponent } from './core/pedidos/concluir-pedidos/concluir-pedidos.component';
import { CancelarPedidosComponent } from './core/pedidos/cancelar-pedidos/cancelar-pedidos.component';
import { PaginaInicialComponent } from './layout/pages/pagina-inicial/pagina-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent
  },{
    path: 'mesas/incluir-mesa',
    component: IncluirMesaComponent
  },{
    path: 'mesas/visualizar-mesa',
    component: VisualizarMesaComponent
  },{
    path: 'pedidos/alterar-pedidos/:id',
    component: AlterarPedidosComponent
  },{
    path: 'pedidos/cancelar-pedidos',
    component: CancelarPedidosComponent
  },{
    path: 'pedidos/concluir-pedidos',
    component: ConcluirPedidosComponent
  },{
    path: 'pedidos/detalhes-pedidos/:id',
    component: DetalhesPedidosComponent
  },{
    path: 'pedidos/incluir-pedidos',
    component: IncluirPedidosComponent
  },{
    path: 'pedidos/situacao-pedidos',
    component: SituacaoPedidosComponent
  },{
    path: '*',
    component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
