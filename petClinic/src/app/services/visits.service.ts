import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Visit } from "../models/visit";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class VisitsService {
  private url = environment.url;
  constructor(private http: HttpClient) {}

  getVisitsPet(id: number) {
    let pa = JSON.stringify({
      accion: "ListarVisitasPet",
      id: id
    });
    return this.http.post<Visit[]>(this.url, pa);
  }

  addVisit(visit: Visit) {
    let pa = JSON.stringify({
      accion: "AnadeVisit",
      visit: visit
    });
    return this.http.post(this.url, pa);
  }
}
