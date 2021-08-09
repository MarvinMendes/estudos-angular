import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routingt';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosService } from './cursos.service';
import { HttpClientModule } from '@angular/common/http';
import { RotaNaoEncontradaComponent } from './rota-nao-encontrada/rota-nao-encontrada.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunoService } from './alunos/aluno.service';
import { AlunosModule } from './alunos/alunos.module';
import { AlunosFormComponent } from './alunos/alunos-form/alunos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursosDetalhesComponent,
    RotaNaoEncontradaComponent,
    //AlunosComponent,
    //AlunoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    routing,
    AlunosModule,
    HttpClientModule
  ],
  providers: [CursosService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
