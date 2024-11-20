import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from '../../../services/turma.service';
import { FormsModule } from '@angular/forms';

export interface AulaAlunoTurmaProfessor {
  aluno_cpf: string;
  id_turma: number;
  professor_cpf: string;
}

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent {

  aulas: AulaAlunoTurmaProfessor[] = [];
  aulasFiltradas: AulaAlunoTurmaProfessor[] = [];
  showForm: boolean = false;
  isUpdating: boolean = false;

  aluno_cpf!: string;
  id_turma!: number;
  professor_cpf!: string;

  constructor(private router: Router, private turmaService: TurmaService) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.getTodasAulas();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  resetForm(): void {
    this.aluno_cpf = '';
    this.id_turma = 0;
    this.professor_cpf = '';
  }

  getTodasAulas(): void {
    this.turmaService.getTodos().subscribe((resposta: any) => {
      this.aulas = resposta;
      this.aulasFiltradas = [...this.aulas];
      console.log('Todas as aulas:', this.aulas);
    });
  }
  
  adicionarAula(){
    console.log('aula: ', this.aluno_cpf, this.id_turma, this.professor_cpf);

    this.turmaService.cadastrar(this.aluno_cpf, this.id_turma, this.professor_cpf).subscribe(
      (turma: any) => {
        console.log(turma);
        this.aulas.push(turma);
        this.resetForm();
      });
      window.location.reload();
  }

}