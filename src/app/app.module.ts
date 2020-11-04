import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomesComponent } from './incomes/incomes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDialogModule} from '@angular/material/dialog';
import { IncomeDialogComponent } from './income-dialog/income-dialog.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatListModule} from '@angular/material/list';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseDialogComponent } from './expense-dialog/expense-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomesComponent,
    IncomeDialogComponent,
    ToolbarComponent,
    ExpensesComponent,
    ExpenseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [
    // {
    // provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    // useValue: { appearance: 'outline', float: 'always' }
    // }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ IncomeDialogComponent, ]
})
export class AppModule { }
