import { Component, OnInit } from "@angular/core";
import { Owner } from "../../models/owner";
import { OwnerService } from "../../services/owner.service";

@Component({
  selector: "app-owners",
  templateUrl: "./owners.component.html",
  styleUrls: ["./owners.component.css"]
})
export class OwnersComponent implements OnInit {
  public owners: Array<Owner>;
  constructor(private ownerService: OwnerService) {}

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
      this.ownerService.deleteOwner(owner.id).subscribe(respuesta => {
        this.owners = respuesta;
      });
    }
  }

  ngOnInit() {
    this.ownerService.getOwners().subscribe(respuesta => {
      console.log(respuesta);
      this.owners = respuesta;
    });
  }
}
