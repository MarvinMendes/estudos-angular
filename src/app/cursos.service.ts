import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from './Curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private url: string = "http://localhost:8080/api/course";

  constructor(private _httpClient: HttpClient) { }

  getCursos() : Observable<Array<Curso>> {
    return this._httpClient.get<Array<Curso>>(this.url);
  }

  getById(id: number) : Observable<Curso> {
    return this._httpClient.get<Curso>(`${this.url}/${id}`);
  }

  replace(curso: Curso) : Observable<Curso> {
    if(curso.id) {
    return this._httpClient.put<Curso>(`${this.url}/${curso.id}`, curso);
    }
  }
}
