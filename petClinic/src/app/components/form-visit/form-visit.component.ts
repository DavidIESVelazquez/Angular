import { Component, OnInit } from "@angular/core";
import { Pet } from "src/app/models/pet";
import { Visit } from "src/app/models/visit";
import { Router, ActivatedRoute } from "@angular/router";
import { PetService } from "../../services/pet.service";
import { VisitsService } from "../../services/visits.service";

@Component({
  selector: "app-form-visit",
  templateUrl: "./form-visit.component.html",
  styleUrls: ["./form-visit.component.css"]
})
export class FormVisitComponent implements OnInit {
  private pet: Pet;
  private visit: Visit;

  constructor(
    private petService: PetService,
    private visitService: VisitsService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.visit = <Visit>{};
    this.pet = <Pet>{};
  }

  onSubmit() {
    this.visit.pet_id = this.pet.id;
    console.log(this.visit);
    this.visitService.addVisit(this.visit).subscribe(respuesta => {
      if (respuesta["result"]) {
        alert("Visit added correctly");
        this.route.navigate(["/owners/" + this.pet.owner.id]);
      } else {
        alert("Visit not added");
      }
    });
  }

  ngOnInit() {
    this.pet.id = this.activatedRoute.snapshot.params["petid"];
    this.petService.getPetId(this.pet.id).subscribe(respuesta => {
      this.pet = respuesta;
    });
  }
}
