import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { AlumnosListadoComponent } from "./components/alumnos-listado/alumnos-listado.component";
import { EstadoscivilesComponent } from "./components/estadosciviles/estadosciviles.component";
import { AlumnoFormComponent } from "./components/alumno-form/alumno-form.component";
import { AlumnoDelComponent } from "./components/alumno-del/alumno-del.component";

const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "alumnos",
    component: AlumnosListadoComponent
  },
  {
    path: "estados",
    component: EstadoscivilesComponent
  },
  {
    path: "add",
    component: AlumnoFormComponent
  },
  {
    path: "mod/:id",
    component: AlumnoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
