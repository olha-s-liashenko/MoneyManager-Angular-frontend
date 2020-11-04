import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../income.service';
import { Income } from '../income';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { IncomeDialogComponent } from '../income-dialog/income-dialog.component';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.less']
})

export class IncomesComponent implements OnInit {

  incomes: Income[];
  
  constructor(
    private incomeService: IncomeService, 
    private dialog: MatDialog
    ) { 
  }

  ngOnInit(): void {
    this.getIncomes();
  }

  getIncomes(): void {
    this.incomeService.getAllIncomes().subscribe(incomes => this.incomes = incomes);
  }

  createNewIncome(incomeData: Income): void {
    this.incomeService.createIncome(incomeData as Income).subscribe(
      income => {
        const updatedIncomes = this.incomes;
        updatedIncomes.push(income);
        updatedIncomes.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        this.incomes = updatedIncomes;
      }
    );
  }

  deleteIncome(id: number, i: number) {
    this.incomeService.deleteIncome(id).subscribe();
    this.incomes.splice(i, 1);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialog = this.dialog.open(IncomeDialogComponent, {
      autoFocus: true,
      data: {amount: null, source: null, date: null}
    });

    dialog.afterClosed().subscribe(income => {
      console.log("result:");
      console.log(income);
      if (income && income.amount > 0.0 && income.source && income.date) {
        this.createNewIncome(income);
      }
    });
  }

}
