import { Router } from '@angular/router';
import { RequestsService } from './../../services/requests.service';
import { Component, OnInit,} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParticipantesComponent } from '../participantes/participantes.component';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  dados: any[] = []


  constructor(private requestsService: RequestsService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal
              ) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  convertDateToDisplayFormat(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }


  carregarDados(): void {
    this.requestsService.getAll().subscribe(data => {
      this.dados = data;
      this.dados.forEach(training => {
        if (!training.participantes) {
          training.participantes = [];
        }
      });
    });
  }


  deleteTraining(id: number): void {
    if (confirm('Você tem certeza que quer cancelar este item?')) {
      this.requestsService.delete(id).subscribe(response => {
        this.toastr.success('Sucesso!', 'Treinamento deletado!', {
          timeOut: 2000,
        });
        this.carregarDados();
      }, error => {
        console.error('Error :', error);
        this.toastr.error('Erro!', 'Falha ao deletar treinamento!', {
          timeOut: 2000,
        });
      });
    }
  }

  editTraining(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  mostrarParticipantes(training: any): void {
    const modalRef = this.modalService.open(ParticipantesComponent);
    modalRef.componentInstance.training = training;
  }

}
