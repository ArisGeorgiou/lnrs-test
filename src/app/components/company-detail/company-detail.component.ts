import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {ICompanyItem} from "../../models";
import {FormatAddressPipe} from "../../pipes/format-address/format-address.pipe";
import {DatePipe, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [
    TitleCasePipe,
    DatePipe,
    RouterOutlet
  ],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent {
  public companyDetails: ICompanyItem;
  public showDetails: boolean = true;

  public constructor(private readonly router: Router) {
    this.companyDetails = this.router.getCurrentNavigation()?.extras.state?.['companyDetails'];
  }

  public onOfficersLinkClick(): void {
    this.router.navigate([`/details/officers`, this.companyDetails.company_number]);
  }

  public routerOutletHandler(): void {
    this.showDetails = !this.showDetails;
  }
}
