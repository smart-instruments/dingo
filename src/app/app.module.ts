import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {RouterModule, Routes} from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditComponent } from './credit/credit.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'bill',
    component: BillComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'credit',
    component: CreditComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BillComponent,
    PaymentComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
