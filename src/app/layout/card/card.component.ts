import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titulo: string;

  @Input() showFooter: boolean;

  constructor() {}

  ngOnInit(): void {
  }

  esconderFooter(event) {
    console.log(event);
  }

}
