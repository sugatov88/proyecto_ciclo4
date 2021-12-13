import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MenuNavbComponent } from './plantilla/menu-navb/menu-navb.component';
import { FooterComponent } from './plantilla/footer/footer.component';
=======
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PieDePaginaComponent } from './plantilla/pie-de-pagina/pie-de-pagina.component';
>>>>>>> 51f6af63034833028cc8cf0793901e36ba095af2

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuNavbComponent,
    FooterComponent
=======
    BarraNavegacionComponent,
    PieDePaginaComponent
>>>>>>> 51f6af63034833028cc8cf0793901e36ba095af2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 