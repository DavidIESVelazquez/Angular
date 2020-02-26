import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Alumno } from "src/app/models/alumno";
import { AlumnoService } from "src/app/services/alumno.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-alumno-del",
  templateUrl: "./alumno-del.component.html",
  styleUrls: ["./alumno-del.component.css"]
})
export class AlumnoDelComponent implements OnInit {
  @Input() alumno: Alumno;
  @Output() deleted = new EventEmitter();
  constructor(private http: HttpClient, private alumnoService: AlumnoService) {}

  Borrar() {
    this.alumnoService.Borrar(this.alumno.ID).subscribe(respuesta => {
      this.deleted.emit(respuesta);
    });
  }
  NoBorrar() {
    this.deleted.emit();
  }
  ngOnInit() {}
}
