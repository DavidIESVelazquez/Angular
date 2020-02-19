import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VisitsService } from "src/app/services/visits.service";
import { Visit } from "src/app/models/visit";

@Component({
  selector: "app-visits",
  templateUrl: "./visits.component.html",
  styleUrls: ["./visits.component.css"]
})
export class VisitsComponent implements OnInit {
  @Input() visits: Visit[];
  @Output() deleted = new EventEmitter();
  constructor(private visitService: VisitsService) {}

  delete(visit: Visit) {
    if (confirm("Do you want to delete a visit ?")) {
      this.visitService.deleteVisit(visit.id).subscribe(respuesta => {
        this.deleted.emit(respuesta);
      });
    }
  }

  ngOnInit() {}
}
