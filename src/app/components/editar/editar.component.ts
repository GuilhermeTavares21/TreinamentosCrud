import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {



  treinamento: any = {
    Status: '',
    Conteudo: '',
    Entidade: '',
    Responsavel: '',
    DataInicial: '',
    DataFinal: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RequestsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getById(id).subscribe(data => {
      this.treinamento = data;
      if (this.treinamento.DataInicial) {
        this.treinamento.DataInicial = this.convertDateToDisplayFormat(this.treinamento.DataInicial);
      }
      if (this.treinamento.DataFinal) {
        this.treinamento.DataFinal = this.convertDateToDisplayFormat(this.treinamento.DataFinal);
      }

    });
  }

  convertDateToDisplayFormat(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }



  onSubmit(): void {
    this.service.update(this.treinamento.id, this.treinamento).subscribe(() => {
      this.toastr.success('Sucesso!', 'Treinamento editado!', {
        timeOut: 2000,
      });
      this.router.navigate(['/lista']);
    }, error => {
      console.error('Error:', error);
      this.toastr.error('Erro!', 'Falha ao editar treinamento!', {
        timeOut: 2000,
      });
    });
  }



}
