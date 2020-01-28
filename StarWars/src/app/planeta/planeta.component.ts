import { Component, OnInit, Input } from "@angular/core";
import { PAjaxService } from "../p-ajax.service";

@Component({
  selector: "app-planeta",
  templateUrl: "./planeta.component.html",
  styleUrls: ["./planeta.component.css"]
})
export class PlanetaComponent implements OnInit {
  @Input() planeta: Object; //VA A SER UN OBJETO CON LOS DATOS DEL PLANETA
  constructor(private servicioAjax: PAjaxService) {}

  cerrar() {
    this.planeta = "";
  }

  ngOnInit() {}
}
