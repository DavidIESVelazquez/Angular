import { Injectable } from "@angular/core";
import { Estadocivil } from "src/app/models/estadocivil";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class EstadocivilService {
  private url = "http://localhost/ajax/Examen2/Servicios/servicios.php";
  constructor(private http: HttpClient) {}

  listarEC() {
    let pa = JSON.stringify({
      accion: 9
    });
    return this.http.post<Estadocivil[]>(this.url, pa);
  }

  listarS() {
    let pa = JSON.stringify({
      accion: 5
    });
    return this.http.post<Estadocivil[]>(this.url, pa);
  }
}
