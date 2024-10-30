import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { estudiantesData } from './estudiantesData';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiantes: Array<Estudiante> = [];
  constructor() { }

  getEstudiantes(): Array<Estudiante> {
    return estudiantesData;
  }

  ngOnInit() {
    this.estudiantes = this.getEstudiantes();
  }

}
