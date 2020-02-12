import { Component, OnInit } from "@angular/core";
import { Owner } from "../../models/owner";
import { OwnerService } from "src/app/services/owner.service";
import { PetType } from "../../models/pet-type";
import { PetTypeService } from "../../services/pet-type.service";
import { Pet } from "../../models/pet";
import { PetService } from "src/app/services/pet.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-form-pet",
  templateUrl: "./form-pet.component.html",
  styleUrls: ["./form-pet.component.css"]
})
export class FormPetComponent implements OnInit {
  private petTypes: PetType[];
  private owner: Owner;
  private pet: Pet;
  private accion: string;
  constructor(
    private ownerService: OwnerService,
    private petService: PetService,
    private petTypeService: PetTypeService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.owner = <Owner>{};
    this.pet = <Pet>{};
    this.accion = "Add";
  }

  onSubmit() {
    this.petService.addPet(this.pet).subscribe(respuesta => {
      if (respuesta["result"]) {
        alert(
          this.owner.firstName + " " + this.owner.lastName + " added correctly"
        );
        this.route.navigate(["/owners/" + this.owner.id]);
      } else {
        alert(this.owner.firstName + " " + this.owner.lastName + " not added");
      }
    });
  }

  ngOnInit() {
    this.owner.id = this.activatedRoute.snapshot.params["ownerid"];
    this.ownerService.getOwnerId(this.owner.id).subscribe(respuesta => {
      this.owner = respuesta;
    });
    this.petTypeService.getPetTypes().subscribe(respuesta => {
      this.petTypes = respuesta;
    });
  }
}
