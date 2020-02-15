import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { PetType } from "../models/pet-type";
@Injectable({
  providedIn: "root"
})
export class PetTypeService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getPetTypes() {
    let pa = JSON.stringify({
      accion: "ListarPettypes"
    });
    return this.http.post<PetType[]>(this.url, pa);
  }
}
