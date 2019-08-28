import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  title = 'dingo';
  total = 0;
  headers = ['פריט', 'מחיר', 'כמות', 'לתשלום'];
  tips = [10, 12, 15];
  products = [
    { name: 'קפה קר', items: 2, price: 12.10 },
    { name: 'ארוחת בוקר ישראלית', items: 1, price: 48.90 },
    { name: 'כריך טונה',  items: 3, price: 36.00 },
    { name: 'עוגת גבינה פירורים', items: 1, price: 24.90 },
    { name: 'קולה זירו',  items: 4, price: 13.00 },
  ];
  constructor(private router: Router) {
    this.total = this.products.map(product => product.price).reduce((a, b) => a + b, 0);
  }
  redirectToPayment() {
    this.router.navigate(['/payment']);
  }

  getTotalForItem(items, price) {
    return items * price;
  }

  setTip(tip) {
    const percentage = tip / 100;
    this.total = Number((this.total * (1 + percentage)).toFixed(2));
  }

  ngOnInit(): void {
  }

}
