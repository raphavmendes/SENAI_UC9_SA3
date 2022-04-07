import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let dados=`
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.password}`;

    console.log(dados);
  }

}
