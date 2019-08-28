import { Component, OnInit } from '@angular/core';

export interface Credit {
  name: string;
  id: string;
  email: string;
  cardNumber: string;
  exp: string;
  cvv: string;
}


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})

export class CreditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
