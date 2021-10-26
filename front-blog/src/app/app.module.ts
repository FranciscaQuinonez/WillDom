import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ListaPostComponent } from './paginas/lista-post/lista-post.component';
import { AgregarPostLocalComponent } from './paginas/agregar-post-local/agregar-post-local.component';
import { CommonService } from './servicios/transversales/common.service';
import { AgregarPostRemotoComponent } from './paginas/agregar-post-remoto/agregar-post-remoto.component';



@NgModule({
  declarations: [
  	RootComponent,   
    PrincipalComponent,
    ListaPostComponent,
    AgregarPostLocalComponent,
    AgregarPostRemotoComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
