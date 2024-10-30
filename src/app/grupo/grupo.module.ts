import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './grupo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[GrupoComponent],
  declarations: [GrupoComponent]
})
export class GrupoModule { }
