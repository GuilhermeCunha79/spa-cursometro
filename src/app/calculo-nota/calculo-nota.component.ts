import {ChangeDetectorRef, Component, NgModule, OnInit} from '@angular/core';
import {NotaVisualizacao} from "../domain/nota-visualizacao";
import {CalculoNotaService} from "../services/calculo-nota/calculo-nota-service";
import {NotaParams} from "../interfaces/notaParams";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Disciplina} from "../interfaces/disciplina";
import {NgForOf, NgIf} from "@angular/common";
import {FilterByValuePipe} from "../pipes/valuePipe";

@Component({
  imports: [FormsModule, NgForOf, FilterByValuePipe, ReactiveFormsModule, NgIf],
  standalone: true,
  selector: 'app-calculo-nota',
  templateUrl: './calculo-nota.component.html',
  styleUrl: './calculo-nota.component.css',
  host: {ngSkipHydration: 'true'}
})
export class CalculoNotaComponent implements OnInit {

  disciplina: Disciplina;


  notaVisualizacao: NotaVisualizacao;

  notaPortuguesDecimo: number = 10;
  notaPortuguesDecimoPrim: number = 10;
  notaPortuguesDecimoSeg: number = 10;

  notaEduFisicaDecimo: number = 10;
  notaEduFisicaDecimoPrim: number = 10;
  notaEduFisicaDecimoSeg: number = 10;
  notaFilosofiaDecimo: number = 10;
  notaFilosofiaDecimoPrim: number = 10;

  idLingua: string;
  notaLinguaDecimo: number = 10;
  notaLinguaDecimoPrim: number = 10;

  idNotaTrienal: string = "Selecione um curso...";
  notaTrienalDecimo: number = 10;
  notaTrienalDecimoPrim: number = 10;
  notaTrienalDecimoSeg: number = 10;

  idNotaBienal1: string = "Nota Bienal Específica I";
  notaBienal1Decimo: number = 10;
  notaBienal1DecimoPrim: number = 10;

  idNotaBienal2: string = "Nota Bienal Específica II";
  notaBienal2Decimo: number = 10;
  notaBienal2DecimoPrim: number = 10;

  ultimaDisciplinaSelecionada1: any = null;
  ultimaDisciplinaSelecionada2: any = null;
  ultimaDisciplinaSelecionada3: any = null;
  ultimaDisciplinaSelecionada4: any = null;


  idNotaAnual1: string = "Nota Anual I";
  notaAnual1DecimoSeg: number = 10;
  idNotaAnual2: string = "Nota Anual I";
  notaAnual2DecimoSeg: number = 10;


  codigoCurso: string = "Curso Frequentado";
  idUtilizador: string;

  cifPortugues: number;
  notaExameInterno1Portugues: number = 100;
  notaExameInterno2Portugues: number = 100;
  notaExameExterno1Portugues: number = 100;
  notaExameExterno2Portugues: number = 100;
  isIngressoPortugues: boolean;
  portuguesInterno2Check: boolean = false;
  portuguesExterno1Check: boolean = false;
  portuguesExterno2Check: boolean = false;

  cifFilosofia: number;
  notaExameInterno1Filosofia: number = 100;
  notaExameInterno2Filosofia: number = 100;
  notaExameExterno1Filosofia: number = 100;
  notaExameExterno2Filosofia: number = 100;
  isIngressoFilosofia: boolean;
  filosofiaInterno1Check: boolean = false;
  filosofiaInterno2Check: boolean = false;
  filosofiaExterno1Check: boolean = false;
  filosofiaExterno2Check: boolean = false;


  cifTrienal: number;
  notaExameInterno1Trienal: number = 100;
  notaExameInterno2Trienal: number = 100;
  notaExameExterno1Trienal: number = 100;
  notaExameExterno2Trienal: number = 100;
  isIngressoTrienal: boolean;

