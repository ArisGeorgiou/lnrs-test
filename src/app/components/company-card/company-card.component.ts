import {Component, Input} from '@angular/core';
import {ICompanyItem} from "../../models";
import {BoldCompanyAddressPipe} from "../../pipes/boldCompanyNumber/bold-company-address.pipe";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-company-card[companyDetails]',
  standalone: true,
  imports: [ BoldCompanyAddressPipe, RouterLink],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {
  @Input() public companyDetails!: ICompanyItem;

  public constructor(private readonly router: Router) {
  }

  public onCompanyTitleClick(companyDetails: ICompanyItem): void {
    this.router.navigate([`/details`], {state: {companyDetails}});
  }
}
