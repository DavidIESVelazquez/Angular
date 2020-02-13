import { Component, OnInit, Input } from "@angular/core";
import { Pet } from "../../models/pet";
import { Owner } from "src/app/models/owner";
import { PetService } from "src/app/services/pet.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pets",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.css"]
})
export class PetsComponent implements OnInit {
  @Input() owner: Owner;
  private pets: Pet[];
  constructor(private petService: PetService, private route: Router) {}

  deletePet(pet: Pet) {
    if (confirm(" Do you want to delete a " + pet.name + " ?")) {
      this.petService.deletePet(pet.id).subscribe();
      this.route.navigate(["/owners/" + this.owner.id]);
    }
  }

  ngOnInit() {
    this.petService.getPetsOwnerId(this.owner.id).subscribe(respuesta => {
      this.pets = respuesta;
    });
  }
}
