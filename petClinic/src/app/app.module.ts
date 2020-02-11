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
import { FormPetComponent } from './components/form-pet/form-pet.component';
import { PetsComponent } from './components/pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VetsComponent,
    OwnerDetailsComponent,
    FormOwnerComponent,
    FormPetComponent,
    PetsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
