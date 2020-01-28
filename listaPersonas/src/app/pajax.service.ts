import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Persona } from "./persona";

@Injectable({
  providedIn: "root"
})
export class PajaxService {
  private url: string = "http://localhost/ajax/servidor.php";
  constructor(private http: HttpClient) {}

  listar() {
    let pa = JSON.stringify({
      servicio: "listar"
    });
    console.log(this.url, pa);
    return this.http.post<Persona[]>(this.url, pa);
  }

  anadir(dni: string, nombre: string, apellidos: string) {
    let pa = JSON.stringify({
      servicio: "insertar",
      dni: dni,
      nombre: nombre,
      apellidos: apellidos
    });
    return this.http.post<Persona[]>(this.url, pa);
  }

  editar(id: number, dni: string, nombre: string, apellidos: string) {
    let pa = JSON.stringify({
      servicio: "modificar",
      id: id,
      dni: dni,
      nombre: nombre,
      apellidos: apellidos
    });
    return this.http.post<Persona[]>(this.url, pa);
  }

  borrar(id: number) {
    let pa = JSON.stringify({
      servicio: "borrar",
      id: id
    });
    return this.http.post<Persona[]>(this.url, pa);
  }

  buscar(id: number) {
    let pa = JSON.stringify({
      servicio: "selPersonaID",
      id: id
    });
    return this.http.post<Persona>(this.url, pa);
  }
}
