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
  constructor(private OwnerService: OwnerService) {}

  ngOnInit() {
    this.OwnerService.getOwners().subscribe(
      datos => {
        console.log(datos);
        this.owners = datos;
      }
    );
  }
}
