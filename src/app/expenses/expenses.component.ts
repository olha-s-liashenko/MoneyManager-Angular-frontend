import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ExpenseDialogComponent } from '../expense-dialog/expense-dialog.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.less']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];
  
  constructor(
    private expenseService: ExpenseService, 
    private dialog: MatDialog
    ) { 
  }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getAllExpenses().subscribe(expenses => this.expenses = expenses);
  }

  createNewExpense(expenseData: Expense): void {
    this.expenseService.createExpense(expenseData as Expense).subscribe(
      expense => {
        const updatedExpenses = this.expenses;
        updatedExpenses.push(expense);
        updatedExpenses.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        this.expenses = updatedExpenses;
      }
    );
  }

  deleteExpense(id: number, i: number) {
    this.expenseService.deleteExpense(id).subscribe();
    this.expenses.splice(i, 1);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialog = this.dialog.open(ExpenseDialogComponent, {
      autoFocus: true,
      data: {amount: null, source: null, date: null}
    });

    dialog.afterClosed().subscribe(expense => {
      console.log("result:");
      console.log(expense);
      if (expense && expense.amount > 0.0 && expense.description && expense.date) {
        this.createNewExpense(expense);
      }
    });
  }

}
