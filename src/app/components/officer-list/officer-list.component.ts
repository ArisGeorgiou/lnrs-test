import {Component, OnInit} from '@angular/core';
import {map, take} from "rxjs";
import { IOfficers} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../../services/company/company.service";

@Component({
  selector: 'app-officer-list',
  standalone: true,
  imports: [],
  templateUrl: './officer-list.component.html',
  styleUrl: './officer-list.component.scss'
})
export class OfficerListComponent implements OnInit {
  public officersDetails!: IOfficers;

  public constructor(private readonly activateRoute: ActivatedRoute, private readonly companyService: CompanyService) {
  }

  public ngOnInit(): void {
    const companyNumber: string = this.activateRoute.snapshot.paramMap.get('companyNumber') ?? '';

    this.companyService.getOfficers$(companyNumber).pipe(
      take(1),
      map((response: IOfficers) => {
        this.officersDetails = response;
      })).subscribe();
  }
}
