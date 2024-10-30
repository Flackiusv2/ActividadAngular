import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteComponent } from './estudiante.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[EstudianteComponent],
  declarations: [EstudianteComponent]
})
export class EstudianteModule { }
