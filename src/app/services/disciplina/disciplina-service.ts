import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export class DisciplinaService{

  public Url = 'http://localhost:5096/api/Disciplina';

  constructor(private httpClient:HttpClient) {
  }

  createDisciplina(nomeDisciplina:string,tipoDisciplina:string):Observable<any>{
    const body={
      "disciplinaNome":nomeDisciplina,
      "disciplinaTipo":tipoDisciplina
    }
    return this.httpClient.post(this.Url,body).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }

}
