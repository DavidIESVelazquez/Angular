import { Component, OnInit, Input } from "@angular/core";
import { Pet } from "../../models/pet";
import { VisitsService } from "src/app/services/visits.service";
import { Visit } from "src/app/models/visit";

@Component({
  selector: "app-visits",
  templateUrl: "./visits.component.html",
  styleUrls: ["./visits.component.css"]
})
export class VisitsComponent implements OnInit {
  @Input() pet: Pet;
  private visits: Visit[];

  constructor(private visitService: VisitsService) {}

  ngOnInit() {
    this.visitService.getVisitsPet(this.pet.id).subscribe(respuesta => {
      this.visits = respuesta;
    });
  }
}
