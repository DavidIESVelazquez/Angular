import { Component, OnInit } from "@angular/core";

import { PAjaxService } from "../p-ajax.service";

@Component({
  selector: "app-personaje",
  templateUrl: "./personaje.component.html",
  styleUrls: ["./personaje.component.css"]
})
export class PersonajeComponent implements OnInit {
  public datos: any = null; //VA A SER LA RESPUESTA DE LA PETICION AJAX
  public listaPer: Object[]; //VA A SER LA LISTA DE PERSONAJES  datos.results
  public datosPlaneta: Object = null; //VA A SER UN OBJETO CON LOS DATOS DEL PLANETA
  public datosPer = ["name", "height", "mass", "birth_year", "gender"];
  constructor(private servicioAjax: PAjaxService) {
    this.servicioAjax.peticion().subscribe(respuesta => {
      this.asignarDatos(respuesta);
    });
  }

  asignarDatos(datos: Object) {
    this.datos = datos;
    this.listaPer = this.datos.results;
  }

  ir(url: string) {
    console.log(url);
    this.servicioAjax.peticionUrl(url).subscribe(respuesta => {
      this.asignarDatos(respuesta);
    });
  }

  irPlaneta(e, url: string) {
    e.preventDefault();
    this.servicioAjax.peticionUrl(url + "?format=json").subscribe(respuesta => {
      console.log(respuesta);
      this.datosPlaneta = respuesta;
    });
  }
  ngOnInit() {}
}
