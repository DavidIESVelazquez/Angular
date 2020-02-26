import { Component, OnInit } from "@angular/core";
import { Estadocivil } from "src/app/models/estadocivil";
import { EstadocivilService } from "src/app/services/estadocivil.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-estadosciviles",
  templateUrl: "./estadosciviles.component.html",
  styleUrls: ["./estadosciviles.component.css"]
})
export class EstadoscivilesComponent implements OnInit {
  private estados: Array<Estadocivil>;

  constructor(
    private estadosService: EstadocivilService,
    private route: Router
  ) {}

  ngOnInit() {
    this.estadosService.listarEC().subscribe(respuesta => {
      this.estados = respuesta;
      console.log(this.estados);
    });
  }
}
