import { Component, OnInit } from "@angular/core";
import { Alumno } from "src/app/models/alumno";
import { Estadocivil } from "src/app/models/estadocivil";
import { AlumnoService } from "src/app/services/alumno.service";
import { EstadocivilService } from "src/app/services/estadocivil.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-alumno-form",
  templateUrl: "./alumno-form.component.html",
  styleUrls: ["./alumno-form.component.css"]
})
export class AlumnoFormComponent implements OnInit {
  private estados: Array<Estadocivil>;
  private alumno: Alumno;
  private sexos: Array<Estadocivil>;
  private accion: string;
  constructor(
    private alumnoService: AlumnoService,
    private estadoService: EstadocivilService,
    private route: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.alumno = <Alumno>{};
    this.accion = "Añadir";
  }

  onSubmit() {
    console.log("Alumno: ", this.alumno);
    if (this.accion == "Añadir") {
      this.alumnoService.Registrar(this.alumno).subscribe();
    } else {
      this.alumnoService.Modificar(this.alumno).subscribe();
    }
    this.route.navigate(["/alumnos"]);
  }

  ngOnInit() {
    this.alumno.ID = this.activateRoute.snapshot.params["id"];
    if (this.alumno.ID) {
      this.alumnoService.Obtener(this.alumno.ID).subscribe(respuesta => {
        this.alumno = respuesta;
        this.accion = "Editar";
      });
    }
    this.estadoService.listarEC().subscribe(respuesta => {
      this.estados = respuesta;
    });
    this.estadoService.listarS().subscribe(respuesta => {
      this.sexos = respuesta;
    });
  }
}
