import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
   titulo: string = "meu titulo"
   exibir: boolean = true

  textoa: String = "alerta1"
  constructor() { }

  ngOnInit(): void {
  }

}
