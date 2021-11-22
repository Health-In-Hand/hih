import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  form!:FormGroup;
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm () {
    this.form = this.fb.group({
      cpf:['']
    })
  }

}
