import { Component, OnInit, Input } from "@angular/core";
import { Pet } from "../../models/pet";
import { Owner } from "src/app/models/owner";
import { PetService } from "src/app/services/pet.service";

@Component({
  selector: "app-pets",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.css"]
})
export class PetsComponent implements OnInit {
  @Input() owner: Owner;
  private pets: Pet[];
  constructor(private petService: PetService) {}

  ngOnInit() {
    this.petService.getPetsOwnerId(this.owner.id).subscribe(respuesta => {
      this.pets = respuesta;
    });
  }
}
