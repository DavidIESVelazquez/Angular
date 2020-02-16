import { Component, OnInit, Input } from "@angular/core";
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
  constructor(
    private petService: PetService,
    private visitService: VisitsService,
    private route: Router
  ) {}

  deletePet(pet: Pet) {
    if (pet.visits.length > 0) {
      alert(
        "It is not possible to remove pets with visits. Delete visits before"
      );
      return false;
    }
    if (confirm(" Do you want to delete a " + pet.name + " ?")) {
      this.petService.deletePet(pet.id).subscribe();
    }
  }

  // delete(visit: Visit) {
  //   if (confirm("Do you want to delete a visit ?")) {
  //     this.visitService.deleteVisit(visit.id).subscribe();
  //     this.route.navigate["/owners/" + this.pet["ownerId"]];
  //   }
  // }

  ngOnInit() {}
}
