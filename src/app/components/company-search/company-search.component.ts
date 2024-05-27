import {Component, HostListener, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-search',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatButton
  ],
  templateUrl: './company-search.component.html',
  styleUrl: './company-search.component.scss'
})
export class CompanySearchComponent implements OnInit {
  @HostListener('document:keyup', ['$event'])
  public searchOnEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();

      document.getElementById("searchBtn")?.click();
    }
  }

  public companySearchFormGroup!: FormGroup

  public constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.setUpCompanySearchForm();
  }

  public onSearchClick(): void {
    const searchTerm: string = this.companySearchFormGroup.get('companySearchTerm')?.value;

    this.router.navigate(['/results', searchTerm]);
  }

  private setUpCompanySearchForm(): void {
    this.companySearchFormGroup = this.formBuilder.group({
      companySearchTerm: ['', [Validators.required]],
    });
  }
}
