import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../Aluno';

import { AlunoService } from '../aluno.service'


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  id: number;
  inscricao: Subscription ;

  constructor(private _service: AlunoService, private _activateRoute: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.inscricao = this._activateRoute.params.subscribe((params: any) => {
      this.id = params['id'];
      this.findById();
    } )
  }


  findById() {
    return this._service.getById(this.id).subscribe({
      next: student => this.aluno = student,
      error: err => console.log('Deu erro!', err)
    })
  }

  editarAluno() {
    console.log('passoou')
    return this._route.navigate([`/alunos/${this.id}/editar`])
  }


  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
