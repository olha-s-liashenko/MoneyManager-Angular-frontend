import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Income } from '../income';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-income-dialog',
  templateUrl: './income-dialog.component.html',
  styleUrls: ['./income-dialog.component.less']
})
export class IncomeDialogComponent implements OnInit {

  // newIncomeForm;

  constructor(
    private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<IncomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public income: Income
  ) {
    // this.newIncomeForm = this.formBuilder.group({
    //   amount: '',
    //   source: '',
    //   date: new Date()
    // });
   }

  ngOnInit(): void {
  }

}
