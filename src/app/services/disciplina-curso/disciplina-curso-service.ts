import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export class DisciplinaCursoService {

  public Url = 'https://localhost:5001/api/Associacao';

  constructor(private httpClient: HttpClient) {
  }

  getByUtilizador(utilizadorId : string):Observable<any> {
    return this.httpClient.get(this.Url + '/DisciplinaCurso/' + utilizadorId).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }

}
