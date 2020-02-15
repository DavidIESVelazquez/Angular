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

  //Lista los pets como un string con el nombre de cada pet
  getPetsOwnerId(id: number) {
    let pa = JSON.stringify({
      accion: "ListarPetsOwnerId",
      id: id
    });
    return this.http.post<Pet[]>(this.url, pa);
  }

  addPet(pet: Pet) {
    let pa = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });
    console.log(pa);
    return this.http.post(this.url, pa);
  }

  editPet(pet: Pet) {
    let pa = JSON.stringify({
      accion: "ModificaPet",
      pet: pet
    });
    return this.http.post(this.url, pa);
  }

  deletePet(id: number) {
    let pa = JSON.stringify({
      accion: "BorraPet",
      id: id
    });
    return this.http.post(this.url, pa);
  }

  getPetId(id: number) {
    let pa = JSON.stringify({
      accion: "ObtenerPetId",
      id: id
    });
    return this.http.post<Pet>(this.url, pa);
  }
}
