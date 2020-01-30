import { Component, OnInit } from "@angular/core";
import { PajaxService } from "../pajax.service";
import { Router } from "@angular/router";
import { Persona } from "../persona";
@Component({
  selector: "app-listar-personas",
  templateUrl: "./listar-personas.component.html",
  styleUrls: ["./listar-personas.component.css"]
})
export class ListarPersonasComponent implements OnInit {
  private listaPer: Persona[];
  constructor(private servicioAjax: PajaxService, private ruta: Router) {
    this.servicioAjax.listar().subscribe(respuesta => {
      this.asignarDatos(respuesta);
    });
  }

  asignarDatos(datos: Persona[]) {
    this.listaPer = datos;
  }

  irAFormAdd(id: number) {
    this.ruta.navigate(["personas-add/" + id]);
  }

  irAFormMod(id: number) {
    this.ruta.navigate(["personas-mod/" + id]);
  }

  borrarPersona(id: number, nombre: string, apellidos: string) {
    if (confirm("¿Desea eliminar a " + nombre + " " + apellidos + " ?")) {
      this.servicioAjax.borrar(id).subscribe(respuesta => {
        this.asignarDatos(respuesta);
      });
    }
  }
  ngOnInit() {}
}
