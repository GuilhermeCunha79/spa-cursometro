import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export class DisciplinaCursoService {

  public Url = 'http://localhost:5096/api/DisciplinaCurso';

  constructor(private httpClient: HttpClient) {
  }

  getByUtilizador(utilizadorId : string):Observable<any> {
    return this.httpClient.get(this.Url + '/DisciplinaCurso/' + utilizadorId).pipe(map(this.extractData))
  }

  geyByCodDisciplina(codigoDisciplina:string):Observable<any>{
    return this.httpClient.get(this.Url + '/DisciplinaCurso/Disciplina/' + codigoDisciplina).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }

}
