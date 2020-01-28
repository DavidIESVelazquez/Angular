import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-g-hobbit",
  templateUrl: "./g-hobbit.component.html",
  styleUrls: ["./g-hobbit.component.css"]
})
export class GHobbitComponent implements OnInit {
  private lista: string[];
  private gHobbit: string;
  private accion: { id: number; nombre: string; indice: number };
  constructor() {
    this.lista = [
      "Bilbo Bolsón",
      "Sam Gamyi",
      "Frodo Bolsón",
      "Pippin Paladin",
      "Merry Brandigamo",
      "Rosita Coto"
    ];
    this.gHobbit = "";
    this.accion = { id: 1, nombre: "Añadir", indice: -1 }; //  1 -> Añadir;  2 -> Modificar
  }
  anadir() {
    if (this.gHobbit.trim().length == 0) {
      this.gHobbit = "";
      return;
    }
    if (this.accion.id == 1) {
      this.lista.push(this.gHobbit);
    } else {
      this.lista[this.accion.indice] = this.gHobbit;
    }
    this.gHobbit = "";
    this.accion = { id: 1, nombre: "Añadir", indice: -1 };
  }
  editar(item: string, indice: number) {
    this.gHobbit = item;
    this.accion = { id: 2, nombre: "Modificar", indice: indice };
  }
  borrar(item: string) {
    if (confirm("¿Desea eliminar a " + item + "?")) {
      this.lista = this.lista.filter(hobbit => hobbit != item);
      //OTRA FORMA DE BORRAR UN ELEMENTO
      // const indice = this.lista.indexOf(item);
      // this.lista.slice(indice,1);
    }
  }
  ngOnInit() {}
} //  class
