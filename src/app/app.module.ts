import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './buscarpagina/footer/footer.component';
import { NavbarComponent } from './buscarpagina/navbar/navbar.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { HomeComponent } from './paginas/home/home.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { MenupageComponent } from './paginas/paginamenu/paginamenu.component';



@NgModule({
  declarations: [
   AppComponent,
   NavbarComponent,
   FooterComponent,
   HomeComponent,
   MenuComponent,
   MenupageComponent,
   NosotrosComponent,
   ContactosComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
