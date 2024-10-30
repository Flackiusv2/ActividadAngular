import { Component, OnInit } from '@angular/core';
import { Grupo } from './grupo';
import { grupoData } from './grupoData';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupos : Array<Grupo> = [];
  constructor() { }

  getGrupos(): Array<Grupo> {
    return grupoData;
  }
  ngOnInit() {
     this.grupos = this.getGrupos();
  }

}
