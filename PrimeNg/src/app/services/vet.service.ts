import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Vet } from "../models/vet";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class VetService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getVets() {
    let pa = JSON.stringify({
      accion: "ListarVets"
    });
    return this.http.post<Vet[]>(this.url, pa);
  }

  getVetId(id: number) {
    let pa = JSON.stringify({
      accion: "ObtenerVetId",
      id: id
    });
    return this.http.post<Vet>(this.url, pa);
  }
}
