import {Component, OnInit} from '@angular/core';
import {map, take} from "rxjs";
import {CompanyService} from "../../services/company/company.service";
import {ActivatedRoute} from "@angular/router";
import {ICompany} from "../../models";
import {CompanyCardComponent} from "../company-card/company-card.component";

@Component({
  selector: 'app-company-search-results',
  standalone: true,
  imports: [CompanyCardComponent],
  templateUrl: './company-search-results.component.html',
  styleUrl: './company-search-results.component.scss'
})
export class CompanySearchResultsComponent implements OnInit {
  public companies!: ICompany;

  public constructor(private readonly companyService: CompanyService, private readonly activateRoute: ActivatedRoute) {
  }

  public ngOnInit(): void  {
    const searchTerm: string = this.activateRoute.snapshot.paramMap.get('searchTerm') ?? '';

    this.companyService.getCompanies$(searchTerm).pipe(
      take(1),
      map((response: ICompany) => {
        this.companies = response;
      })).subscribe();
  }

}
