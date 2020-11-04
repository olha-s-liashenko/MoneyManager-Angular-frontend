import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomesComponent } from './incomes/incomes.component';
import { HttpClientModule } from '@angular/common/http'
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  {path: 'incomes', component: IncomesComponent},
  {path: 'expenses', component: ExpensesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
