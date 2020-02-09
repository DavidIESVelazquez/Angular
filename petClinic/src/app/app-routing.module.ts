import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { OwnersComponent } from "./components/owners/owners.component";
import { VetsComponent } from "./components/vets/vets.component";
import { OwnerDetailsComponent } from "./components/owner-details/owner-details.component";
import { FormOwnerComponent } from "./components/form-owner/form-owner.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "owners",
    component: OwnersComponent
  },
  {
    path: "vets",
    component: VetsComponent
  },
  {
    path: "owners/:id",
    component: OwnerDetailsComponent
  },
  {
    path: "addowner/:id",
    component: FormOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
