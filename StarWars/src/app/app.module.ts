import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PersonajeComponent } from "./personaje/personaje.component";
import { PlanetaComponent } from './planeta/planeta.component';

@NgModule({
  declarations: [AppComponent, PersonajeComponent, PlanetaComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
