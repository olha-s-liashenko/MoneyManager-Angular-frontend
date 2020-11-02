import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Income } from './income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  URL = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  createIncome(income: Income): Observable<Income> {
    return this.http.post<Income>(this.URL + "/incomes", income, this.httpOptions)
      .pipe(
        catchError(this.handleError<Income>('createIncome'))
      );
  }

  getAllIncomes(): Observable<Income[]> {
    console.log("Service.getAllIncomes");
    return this.http.get<Income[]>(this.URL + '/incomes')
      .pipe(
        catchError(this.handleError<Income[]>('getAllIncomes', []))
      );
  }

  getIncomeDetails(id) {
    // TODO: return income by id
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
