import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.scss']
})
export class ParticipantesComponent implements OnInit {
  @Input() training: any;
  participantes: any[] = [];
  participante: any = {
    Nome: ''
  }
  totalParticipantes: number = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private requestsService: RequestsService,
    private toastr: ToastrService
  ) {
    // this.participantes = this.training.participantes || [];
  }

  ngOnInit(): void {
    this.loadParticipants();
  }

  loadParticipants(): void {
    this.requestsService.getParticipants(this.training.id).subscribe(data => {
      this.participantes = data;
      this.training.participantes = data;
      this.totalParticipantes = data.length;
    });
  }

  addParticipant(): void {

    this.requestsService.addParticipant(this.training.id, this.participante).subscribe(() => {
      console.log(this.participante.Nome)
      this.participante = '';
      this.loadParticipants();
    });
  }

  deleteParticipante(id: number): void {
    if (confirm('Você tem certeza que quer cancelar este item?')) {
      this.requestsService.deleteParticipant(this.training.id, id).subscribe(response => {
        this.toastr.success('Sucesso!', 'Participante deletado!', {
          timeOut: 2000,
        });
        this.loadParticipants();
      }, error => {
        console.error('Error :', error);
        this.toastr.error('Erro!', 'Falha ao deletar participante!', {
          timeOut: 2000,
        });
      });
    }
  }

}
