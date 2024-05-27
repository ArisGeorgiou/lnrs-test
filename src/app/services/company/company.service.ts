import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICompany, IOfficers} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public constructor(private readonly httpClient: HttpClient) { }

  public getCompanies$(searchTerm: string): Observable<ICompany> {
    return this.httpClient.get<ICompany>(
      '/TruProxyAPI/rest/Companies/v1/Search',
      {
        headers: new HttpHeaders({
          'X-Api-Key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
        }),
        params: {
          Query: searchTerm
        }
      }
    );
  }

  public getOfficers$(companyNumber: string): Observable<IOfficers> {
    return this.httpClient.get<IOfficers>(
      '/TruProxyAPI/rest/Companies/v1/Officers',
      {
        headers: new HttpHeaders({
          'X-Api-Key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
        }),
        params: {
          CompanyNumber: companyNumber
        }
      }
    );
  }
}