  cifBienal1: number;
  notaExameInterno1Bienal1: number = 100;
  notaExameInterno2Bienal1: number = 100;
  notaExameExterno1Bienal1: number = 100;
  notaExameExterno2Bienal1: number = 100;
  isIngressoBienal1: boolean;

  cifBienal2: number;
  notaExameInterno1Bienal2: number = 100;
  notaExameInterno2Bienal2: number = 100;
  notaExameExterno1Bienal2: number = 100;
  notaExameExterno2Bienal2: number = 100;
  isIngressoBienal2: boolean;

  cifEduFisica: number;
  notaExameExterno1EduFisica: string;
  notaExameExterno2EduFisica: string;

  cifLingua: number;
  notaExameExterno1Lingua: string;
  notaExameExterno2Lingua: string;
  isIngressoLingua: boolean;

  cifAnual1: number;
  notaExameExterno1Anual1: string;
  notaExameExterno2Anual1: string;

  cifAnual2: number;
  notaExameExterno1Anual2: string;
  notaExameExterno2Anual2: string;

  disciplinasCurso: Disciplina[] = [];

  disciplinasCursoSelecao: Disciplina[] = [];

  disciplinasCiencias: Disciplina[] = [
    {nome: 'Física e Química A', value: 'FQA', tipo: 2},
    {nome: 'Biologia e Geologia', value: 'BG', tipo: 2},
    {nome: 'Geometria Descritiva A', value: 'GDA', tipo: 2},
    {nome: 'Matemática A', value: 'MATA', tipo: 3},
    {nome: 'Antropologia', value: 'ANT', tipo: 1},
    {nome: 'Aplicações Informáticas B', value: 'API', tipo: 1},
    {nome: 'Biologia', value: 'BIO', tipo: 1},
    {nome: 'Ciência Política', value: 'CP', tipo: 1},
    {nome: 'Clássicos de Literatura', value: 'CL', tipo: 1},
    {nome: 'Direito', value: 'DIR', tipo: 1},
    {nome: 'Economia C', value: 'ECOC', tipo: 1},
    {nome: 'Filosofia A', value: 'FILA', tipo: 1},
    {nome: 'Física', value: 'FIS', tipo: 1},
    {nome: 'Geografia C', value: 'GEOC', tipo: 1},
    {nome: 'Geologia', value: 'GEO', tipo: 1},
    {nome: 'Grego', value: 'GRE', tipo: 1},
    {nome: 'Língua Estrangeira', value: 'LIN', tipo: 1},
    {nome: 'Psicologia B', value: 'PSI', tipo: 1},
    {nome: 'Química', value: 'QUI', tipo: 1}
  ];

  disciplinasCienciasSocio: Disciplina[] = [
    {nome: 'Economia A', value: 'ECOA', tipo: 2},
    {nome: 'Geografia A', value: 'GEOA', tipo: 2},
    {nome: 'História B', value: 'HISB', tipo: 2},

    {nome: 'Matemática A', value: 'MATA', tipo: 3},

    {nome: 'Economia C', value: 'ECOC', tipo: 1},
    {nome: 'Geografia C', value: 'GEOC', tipo: 1},
    {nome: 'Sociologia', value: 'SOC', tipo: 1},
    {nome: 'Química', value: 'QUI', tipo: 1},
    {nome: 'Antropologia', value: 'ANT', tipo: 1},
    {nome: 'Aplicações Informáticas B', value: 'API', tipo: 1},
    {nome: 'Ciência Política', value: 'CP', tipo: 1},
    {nome: 'Clássicos de Literatura', value: 'CL', tipo: 1},
    {nome: 'Direito', value: 'DIR', tipo: 1},
    {nome: 'Filosofia A', value: 'FILA', tipo: 1},
    {nome: 'Grego', value: 'GRE', tipo: 1},
    {nome: 'Língua Estrangeira', value: 'LIN', tipo: 1},
    {nome: 'Psicologia B', value: 'PSI', tipo: 1}
  ];

