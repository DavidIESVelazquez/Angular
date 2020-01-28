import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListarPersonasComponent } from "./listar-personas/listar-personas.component";
import { FormPersonasComponent } from "./form-personas/form-personas.component";
const routes: Routes = [
  {
    path: "",
    component: ListarPersonasComponent
  },
  {
    path: "personas-add/:id",
    component: FormPersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
