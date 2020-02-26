import { Component, OnInit } from "@angular/core";
import { Vet } from "src/app/models/vet";
import { Specialty } from "src/app/models/specialty";
import { VetService } from "src/app/services/vet.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-form-vet",
  templateUrl: "./form-vet.component.html",
  styleUrls: ["./form-vet.component.css"]
})
export class FormVetComponent implements OnInit {
  private vet: Vet;
  private accion: string;
  private selSpecialties: Specialty[];
  private specialties: Specialty[];

  constructor(
    private vetService: VetService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.vet = <Vet>{};
    this.accion = "Add";
  }

  onSubmit() {
    console.log(this.vet);
  }

  ngOnInit() {
    this.vetService.getEspecialties().subscribe(respuesta => {
      this.specialties = respuesta;
    });
  }
}