  disciplinasArtesVisuais: Disciplina[] = [
    {nome: 'Desenho A', value: 'DESA', tipo: 3},

    {nome: 'Geometria Descritiva A', value: 'GDA', tipo: 2},
    {nome: 'Matemática B', value: 'MATB', tipo: 2},
    {nome: 'História da Cultura e das Artes', value: 'HCA', tipo: 2},

    {nome: 'Oficina de Artes', value: 'OFA', tipo: 1},
    {nome: 'Oficina de Multimédia B', value: 'OMB', tipo: 1},
    {nome: 'Materiais e Tecnologias', value: 'MT', tipo: 1},
    {nome: 'Antropologia', value: 'ANT', tipo: 1},
    {nome: 'Aplicações Informáticas B', value: 'API', tipo: 1},
    {nome: 'Ciência Política', value: 'CP', tipo: 1},
    {nome: 'Clássicos de Literatura', value: 'CL', tipo: 1},
    {nome: 'Direito', value: 'DIR', tipo: 1},
    {nome: 'Economia C', value: 'ECOC', tipo: 1},
    {nome: 'Filosofia A', value: 'FILA', tipo: 1},
    {nome: 'Grego', value: 'GRE', tipo: 1},
    {nome: 'Geografia C', value: 'GEOC', tipo: 1},
    {nome: 'Língua Estrangeira', value: 'LIN', tipo: 1},
    {nome: 'Psicologia B', value: 'PSI', tipo: 1}
  ];
  form: FormGroup;
  disciplinasLinguas: Disciplina[] = [
    {nome: 'História A', value: 'HISA', tipo: 3},

    {nome: 'Geografia A', value: 'GEOA', tipo: 2},
    {nome: 'MACS', value: 'MACS', tipo: 2},
    {nome: 'Latim A', value: 'LATA', tipo: 2},
    {nome: 'Língua Estrangeira', value: 'LIN', tipo: 2},
    {nome: 'Literatura Portuguesa', value: 'LIT', tipo: 2},


    {nome: 'Filosofia A', value: 'FILA', tipo: 1},
    {nome: 'Geografia C', value: 'GEOC', tipo: 1},
    {nome: 'Latim B', value: 'LATB', tipo: 1},
    {nome: 'Língua Estrangeira', value: 'LIN', tipo: 1},
    {nome: 'Literatura de Língua Portuguesa', value: 'LLP', tipo: 1},
    {nome: 'Psicologia B', value: 'PSIB', tipo: 1},
    {nome: 'Sociologia', value: 'SOC', tipo: 1},
    {nome: 'Antropologia', value: 'ANT', tipo: 1},
    {nome: 'Aplicações Informáticas B', value: 'APIB', tipo: 1},
    {nome: 'Ciência Política', value: 'CP', tipo: 1},
    {nome: 'Clássicos de Literatura', value: 'CLA', tipo: 1},
    {nome: 'Direito', value: 'DIR', tipo: 1},
    {nome: 'Economia C', value: 'ECOC', tipo: 1},
    {nome: 'Grego', value: 'GRE', tipo: 1}
  ];

  listaBienal1: Disciplina[] = [];
  listaBienal2: Disciplina[] = [];

  listaAnual1: Disciplina[] = [];
  listaAnual2: Disciplina[] = [];


