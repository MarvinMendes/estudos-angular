import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoService } from "./aluno.service";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
import { AlunosComponent } from "./alunos.component";
import { AlunosRoutingModule } from "./alunos.routing.module";

@NgModule({
    imports: [CommonModule,
              FormsModule,
              AlunosRoutingModule],
    exports: [],
    declarations: [AlunosComponent,
                   AlunoDetalheComponent,
                   AlunosFormComponent],
    providers: [AlunoService]
})
export class AlunosModule {

}