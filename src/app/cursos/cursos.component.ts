import { Component, OnInit } from '@angular/core';
import { Curso } from '../Curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Array<Curso> = new Array();
  
  constructor(private _cursosService: CursosService) { }

  ngOnInit(): void {
    this.getAll();    
  }

  getAll() {
    return this._cursosService.getCursos().subscribe({
      next: curso => {
        this.cursos = curso;
      },
      error: err => console.log('Error', err)
    })
  }

}
