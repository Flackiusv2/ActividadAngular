import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteModule } from './estudiante/estudiante.module';
import { GrupoModule } from './grupo/grupo.module';
import { CoevaluacionModule } from './coevaluacion/coevaluacion.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstudianteModule,
    GrupoModule,
    CoevaluacionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
