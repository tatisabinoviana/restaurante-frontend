import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() buttonType: string;

  @Output() emitirDados = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // alert('Componente de botão Iniciado');
  }

  ngOnDestroy() {
    // alert('Componente de botão Destruido');
  }

  ngAfterViewInit() {
    // alert('Componente de botão Iniciado após carregar');
  }

  click() {
    this.emitirDados.emit('Valor Emitido');
  }

  obterClasseBotao(): string {
    switch(this.buttonType) {
      case 'primary':
        return 'btn btn-primary me-m-2';
      case 'secondary':
        return 'btn btn-secondary me-m-2';
      default:
        return 'btn btn-primary me-m-2';
    }
  }

  obterIconeBotao(): string {
    switch(this.buttonType) {
      case 'primary':
        return 'fas fa-check-square';
      case 'secondary':
        return 'far fa-caret-square-left';
      default:
        return 'fas fa-check-square';
    }
  }

}
