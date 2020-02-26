import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlumnosListadoComponent } from "./components/alumnos-listado/alumnos-listado.component";
import { EstadoscivilesComponent } from "./components/estadosciviles/estadosciviles.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { AlumnoDelComponent } from "./components/alumno-del/alumno-del.component";
import { AlumnoFormComponent } from "./components/alumno-form/alumno-form.component";

@NgModule({
  declarations: [
    AppComponent,
    AlumnosListadoComponent,
    EstadoscivilesComponent,
    InicioComponent,
    AlumnoDelComponent,
    AlumnoFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
