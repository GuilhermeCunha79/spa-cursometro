import {Component, OnInit} from '@angular/core';
import {NotaVisualizacao} from "../domain/nota-visualizacao";
import {Observable} from "rxjs";

@Component({
  selector: 'app-calculo-nota',
  standalone: true,
  imports: [],
  templateUrl: './calculo-nota.component.html',
  styleUrl: './calculo-nota.component.css'
})
export class CalculoNotaComponent implements OnInit {

  notaVisualizacao: NotaVisualizacao;

  codigoDisciplina: string;

  constructor() {
  }

  ngOnInit(): void {
  }


  salvarNota(): boolean {
    this.codigoDisciplina = this.notaVisualizacao.codigoDisciplina;
    return true;
  }
}
