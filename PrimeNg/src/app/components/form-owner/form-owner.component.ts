import { Component, OnInit } from "@angular/core";
import { Owner } from "src/app/models/owner";
import { OwnerService } from "src/app/services/owner.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-form-owner",
  templateUrl: "./form-owner.component.html",
  styleUrls: ["./form-owner.component.css"]
})
export class FormOwnerComponent implements OnInit {
  private owner: Owner;
  private accion;
  constructor(
    private ownerService: OwnerService,
    private route: Router,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.accion = { id: -1, text: "Add" };
    this.owner = <Owner>{
      id: -1,
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      telephone: ""
    };
  }

  onSubmit() {
    if (this.accion.id == -1) {
      this.ownerService.addOwner(this.owner).subscribe(respuesta => {
        if (respuesta["result"]) {
          alert(
            this.owner.firstName +
              " " +
              this.owner.lastName +
              " added correctly"
          );
          this.route.navigate(["/owners"]);
        } else {
          alert(
            this.owner.firstName + " " + this.owner.lastName + " not added"
          );
        }
      });
    } else {
      this.ownerService.editOwner(this.owner).subscribe(respuesta => {
        if (respuesta["result"]) {
          alert(
            this.owner.firstName +
              " " +
              this.owner.lastName +
              " edited correctly"
          );
          this.route.navigate(["/owners"]);
        } else {
          alert(
            this.owner.firstName + " " + this.owner.lastName + " not edited"
          );
        }
      });
    }
  }

  ngOnInit() {
    this.accion.id = this.ActivatedRoute.snapshot.params["id"];
    this.ownerService.getOwnerId(this.accion.id).subscribe(respuesta => {
      console.log(respuesta);
      this.owner = respuesta;
      if (this.accion.id != -1) {
        this.accion.text = "Edit";
      }
    });
  }
}
