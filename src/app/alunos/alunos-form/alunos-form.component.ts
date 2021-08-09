import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../Aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  constructor(private _service: AlunoService, private _activateRoute: ActivatedRoute, private _route: Router) { }

  inscricao: Subscription;
  id: number;
  aluno: Aluno = new Aluno(null,'', 0, '', '', '');

  ngOnInit(): void {
    this._service.getAll();
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

  atualizarAluno() {
    return this._service.replace(this.id, this.aluno).subscribe({
      next: student => {
        this.aluno = student;
        this._route.navigate(['/alunos']);
      },
      error: err => console.log('Deu erro!', err)
    })
  }
  
  

}
