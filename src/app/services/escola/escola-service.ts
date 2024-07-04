import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

export class EscolaService {

  public Url = 'http://localhost:5096/api/Escola';

  constructor(private httpClient: HttpClient) {
  }

  getEscolas() {
    return this.httpClient.get(this.Url).pipe(map(this.extractData))
  }

  public extractData(res: any) {
    return res || {};
  }
}
