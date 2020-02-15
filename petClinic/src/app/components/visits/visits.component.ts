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
  @Input() visit: Visit;
  constructor(private visitService: VisitsService) {}

  delete(visit: Visit) {
    if (confirm("Do you want to delete a visit ?")) {
      this.visitService.deleteVisit(visit.id).subscribe();
    }
  }

  ngOnInit() {
    console.log(this.visit);
  }
}
