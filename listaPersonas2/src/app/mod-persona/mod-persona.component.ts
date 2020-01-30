import { Component, OnInit } from "@angular/core";
import { PajaxService } from "../pajax.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Persona } from "../persona";

@Component({
  selector: "app-mod-persona",
  templateUrl: "./mod-persona.component.html",
  styleUrls: ["./mod-persona.component.css"]
})
export class ModPersonaComponent implements OnInit {
  private p: Persona;
  private selId: number = -1;
  constructor(
    private servicioAjax: PajaxService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {}

  anadir(id: number) {
    this.servicioAjax
      .anadir(this.p.dni, this.p.nombre, this.p.apellidos)
      .subscribe();
    this.cancelar();
  }

  editar(datos: Object) {
    this.p.id = this.selId;
    this.p.dni = datos["dni"];
    this.p.nombre = datos["nombre"];
    this.p.apellidos = datos["apellidos"];
  }

  cancelar() {
    this.ruta.navigate(["/"]);
  }
  ngOnInit() {
    this.selId = this.route.snapshot.params["id"];
    if (this.selId != -1) {
      this.servicioAjax.buscar(this.selId).subscribe(respuesta => {
        this.editar(respuesta);
      });
    }
  }
}
