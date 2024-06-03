import { RequestsService } from './services/requests.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarComponent } from './components/listar/listar.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalharComponent } from './components/detalhar/detalhar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EditarComponent } from './components/editar/editar.component';
import { DatePipePipe } from './pipes/datePipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    HeaderComponent,
    DetalharComponent,
    CadastroComponent,
    ParticipantesComponent,
    EditarComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule,
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent],
  entryComponents: [ParticipantesComponent]
})
export class AppModule { }
