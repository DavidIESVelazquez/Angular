import { Component, OnInit } from '@angular/core';
import { Vet } from 'src/app/models/vet';
import { VetService } from 'src/app/services/vet.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  private vets: Array<Vet>;
  constructor(private vetService: VetService) { }

  ngOnInit() {
    this.vetService.getVets().subscribe(
      respuesta => { 
        this.vets = respuesta;
      });
  }

}
