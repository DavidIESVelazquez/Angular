import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Owner } from "../models/owner";

@Injectable({
  providedIn: "root"
})
export class OwnerService {
  private url: string = "http://localhost/ajax/petClinic/API/petclinic/servicios.php";

  constructor(private http: HttpClient) {}

  getOwners() {
    let pa = JSON.stringify({
      accion: "ListarOwners"
    });
    return this.http.post<Owner[]>(this.url, pa);
  }
}
