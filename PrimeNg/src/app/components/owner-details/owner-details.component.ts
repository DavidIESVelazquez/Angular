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
  private listOwner: Owner;
  constructor(
    private ownerService: OwnerService,
    private route: Router,
    private routerActive: ActivatedRoute
  ) {
    this.owner = <Owner>{};
    this.listOwner = <Owner>{};
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

  listPets() {
    this.ownerService.getOwnerIdPets(this.owner.id).subscribe(respuesta => {
      this.owner = respuesta;
    });
  }

  ngOnInit() {
    this.owner.id = this.routerActive.snapshot.params["id"];
    this.ownerService.getOwnerIdPets(this.owner.id).subscribe(respuesta => {
      this.owner = respuesta;
    });
  }
}
