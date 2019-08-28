import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
  details: Credit = {
    name: '',
    id: '',
    email: '',
    cardNumber: '',
    exp: '',
    cvv: '',
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToThanksPage() {
    this.router.navigate(['/thanks']);
  }

}
