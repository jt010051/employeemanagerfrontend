import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private apiSerceUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getEmployees(): Observable<Employee[]>{

    return this.http.get<Employee[]>(`${this.apiSerceUrl}/employee/all`);
  }
  public addEmployee(employee: Employee): Observable<Employee>{

    return this.http.post<Employee>(`${this.apiSerceUrl}/employee/add`, employee);
  }
  public updateEmployee(employee: Employee): Observable<Employee>{

    return this.http.put<Employee>(`${this.apiSerceUrl}/employee/update`, employee);
  }
  public deleteEmployee(employeeId: number): Observable<void>{

    return this.http.delete<void>(`${this.apiSerceUrl}/employee/delete/${employeeId}`);
  }
}
