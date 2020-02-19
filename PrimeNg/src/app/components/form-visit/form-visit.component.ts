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
  private accion: string;
  constructor(
    private petService: PetService,
    private visitService: VisitsService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.visit = <Visit>{};
    this.pet = <Pet>{};
    this.accion = "Add";
  }

  onSubmit() {
    this.visit.petId = this.pet.id;
    if (this.accion == "Add") {
      this.visitService.addVisit(this.visit).subscribe(respuesta => {
        if (respuesta["result"]) {
          alert("Visit added correctly");
          this.route.navigate(["/owners/" + this.pet.owner.id]);
        } else {
          alert("Visit not added");
        }
      });
    } else {
      this.visitService.editVisit(this.visit).subscribe(respuesta => {
        if (respuesta["result"]) {
          alert("Visit edit correctly");
          this.route.navigate(["/owners/" + this.pet.owner.id]);
        } else {
          alert("Visit not edit");
        }
      });
    }
  }

  volver() {
    this.route.navigate["/owners/" + this.pet.owner.id];
  }

  ngOnInit() {
    this.pet.id = this.activatedRoute.snapshot.params["petid"];
    this.visit.id = this.activatedRoute.snapshot.params["visitid"];

    if (this.pet.id) {
      this.petService.getPetId(this.pet.id).subscribe(respuesta => {
        this.pet = respuesta;
        console.log(this.pet);
      });
    }
    if (this.visit.id) {
      this.visitService.getVisitId(this.visit.id).subscribe(respuesta => {
        this.visit = respuesta;
        this.pet = this.visit["pet"];
        console.log(this.visit);
        console.log(this.pet);
        this.accion = "Edit";
      });
    }
  }
}
