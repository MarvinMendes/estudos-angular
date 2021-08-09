import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Aluno } from "./Aluno";

@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    private url: string = "http://localhost:8080/api/students";

    constructor(private _httpClient: HttpClient) { }

    getAll() : Observable<Array<Aluno>> {
       return this._httpClient.get<Array<Aluno>>(this.url);
    }

    getById(id: number) : Observable<Aluno> {
        return this._httpClient.get<Aluno>(`${this.url}/${id}`);
    }

    save(aluno: Aluno) : Observable<Aluno> {
        return this._httpClient.post<Aluno>(this.url, aluno);
    }

    replace(id: number, aluno: Aluno) : Observable<Aluno> {
        return this._httpClient.put<Aluno>(`${this.url}/${aluno.id}`, aluno);
    }
}
