import {HttpClient} from "@angular/common/http";

export class CalculoNotaService {

  constructor(private httpClient: HttpClient) {
  }

  salvarGrelhaNotas(codigoCurso: string, utilizadorId: String, notaPortuguesDecimo: string, notaPortuguesDecimoPrim: string,
                    notaPortuguesDecimoSeg: string, notaEduFisicaDecimo: string, notaEduFisicaDecimoPrim: string,
                    notaEduFisicaDecimoSeg: string, notaFilosofiaDecimo: string, notaFilosofiaDecimoPrim: string,
                    linguaId: string, notaLinguaDecimo: string, notaLinguaDecimoPrim: string, trienalId: string,
                    notaTrienalDecimo: string, notaTrienalDecimoPrim: string, notaTrienalDecimoSeg: string,
                    bienal1Id: string, notaBienal1Decimo: string, notaBienal1DecimoPrim: string, bienal2Id: string,
                    notaBienal2Decimo: string, notaBienal2DecimoPrim: string, anual1Id: string, notaAnual1DecimoSeg: string,
                    anual2Id: string, notaAnual2DecimoSeg: string,) {
    const body = {}
  }

}
