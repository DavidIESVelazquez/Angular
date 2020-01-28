import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PAjaxService {
  private urlPersonaje = "https://swapi.co/api/people/?format=json";

  constructor(private http: HttpClient) {}

  peticion() {
    return this.http.get(this.urlPersonaje);
    // return this.http.get<{res:Object}>(this.urlPersonaje);
  }

  peticionUrl(url: string) {
    return this.http.get(url);
  }
}
