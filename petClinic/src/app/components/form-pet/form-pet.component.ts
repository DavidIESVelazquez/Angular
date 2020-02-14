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
    if (this.accion == "Add") {
      this.pet.owner = this.owner;
      this.petService.addPet(this.pet).subscribe(respuesta => {
        if (respuesta["result"]) {
          alert(this.pet.name + " added correctly");
          this.route.navigate(["/owners/" + this.owner.id]);
        } else {
          alert(this.pet.name + " not added");
        }
      });
    } else {
      this.petService.editPet(this.pet).subscribe(respuesta => {
        if (respuesta["result"]) {
          alert(this.pet.name + " edit correctly");
          this.route.navigate(["/owners/" + this.owner.id]);
        } else {
          alert(this.pet.name + " not edit");
        }
      });
    }
  }

  ngOnInit() {
    this.owner.id = this.activatedRoute.snapshot.params["ownerid"];
    this.pet.id = this.activatedRoute.snapshot.params["petid"];
    if (this.owner.id) {
      this.ownerService.getOwnerId(this.owner.id).subscribe(respuesta => {
        this.owner = respuesta;
      });
    }
    if (this.pet.id) {
      this.petService.getPetId(this.pet.id).subscribe(respuesta => {
        this.pet = respuesta;
        this.ownerService.getOwnerId(this.pet.owner.id).subscribe(respuesta => {
          this.owner = respuesta;
        });
      });
      this.accion = "Edit";
    }
    this.petTypeService.getPetTypes().subscribe(respuesta => {
      this.petTypes = respuesta;
    });
  }
}
