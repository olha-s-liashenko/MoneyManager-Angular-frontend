import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  URL = 'http://localhost:8080/expenses';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.URL, expense, this.httpOptions)
      .pipe(
        catchError(this.handleError<Expense>('createExpense'))
      );
  }

  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.URL)
      .pipe(
        catchError(this.handleError<Expense[]>('getAllExpenses', []))
      );
  }

  deleteExpense(id: number): Observable<{}> {
    const url = `${this.URL}/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError('deleteExpense'))
      );
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}