import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pet } from "../../models/pet";
import { PetService } from "src/app/services/pet.service";
import { Router } from "@angular/router";
import { Visit } from "src/app/models/visit";
import { VisitsService } from "src/app/services/visits.service";

@Component({
  selector: "app-pets",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.css"]
})
export class PetsComponent implements OnInit {
  @Input() pet: Pet;
  @Output() deletedPet = new EventEmitter();

  constructor(
    private petService: PetService,
    private visitService: VisitsService,
    private route: Router
  ) {}

  listVisits() {
    this.visitService.getVisitsPet(this.pet.id).subscribe(respuesta => {
      this.pet.visits = respuesta;
    });
  }

  deletePet(pet: Pet) {
    if (pet.visits.length > 0) {
      alert(
        "It is not possible to remove pets with visits. Delete visits before"
      );
      return false;
    }
    if (confirm(" Do you want to delete a " + pet.name + " ?")) {
      this.petService.deletePet(pet.id).subscribe(respuesta => {
        this.deletedPet.emit(respuesta);
      });
    }
  }

  ngOnInit() {}
}
