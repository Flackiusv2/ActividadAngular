import { Component, OnInit } from '@angular/core';
import { Coevaluacion } from './coevaluacion';
import { coevaluacionData } from './coevaluacionData';

@Component({
  selector: 'app-coevaluacion',
  templateUrl: './coevaluacion.component.html',
  styleUrls: ['./coevaluacion.component.css']
})
export class CoevaluacionComponent implements OnInit {

  coevaluaciones: Array<Coevaluacion> = [];
  constructor() { }

  getCoevaluaciones(): Array<Coevaluacion> {
    return coevaluacionData;
  }

  ngOnInit() {
    this.coevaluaciones = this.getCoevaluaciones();
  }

}
