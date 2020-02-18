import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { OwnersComponent } from "./components/owners/owners.component";
import { VetsComponent } from "./components/vets/vets.component";
import { OwnerDetailsComponent } from "./components/owner-details/owner-details.component";
import { FormOwnerComponent } from "./components/form-owner/form-owner.component";
import { FormPetComponent } from "./components/form-pet/form-pet.component";
import { FormVisitComponent } from "./components/form-visit/form-visit.component";

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
  },
  {
    path: "addpet/:ownerid",
    component: FormPetComponent
  },
  {
    path: "editpet/:petid",
    component: FormPetComponent
  },
  {
    path: "addvisit/:petid",
    component: FormVisitComponent
  },
  {
    path: "editvisit/:visitid",
    component: FormVisitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
