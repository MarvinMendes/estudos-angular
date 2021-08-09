import { Component, OnInit } from '@angular/core';
import { Curso } from '../Curso';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cursos: Array<Curso>;

  constructor() { }

  ngOnInit(): void {
  }

}
