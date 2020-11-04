import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Expense } from '../expense';
import { ExpensesComponent } from '../expenses/expenses.component';

@Component({
  selector: 'app-expense-dialog',
  templateUrl: './expense-dialog.component.html',
  styleUrls: ['./expense-dialog.component.less']
})

export class ExpenseDialogComponent implements OnInit {

    constructor(
      public dialogRef: MatDialogRef<ExpensesComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Expense
    ) { }
  
    ngOnInit(): void {
    }
}
