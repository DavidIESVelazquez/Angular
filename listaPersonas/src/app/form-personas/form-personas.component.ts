import { Component, OnInit } from "@angular/core";
import { PajaxService } from "../pajax.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Persona } from "../persona";
@Component({
  selector: "app-form-personas",
  templateUrl: "./form-personas.component.html",
  styleUrls: ["./form-personas.component.css"]
})
export class FormPersonasComponent implements OnInit {
  private p: Persona;
  accion: string = "Añadir";
  private selId = null;
  constructor(
    private servicioAjax: PajaxService,
    private ruta: Router,
    private route: ActivatedRoute
  ) {
    this.p = {
      id: -1,
      dni: "",
      nombre: "",
      apellidos: ""
    };
  }

  anadir(id: number) {
    if (this.selId == -1) {
      this.servicioAjax
        .anadir(this.p.dni, this.p.nombre, this.p.apellidos)
        .subscribe();
      this.cancelar();
    } else {
      this.servicioAjax
        .editar(this.p.id, this.p.dni, this.p.nombre, this.p.apellidos)
        .subscribe();
      this.cancelar();
    }
  }
  editar(datos: Object) {
    this.p.id = this.selId;
    this.p.dni = datos["dni"];
    this.p.nombre = datos["nombre"];
    this.p.apellidos = datos["apellidos"];
    this.accion = "Modificar";
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
