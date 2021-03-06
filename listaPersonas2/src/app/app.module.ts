import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ListarPersonasComponent } from "./listar-personas/listar-personas.component";
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { ModPersonaComponent } from './mod-persona/mod-persona.component';

@NgModule({
  declarations: [AppComponent, ListarPersonasComponent, AddPersonaComponent, ModPersonaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
