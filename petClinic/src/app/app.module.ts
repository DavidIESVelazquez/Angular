import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { OwnersComponent } from "./components/owners/owners.component";
import { VetsComponent } from "./components/vets/vets.component";
import { OwnerDetailsComponent } from "./components/owner-details/owner-details.component";
import { FormOwnerComponent } from "./components/form-owner/form-owner.component";
import { FormPetComponent } from "./components/form-pet/form-pet.component";
import { PetsComponent } from "./components/pets/pets.component";
import { VisitsComponent } from "./components/visits/visits.component";
import { FormVisitComponent } from "./components/form-visit/form-visit.component";

/* PRIMENG */

import { InputTextModule } from "primeng/inputtext";
import { FormVetComponent } from './components/form-vet/form-vet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VetsComponent,
    OwnerDetailsComponent,
    FormOwnerComponent,
    FormPetComponent,
    PetsComponent,
    VisitsComponent,
    FormVisitComponent,
    FormVetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
