import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pet } from "../models/pet";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class PetService {
  private url: string = environment.url;
  constructor(private http: HttpClient) {}

  getPetsOwnerId(id: number) {
    let pa = JSON.stringify({
      accion: "ListarPetsOwnerId",
      id: id
    });
    return this.http.post<Pet[]>(this.url, pa);
  }
}
