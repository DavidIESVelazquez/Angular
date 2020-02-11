import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Vet } from "../models/vet";
@Injectable({
  providedIn: "root"
})
export class VetService {
  private url: string =
    "http://localhost/ajax/petClinic/API/petclinic/servicios.php";
  //private url: string = "http://localhost/ajax/petclinic/servicios.php";
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
