import { SituacaoPedidosComponent } from './core/pedidos/situacao-pedidos/situacao-pedidos.component';
import { IncluirPedidosComponent } from './core/pedidos/incluir-pedidos/incluir-pedidos.component';
import { DetalhesPedidosComponent } from './core/pedidos/detalhes-pedidos/detalhes-pedidos.component';
import { ConcluirPedidosComponent } from './core/pedidos/concluir-pedidos/concluir-pedidos.component';
import { CancelarPedidosComponent } from './core/pedidos/cancelar-pedidos/cancelar-pedidos.component';
import { AlterarPedidosComponent } from './core/pedidos/alterar-pedidos/alterar-pedidos.component';
import { VisualizarMesaComponent } from './core/mesas/visualizar-mesa/visualizar-mesa.component';
import { ButtonComponent } from './layout/button/button.component';
import { CardComponent } from './layout/card/card.component';
import { HttpErrorInterceptor } from './layout/shared/http-error.interceptor';
import { PaginaNaoEncontradaComponent } from './layout/pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HeaderComponent } from './layout/header/header.component';

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './layout/pages/pagina-inicial/pagina-inicial.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncluirMesaComponent } from './core/mesas/incluir-mesa/incluir-mesa.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    IncluirMesaComponent,
    VisualizarMesaComponent,
    AlterarPedidosComponent,
    CancelarPedidosComponent,
    ConcluirPedidosComponent,
    DetalhesPedidosComponent,
    IncluirPedidosComponent,
    SituacaoPedidosComponent,
    HeaderComponent,
    PaginaInicialComponent,
    PaginaNaoEncontradaComponent,
    CardComponent,
    ButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
