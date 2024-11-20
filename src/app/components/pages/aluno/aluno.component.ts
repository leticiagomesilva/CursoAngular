import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunosService } from '../../../services/alunos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  alunos: Aluno[] = [];
  alunosFiltrados: Aluno[] = [];
  showForm: boolean = false;
  matricula!: number;
  cpf_aluno!: string;

  constructor(private router: Router, private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.getAlunos();
    this.alunosFiltrados = [...this.alunos]; 
  }

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  resetForm() {
    // this.matricula = null;
    this.cpf_aluno = '';
  }

  getAlunos() {
    this.alunosService.getAlunos().subscribe((resposta: any) => {
      this.alunos = resposta;
      this.alunosFiltrados = [...this.alunos]; 
      console.log('resposta', resposta);
    });
  }

  buscarAlunoPorMatricula(matricula: number) {
    if (!matricula) { 
      this.alunosFiltrados = [...this.alunos];
    } else {
      this.alunosFiltrados = this.alunos.filter(
        (aluno) => aluno.matricula === matricula
      );
    }
  }

  adicionarAluno() {
    console.log('aluno: ', this.matricula, this.cpf_aluno);
    this.alunosService.addAluno(this.matricula, this.cpf_aluno).subscribe((alunoAdicionado: any) => {
      console.log(alunoAdicionado);
      this.alunos.push(alunoAdicionado);
      this.resetForm(); 
    });
    window.location.reload();
  }

  deletarAluno(matricula: number) {
    console.log(`deletar aluno ${matricula}`);
    this.alunosService.delAluno(matricula).subscribe(() => {
      this.alunos = this.alunos.filter(aluno => aluno.matricula !== matricula); 
    });
    window.location.reload();
  }
}

interface Aluno {
  matricula: number;
  cpf_aluno: string;
}