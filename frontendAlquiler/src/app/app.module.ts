import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavbComponent } from './plantilla/menu-navb/menu-navb.component';
import { FooterComponent } from './plantilla/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavbComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 