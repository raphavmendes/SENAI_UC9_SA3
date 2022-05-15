import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { NoticiasComponent } from './views/noticias/noticias.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"contato", component: ContatoComponent},
  {path:"jogador", component: JogadorComponent},
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {path:"noticias", component: NoticiasComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
