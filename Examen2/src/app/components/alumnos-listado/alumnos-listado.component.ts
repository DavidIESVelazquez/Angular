import { Component, OnInit } from "@angular/core";
import { Alumno } from "src/app/models/alumno";
import { Router } from "@angular/router";
import { AlumnoService } from "src/app/services/alumno.service";
@Component({
  selector: "app-alumnos-listado",
  templateUrl: "./alumnos-listado.component.html",
  styleUrls: ["./alumnos-listado.component.css"]
})
export class AlumnosListadoComponent implements OnInit {
  private alumnos: Array<Alumno>;
  private borrar: boolean;
  private delalumno: Alumno;
  constructor(private alumnoService: AlumnoService, private route: Router) {
    this.borrar = false;
  }

  listarAlumnos(respuesta) {
    // this.alumnoService.listado().subscribe(respuesta => {
    //   this.alumnos = respuesta;
    // });
    console.log("respuesta", respuesta);
    if (respuesta != undefined) {
      this.alumnos = respuesta;
    }
    this.borrar = false;
  }

  mostrarBorrar(alumno: Alumno) {
    this.delalumno = alumno;
    if (this.borrar) {
      this.borrar = false;
    } else {
      this.borrar = true;
    }
  }

  ngOnInit() {
    this.alumnoService.listado().subscribe(respuesta => {
      this.alumnos = respuesta;
    });
  }
}
