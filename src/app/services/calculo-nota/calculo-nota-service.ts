import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {NotaParams} from "../../interfaces/notaParams";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoNotaService {

  public Url = 'http://localhost:5096/api/Disciplina_CursoSecundario';

  constructor(private httpClient: HttpClient) {
  }

  salvarGrelhaNotas(params: NotaParams): Observable<any> {
    const body = {
      "codigoCurso": params.codigoCurso,
      "notaPortuguesDecimo": params.notaPortuguesDecimo,
      "notaPortuguesDecimoPrim": params.notaPortuguesDecimoPrim,
      "notaPortuguesDecimoSeg": params.notaPortuguesDecimoSeg,
      "notaEduFisicaDecimo": params.notaEduFisicaDecimo,
      "notaEduFisicaDecimoPrim": params.notaEduFisicaDecimoPrim,
      "notaEduFisicaDecimoSeg": params.notaEduFisicaDecimoSeg,
      "notaFilosofiaDecimo": params.notaFilosofiaDecimo,
      "notaFilosofiaDecimoPrim": params.notaFilosofiaDecimoPrim,
      "idLingua": params.idLingua,
      "notaLinguaDecimo": params.notaLinguaDecimo,
      "notaLinguaDecimoPrim": params.notaLinguaDecimoPrim,
      "idNotaTrienal": params.idNotaTrienal,
      "notaTrienalDecimo": params.notaTrienalDecimo,
      "notaTrienalDecimoPrim": params.notaTrienalDecimoPrim,
      "notaTrienalDecimoSeg": params.notaTrienalDecimoSeg,
      "idNotaBienal1": params.idNotaBienal1,
      "notaBienal1Decimo": params.notaBienal1Decimo,
      "notaBienal1DecimoPrim": params.notaBienal1DecimoPrim,
      "idNotaBienal2": params.idNotaBienal2,
      "notaBienal2Decimo": params.notaBienal2Decimo,
      "notaBienal2DecimoPrim": params.notaBienal2DecimoPrim,
      "idNotaAnual1": params.idNotaAnual1,
      "notaAnual1DecimoSeg": params.notaAnual1DecimoSeg,
      "idNotaAnual2": params.idNotaAnual2,
      "notaAnual2DecimoSeg": params.notaAnual2DecimoSeg,

      "idUtilizador": params.idUtilizador,
      "isIngressoLingua": params.isIngressoLingua,
      "cifPortugues": params.cifPortugues,
      "notaExameInterno1Portugues": params.notaExameInterno1Portugues,
      "notaExameInterno2Portugues": params.notaExameInterno2Portugues,
      "notaExameExterno1Portugues": params.notaExameExterno1Portugues,
      "notaExameExterno2Portugues": params.notaExameExterno2Portugues,
      "isIngressoPortugues": params.isIngressoPortugues,

      "cifTrienal": params.cifTrienal,
      "notaExameInterno1Trienal": params.notaExameInterno1Trienal,
      "NotaExameInterno2Trienal": params.notaExameInterno2Trienal,
      "notaExameExterno1Trienal": params.notaExameExterno1Trienal,
      "notaExameExterno2Trienal": params.notaExameExterno2Trienal,
      "isIngressoTrienal": params.isIngressoTrienal,
      "cifBienal1": params.cifBienal1,
      "notaExameInterno1Bienal1": params.notaExameInterno1Bienal1,
      "notaExameInterno2Bienal1": params.notaExameInterno2Bienal1,
      "notaExameExterno1Bienal1": params.notaExameExterno1Bienal1,
      "notaExameExterno2Bienal1": params.notaExameExterno2Bienal1,
      "isIngressoBienal1": params.isIngressoBienal1,
      "cifBienal2": params.cifBienal2,
      "notaExameInterno1Bienal2": params.notaExameInterno1Bienal2,
      "notaExameInterno2Bienal2": params.notaExameInterno2Bienal2,
      "notaExameExterno1Bienal2": params.notaExameExterno1Bienal2,
      "notaExameExterno2Bienal2": params.notaExameExterno2Bienal2,
      "isIngressoBienal2": params.isIngressoBienal2,
      "cifFilosofia": params.cifFilosofia,
      "notaExameInterno1Filosofia": params.notaExameInterno1Filosofia,
      "notaExameInterno2Filosofia": params.notaExameInterno2Filosofia,
      "notaExameExterno1Filosofia": params.notaExameExterno1Filosofia,
      "notaExameExterno2Filosofia": params.notaExameExterno2Filosofia,
      "isIngressoFilosofia": params.isIngressoFilosofia,
      "cifEduFisica": params.cifEduFisica,
      "notaExameExterno1EduFisica": params.notaExameExterno1EduFisica,
      "notaExameExterno2EduFisica": params.notaExameExterno2EduFisica,

      "cifLingua": params.cifLingua,
      "notaExameExterno1Lingua": params.notaExameExterno1Lingua,
      "notaExameExterno2Lingua": params.notaExameExterno2Lingua,

      "cifAnual1": params.cifAnual1,
      "notaExameExterno1Anual1": params.notaExameExterno1Anual1,
      "notaExameExterno2Anual1": params.notaExameExterno2Anual1,

      "cifAnual2": params.cifAnual2,
      "notaExameExterno1Anual2": params.notaExameExterno1Anual2,
      "notaExameExterno2Anual2": params.notaExameExterno2Anual2
    }
    return this.httpClient.post(this.Url, body).pipe(map(this.extractData))
  };

  public getByUtilizador(utilizadorId: string) {
    return this.httpClient.get(this.Url + utilizadorId).pipe(map(this.extractData));
  }

  public getByUtilizadorDisciplina(utilizadorId: string, disciplinaCodigo: string) {
    return this.httpClient.get(this.Url + utilizadorId + '/' + disciplinaCodigo).pipe(map(this.extractData));
  }

  public extractData(res: any) {
    return res || {};
  }

}
