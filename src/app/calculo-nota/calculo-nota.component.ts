import {Component, OnInit} from '@angular/core';
import {NotaVisualizacao} from "../domain/nota-visualizacao";

@Component({
  selector: 'app-calculo-nota',
  standalone: true,
  imports: [],
  templateUrl: './calculo-nota.component.html',
  styleUrl: './calculo-nota.component.css'
})
export class CalculoNotaComponent implements OnInit {

  notaVisualizacao:NotaVisualizacao;

  constructor() {
  }
  ngOnInit(): void {
  }
}
