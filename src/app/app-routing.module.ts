import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomesComponent } from './incomes/incomes.component';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [{
  path: 'incomes', component: IncomesComponent,
  // path: 'incomes/:id', component: IncomeDetails,
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
