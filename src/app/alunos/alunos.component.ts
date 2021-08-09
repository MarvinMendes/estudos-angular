import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from './Aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: Array<Aluno>;
  router: Router;

  constructor(private _alunoService: AlunoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this._alunoService.getAll().subscribe({
      next: aluno => {
        this.alunos = aluno;
      },
      error: err => console.log("Deu erro!", err)
    });
  }


}


