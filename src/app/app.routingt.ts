import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosComponent } from "./alunos/alunos.component";
import { CursosDetalhesComponent } from "./cursos-detalhes/cursos-detalhes.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RotaNaoEncontradaComponent } from "./rota-nao-encontrada/rota-nao-encontrada.component";


const APP_ROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'cursos', component: CursosComponent },
    { path:'cursos/:id', component: CursosDetalhesComponent },
    { path: '**', component: RotaNaoEncontradaComponent },
    { path: 'naoencontrado', component: RotaNaoEncontradaComponent }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTE)