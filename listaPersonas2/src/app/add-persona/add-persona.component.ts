import { Component, OnInit } from "@angular/core";
import { Persona } from "../persona";
import { PajaxService } from "../pajax.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-persona",
  templateUrl: "./add-persona.component.html",
  styleUrls: ["./add-persona.component.css"]
})
export class AddPersonaComponent implements OnInit {
  private p: Persona;
  constructor(private servicioAjax: PajaxService, private ruta: Router) {
    this.p = <Persona>{};
  }

  anadir(id: number) {
    this.servicioAjax
      .anadir(this.p.dni, this.p.nombre, this.p.apellidos)
      .subscribe();
    this.cancelar();
  }
  cancelar() {
    this.ruta.navigate(["/"]);
  }
  ngOnInit() {}
}
