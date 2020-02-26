import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Alumno } from "src/app/models/alumno";

@Injectable({
  providedIn: "root"
})
export class AlumnoService {
  private url = "http://localhost/ajax/Examen2/Servicios/servicios.php";
  constructor(private http: HttpClient) {}

  listado() {
    let pa = JSON.stringify({
      accion: 3
    });
    return this.http.post<Alumno[]>(this.url, pa);
  }

  Registrar(alumno: Alumno) {
    let pa = JSON.stringify({
      accion: 0,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL
    });
    return this.http.post<Alumno[]>(this.url, pa);
  }

  Modificar(alumno: Alumno) {
    let pa = JSON.stringify({
      accion: 1,
      ID: alumno.ID,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL
    });
    return this.http.post<Alumno[]>(this.url, pa);
  }

  Obtener(id: number) {
    let pa = JSON.stringify({
      accion: 4,
      ID: id
    });
    return this.http.post<Alumno>(this.url, pa);
  }

  Borrar(id: number) {
    let pa = JSON.stringify({
      accion: 2,
      ID: id
    });
    return this.http.post<Alumno[]>(this.url, pa);
  }
}
