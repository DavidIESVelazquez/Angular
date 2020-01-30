import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListarPersonasComponent } from "./listar-personas/listar-personas.component";
import { AddPersonaComponent } from "./add-persona/add-persona.component";
import { ModPersonaComponent } from "./mod-persona/mod-persona.component";

const routes: Routes = [
  {
    path: "",
    component: ListarPersonasComponent
  },
  {
    path: "personas-add/:id",
    component: AddPersonaComponent
  },
  {
    path: "personas-mod/:id",
    component: ModPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