  constructor(private calculoNotaService: CalculoNotaService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  public isIngressoCheck(elementoId: string) {
    switch (elementoId) {
      case 'isIngressoPortugues':
        this.isIngressoPortugues = !this.isIngressoPortugues;
        break;
      case 'isIngressoFilosofia':
        this.isIngressoFilosofia = !this.isIngressoFilosofia;
        break;
      case 'isIngressoBienal1':
        this.isIngressoBienal1 = !this.isIngressoBienal1;
        break;
      case 'isIngressoBienal2':
        this.isIngressoBienal2 = !this.isIngressoBienal2;
        break;
    }
  }

  public isInternoExternoCheck(elementoId: string) {
    switch (elementoId) {
      case 'internoPortugues2':
        this.portuguesInterno2Check = !this.portuguesInterno2Check;
        break;
      case 'externoPortugues1':
        this.portuguesExterno1Check = !this.portuguesExterno1Check;
        break;
      case 'externoPortugues2':
        this.portuguesExterno2Check = !this.portuguesExterno2Check;
        break;
      case 'internoFilosofia1':
        this.filosofiaInterno1Check = !this.filosofiaInterno1Check;
        break;
      case 'internoFilosofia2':
        this.filosofiaInterno2Check = !this.filosofiaInterno2Check;
        break;
      case 'externoFilosofia1':
        this.filosofiaExterno1Check = !this.filosofiaExterno1Check;
        break;
      case 'externoFilosofia2':
        this.filosofiaExterno2Check = !this.filosofiaExterno2Check;
        break;
      case 'isIngressoTrienal':
        this.isIngressoTrienal = !this.isIngressoTrienal;
        break;
    }
  }

  public externoInternoCheck() {

  }

  public validarNumero(num: any): boolean {
    const value = parseInt(num, 10);

    if (value < 1 || value > 20) {
      alert('Insira um nuémro entre 1 e 10.');
      return false;
    }
    return true;
  }

  public disciplinaCurso() {

    if (this.codigoCurso == "CT") {
      this.disciplinasCurso = this.disciplinasCiencias;
    } else if (this.codigoCurso == "CS") {
      this.disciplinasCurso = this.disciplinasCienciasSocio;
    } else if (this.codigoCurso == "AV") {
      this.disciplinasCurso = this.disciplinasArtesVisuais;
    } else if (this.codigoCurso == "LH") {
      this.disciplinasCurso = this.disciplinasLinguas;
    }
    this.cdr.detectChanges();
    this.disciplinasCursoSelecao = this.disciplinasCurso;

  }

  public adicionarDisciplinasArray(lista: number, codigo: string): void {

    const adicionarDisciplina = (listaBienal: Disciplina[], codigo: string): void => {
      const disciplinaEncontrada = this.disciplinasCurso.find(disciplina => disciplina.value === codigo);
      if (disciplinaEncontrada) {
        if (listaBienal.length === 1) {
          // Move a disciplina atual de volta para selecao
          const disciplinaAtual = listaBienal[0];
          if (!this.disciplinasCursoSelecao.some(d => d.value === disciplinaAtual.value)) {
            this.disciplinasCursoSelecao.push(disciplinaAtual);
          }
        }

        // Atualiza listaBienal com a nova disciplina
        listaBienal.length = 0; // Limpa o array
        listaBienal.push(disciplinaEncontrada);
      }
    };

    if (lista === 1) {
      adicionarDisciplina(this.listaBienal1, codigo);
      this.ultimaDisciplinaSelecionada1 = this.disciplinasCurso.find(disciplina => disciplina.value === codigo);
    } else if (lista === 2) {
      adicionarDisciplina(this.listaBienal2, codigo);
      this.ultimaDisciplinaSelecionada2 = this.disciplinasCurso.find(disciplina => disciplina.value === codigo);
    } else if (lista === 3) {
      adicionarDisciplina(this.listaAnual1, codigo);
      this.ultimaDisciplinaSelecionada3 = this.disciplinasCurso.find(disciplina => disciplina.value === codigo);
    } else if (lista === 4) {
      adicionarDisciplina(this.listaAnual2, codigo);
      this.ultimaDisciplinaSelecionada4 = this.disciplinasCurso.find(disciplina => disciplina.value === codigo);
    }
    // Atualiza disciplinasCursoSelecao removendo as selecionadas
    const selecionados = [...this.listaBienal1, ...this.listaBienal2, ...this.listaAnual1, ...this.listaAnual2].map(d => d.value);
    this.disciplinasCursoSelecao = this.disciplinasCurso.filter(disciplina => !selecionados.includes(disciplina.value));
    this.ordenarArray(this.disciplinasCursoSelecao, "nome");
  }

  getOpcoes(lista: Disciplina[], ultimaSelecionada: Disciplina | null) {
    if (ultimaSelecionada) {
      return [ultimaSelecionada, ...lista.filter(d => d.value !== ultimaSelecionada.value)];
    }
    return this.ordenarArray(lista, "nome");
  }

  public printt() {
    console.log(this.isIngressoPortugues);
  }

  public salvarNota(): void {

    const params: NotaParams = {
      notaPortuguesDecimo: this.notaPortuguesDecimo.toString(),
      notaPortuguesDecimoPrim: this.notaPortuguesDecimoPrim.toString(),
      notaPortuguesDecimoSeg: this.notaPortuguesDecimoSeg.toString(),
      notaEduFisicaDecimo: this.notaEduFisicaDecimo.toString(),
      notaEduFisicaDecimoPrim: this.notaEduFisicaDecimoPrim.toString(),
      notaEduFisicaDecimoSeg: this.notaEduFisicaDecimoSeg.toString(),
      notaFilosofiaDecimo: this.notaFilosofiaDecimo.toString(),
      notaFilosofiaDecimoPrim: this.notaFilosofiaDecimoPrim.toString(),
      idLingua: this.idLingua,
      notaLinguaDecimo: this.notaLinguaDecimo.toString(),
      notaLinguaDecimoPrim: this.notaLinguaDecimoPrim.toString(),
      idNotaTrienal: this.idNotaTrienal,
      notaTrienalDecimo: this.notaTrienalDecimo.toString(),
      notaTrienalDecimoPrim: this.notaTrienalDecimoPrim.toString(),
      notaTrienalDecimoSeg: this.notaTrienalDecimoSeg.toString(),
      idNotaBienal1: this.idNotaBienal1,
      notaBienal1Decimo: this.notaBienal1Decimo.toString(),
      notaBienal1DecimoPrim: this.notaBienal1DecimoPrim.toString(),
      idNotaBienal2: this.idNotaBienal2,
      notaBienal2Decimo: this.notaBienal2Decimo.toString(),
      notaBienal2DecimoPrim: this.notaBienal2DecimoPrim.toString(),
      idNotaAnual1: this.idNotaAnual1,
      notaAnual1DecimoSeg: this.notaAnual1DecimoSeg.toString(),
      idNotaAnual2: this.idNotaAnual2,
      notaAnual2DecimoSeg: this.notaAnual2DecimoSeg.toString(),
      codigoCurso: this.codigoCurso,
      idUtilizador: this.idUtilizador,
      cifPortugues: this.cifPortugues,
      notaExameInterno1Portugues: this.notaExameInterno1Portugues.toString(),
      notaExameInterno2Portugues: this.notaExameInterno2Portugues.toString(),
      notaExameExterno1Portugues: this.notaExameExterno1Portugues.toString(),
      notaExameExterno2Portugues: this.notaExameExterno2Portugues.toString(),
      isIngressoPortugues: this.isIngressoPortugues,
      cifFilosofia: this.cifFilosofia,
      notaExameInterno1Filosofia: this.notaExameInterno1Filosofia.toString(),
      notaExameInterno2Filosofia: this.notaExameInterno2Filosofia.toString(),
      notaExameExterno1Filosofia: this.notaExameExterno1Filosofia.toString(),
      notaExameExterno2Filosofia: this.notaExameExterno2Filosofia.toString(),
      isIngressoFilosofia: this.isIngressoFilosofia,
      cifTrienal: this.cifTrienal,
      notaExameInterno1Trienal: this.notaExameInterno1Trienal.toString(),
      notaExameInterno2Trienal: this.notaExameInterno2Trienal.toString(),
      notaExameExterno1Trienal: this.notaExameExterno1Trienal.toString(),
      notaExameExterno2Trienal: this.notaExameExterno2Trienal.toString(),
      isIngressoTrienal: this.isIngressoTrienal,
      cifBienal1: this.cifBienal1,
      notaExameInterno1Bienal1: this.notaExameInterno1Bienal1.toString(),
      notaExameInterno2Bienal1: this.notaExameInterno2Bienal1.toString(),
      notaExameExterno1Bienal1: this.notaExameExterno1Bienal1.toString(),
      notaExameExterno2Bienal1: this.notaExameExterno2Bienal1.toString(),
      isIngressoBienal1: this.isIngressoBienal1,
      cifBienal2: this.cifBienal2,
      notaExameInterno1Bienal2: this.notaExameInterno1Bienal2.toString(),
      notaExameInterno2Bienal2: this.notaExameInterno2Bienal2.toString(),
      notaExameExterno1Bienal2: this.notaExameExterno1Bienal2.toString(),
      notaExameExterno2Bienal2: this.notaExameExterno2Bienal2.toString(),
      isIngressoBienal2: this.isIngressoBienal2,
      cifEduFisica: this.cifEduFisica,
      notaExameExterno1EduFisica: this.notaExameExterno1EduFisica,
      notaExameExterno2EduFisica: this.notaExameExterno2EduFisica,
      cifLingua: this.cifLingua,
      notaExameExterno1Lingua: this.notaExameExterno1Lingua,
      notaExameExterno2Lingua: this.notaExameExterno2Lingua,
      isIngressoLingua: this.isIngressoLingua,
      cifAnual1: this.cifAnual1,
      notaExameExterno1Anual1: this.notaExameExterno1Anual1,
      notaExameExterno2Anual1: this.notaExameExterno2Anual1,
      cifAnual2: this.cifAnual2,
      notaExameExterno1Anual2: this.notaExameExterno1Anual2,
      notaExameExterno2Anual2: this.notaExameExterno2Anual2
    };

    this.calculoNotaService.salvarGrelhaNotas(params).subscribe(data => {
      this.notaVisualizacao = data;
      this.updateNotaProperties(data);
    });
  }

  private updateNotaProperties(data: any): void {
    this.notaPortuguesDecimo = data.notaPortuguesDecimo;
    this.notaPortuguesDecimoPrim = data.notaPortuguesDecimoPrim;
    this.notaPortuguesDecimoSeg = data.notaPortuguesDecimoSeg;
    this.notaEduFisicaDecimo = data.notaEduFisicaDecimo;
    this.notaEduFisicaDecimoPrim = data.notaEduFisicaDecimoPrim;
    this.notaEduFisicaDecimoSeg = data.notaEduFisicaDecimoSeg;
    this.notaFilosofiaDecimo = data.notaFilosofiaDecimo;
    this.notaFilosofiaDecimoPrim = data.notaFilosofiaDecimoPrim;
    this.idLingua = data.idLingua;
    this.notaLinguaDecimo = data.otaLinguaDecimo;
    this.notaLinguaDecimoPrim = data.notaLinguaDecimoPrim;
    this.idNotaTrienal = data.idNotaTrienal;
    this.notaTrienalDecimo = data.notaTrienalDecimo;
    this.notaTrienalDecimoPrim = data.notaTrienalDecimoPrim;
    this.notaTrienalDecimoSeg = data.notaTrienalDecimoSeg;
    this.idNotaBienal1 = data.idNotaBienal1;
    this.notaBienal1Decimo = data.notaBienal1Decimo;
    this.notaBienal1DecimoPrim = data.notaBienal1DecimoPrim;
    this.idNotaBienal2 = data.idNotaBienal2;
    this.notaBienal2Decimo = data.notaBienal2Decimo;
    this.notaBienal2DecimoPrim = data.notaBienal2DecimoPrim;
    this.idNotaAnual1 = data.idNotaAnual1;
    this.notaAnual1DecimoSeg = data.notaAnual1DecimoSeg;
    this.idNotaAnual2 = data.idNotaAnual2;
    this.notaAnual2DecimoSeg = data.notaAnual2DecimoSeg;
    this.codigoCurso = data.codigoCurso;
    this.idUtilizador = data.idUtilizador;
    this.cifPortugues = data.cifPortugues;
    this.notaExameInterno1Portugues = data.notaExameInterno1Portugues;
    this.notaExameInterno2Portugues = data.notaExameInterno2Portugues;
    this.notaExameExterno1Portugues = data.notaExameExterno1Portugues;
    this.notaExameExterno2Portugues = data.notaExameExterno2Portugues;
    this.isIngressoPortugues = data.isIngressoPortugues;
    this.cifFilosofia = data.cifFilosofia;
    this.notaExameInterno1Filosofia = data.notaExameInterno1Filosofia;
    this.notaExameInterno2Filosofia = data.notaExameInterno2Filosofia;
    this.notaExameExterno1Filosofia = data.notaExameExterno1Filosofia;
    this.notaExameExterno2Filosofia = data.notaExameExterno2Filosofia;
    this.isIngressoFilosofia = data.isIngressoFilosofia;
    this.cifTrienal = data.cifTrienal;
    this.notaExameInterno1Trienal = data.notaExameInterno1Trienal;
    this.notaExameInterno2Trienal = data.notaExameInterno2Trienal;
    this.notaExameExterno1Trienal = data.notaExameExterno1Trienal;
    this.notaExameExterno2Trienal = data.notaExameExterno2Trienal;
    this.isIngressoTrienal = data.isIngressoTrienal;
    this.cifBienal1 = data.cifBienal1;
    this.notaExameInterno1Bienal1 = data.notaExameInterno1Bienal1;
    this.notaExameInterno2Bienal1 = data.notaExameInterno2Bienal1;
    this.notaExameExterno1Bienal1 = data.notaExameExterno1Bienal1;
    this.notaExameExterno2Bienal1 = data.notaExameExterno2Bienal1;
    this.isIngressoBienal1 = data.isIngressoBienal1;
    this.cifBienal2 = data.cifBienal2;
    this.notaExameInterno1Bienal2 = data.notaExameInterno1Bienal2;
    this.notaExameInterno2Bienal2 = data.notaExameInterno2Bienal2;
    this.notaExameExterno1Bienal2 = data.notaExameExterno1Bienal2;
    this.notaExameExterno2Bienal2 = data.notaExameExterno2Bienal2;
    this.isIngressoBienal2 = data.isIngressoBienal2;
    this.cifEduFisica = data.cifEduFisica;
    this.notaExameExterno1EduFisica = data.notaExameExterno1EduFisica;
    this.notaExameExterno2EduFisica = data.notaExameExterno2EduFisica;
    this.cifLingua = data.cifLingua;
    this.notaExameExterno1Lingua = data.notaExameExterno1Lingua;
    this.notaExameExterno2Lingua = data.notaExameExterno2Lingua;
    this.isIngressoLingua = data.isIngressoLingua;
    this.cifAnual1 = data.cifAnual1;
    this.notaExameExterno1Anual1 = data.notaExameExterno1Anual1;
    this.notaExameExterno2Anual1 = data.notaExameExterno2Anual1;
    this.cifAnual2 = data.cifAnual2;
    this.notaExameExterno1Anual2 = data.notaExameExterno1Anual2;
    this.notaExameExterno2Anual2 = data.notaExameExterno2Anual2;
  }

  validateMaxValue(event: any) {
    let value = event;

    if (typeof event === 'object' && event.target) {
      value = parseInt(event.target.value, 10);
    }

    if (value > 20) {
      value = 20;
    }

    this.notaAnual1DecimoSeg = value;
  }

  public ordenarArray(arr: any[], propriedade: string): any[] {
    return arr.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1; // Retorna um valor negativo se 'a' deve vir antes de 'b'
      }
      if (a[propriedade] > b[propriedade]) {
        return 1; // Retorna um valor positivo se 'b' deve vir antes de 'a'
      }
      return 0; // Retorna 0 se os valores forem iguais
    });
  }
}
