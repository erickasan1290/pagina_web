import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactosComponent } from "./paginas/contactos/contactos.component";
import { HomeComponent } from "./paginas/home/home.component";
import { MenuComponent } from "./paginas/menu/menu.component";
import { NosotrosComponent } from "./paginas/nosotros/nosotros.component";
import { MenupageComponent } from "./paginas/paginamenu/paginamenu.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'contactos',component:ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
