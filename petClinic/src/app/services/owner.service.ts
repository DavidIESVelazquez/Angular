import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Owner } from "../models/owner";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OwnerService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getOwners() {
    let pa = JSON.stringify({
      accion: "ListarOwners"
    });
    return this.http.post<Owner[]>(this.url, pa);
  }

  getOwnerId(id: number) {
    let pa = JSON.stringify({
      accion: "ObtenerOwnerId",
      id: id
    });
    return this.http.post<Owner>(this.url, pa);
  }

  addOwner(owner: Owner) {
    let pa = JSON.stringify({
      accion: "AnadeOwner",
      owner: owner
    });
    return this.http.post(this.url, pa);
  }

  deleteOwner(id: number) {
    let pa = JSON.stringify({
      accion: "BorraOwner",
      id: id,
      listado: "OK"
    });
    return this.http.post<Owner[]>(this.url, pa);
  }

  editOwner(owner: Owner) {
    let pa = JSON.stringify({
      accion: "ModificaOwner",
      owner: owner
    });
    return this.http.post(this.url, pa);
  }
}
