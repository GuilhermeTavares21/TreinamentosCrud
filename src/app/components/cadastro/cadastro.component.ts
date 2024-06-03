import { RequestsService } from './../../services/requests.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {



  treinamento: any = {
    Status: '',
    Conteudo: '',
    Entidade: '',
    Responsavel: '',
    DataInicial: '',
    DataFinal: ''
  };

  constructor(private requestsService: RequestsService,
              private router: Router,
              private toastr: ToastrService
  ) { }

  onSubmit(): void {
    this.requestsService.create(this.treinamento).subscribe(response => {
      this.toastr.success('Sucesso!', 'Treinamento cadastrado!', {
        timeOut: 2000,
      });
      this.treinamento = {
        Status: '',
        Conteudo: '',
        Entidade: '',
        Responsavel: '',
        DataInicial: '',
        DataFinal: ''
      };
      this.router.navigate(['/lista']);
    }, error => {
      console.error('Erro:', error);
      this.toastr.error('Erro!', 'Falha ao cadastrar treinamento!', {
        timeOut: 2000,
      });
    });
  }

  ngOnInit(): void {
  }


}
