import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {path: "lista", component: ListarComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "participantes", component: ParticipantesComponent},
  {path: "editar/:id", component: EditarComponent},
  {path: '', redirectTo: "lista", pathMatch: "full"},
  {path: '**', redirectTo: "lista", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
