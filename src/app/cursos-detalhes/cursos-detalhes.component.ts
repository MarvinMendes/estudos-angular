import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Curso } from '../Curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css']
})
export class CursosDetalhesComponent implements OnInit, OnDestroy {


  id: number;
  inscricao: Subscription;
  router: Router;
  course: Curso = new Curso(null, '', '', 0, 0);

  constructor(private _route: ActivatedRoute, private _cursoService: CursosService) {
    
   }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params: any) =>  {
      this.id = params["id"];
    })

    this.findById();

  }

  findById() {
     this.inscricao = this._cursoService.getById(this.id).subscribe({
      next: cursoBuscado => this.course = cursoBuscado,
      error: err => { 
        this.router.navigate(['/naoencontrado']),
        console.log('Erro!!', err) }
    })

    if(this.inscricao) {
      return true;
    }

    return false;

  }

  atualizarCurso() {    
    this.course.id = this.id;
    this._cursoService.replace(this.course).subscribe({
      next: course => { this.course = course },
      error: err => console.log("Deu erro hein!", err)
    });
  }

  ngOnDestroy() : void {
    this.inscricao.unsubscribe;
  }
}
