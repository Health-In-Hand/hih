import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-vacinas',
  templateUrl: './cadastro-vacinas.component.html',
  styleUrls: ['./cadastro-vacinas.component.css']
})
export class CadastroVacinasComponent implements OnInit {

  form!: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      data:[Date],
      numero:[''],
      nomeVacina:[''],
      indicacao:['']
    })
  }
  indicacao(){
    console.log("Deu certo!!!")
  }
}
