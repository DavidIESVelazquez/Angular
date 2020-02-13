import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OwnerService } from "src/app/services/owner.service";
import { Owner } from "src/app/models/owner";

@Component({
  selector: "app-owner-details",
  templateUrl: "./owner-details.component.html",
  styleUrls: ["./owner-details.component.css"]
})
export class OwnerDetailsComponent implements OnInit {
  private owner: Owner;
  constructor(
    private ownerService: OwnerService,
    private route: Router,
    private routerActive: ActivatedRoute
  ) {
    this.owner = <Owner>{};
  }

  delete(owner: Owner) {
    if (
      confirm(
        " Do you want to delete a " +
          owner.firstName +
          " " +
          owner.lastName +
          " ?"
      )
    ) {
      this.ownerService.deleteOwner(owner.id).subscribe();
      this.route.navigate(["/owners"]);
    }
  }

  ngOnInit() {
    this.owner.id = this.routerActive.snapshot.params["id"];
    this.ownerService.getOwnerId(this.owner.id).subscribe(respuesta => {
      this.owner = respuesta;
    });
  }
}
