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
  cpf!: string;
  nome!: string;
  cidade!: string;
  bairro!: string;
  rua!: string;
  cep!: string;
  telefone_1!: string;
  telefone_2!: string;
  
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
    this.cpf = '';
    this.nome = '';
    this.cidade = '';
    this.bairro = '';
    this.rua = '';
    this.cep = '';
    this.telefone_1 = '';
    this.telefone_2 = '';
  }

  getAlunos() {
    this.alunosService.getAlunos().subscribe((resposta: any) => {
      this.alunos = resposta;
      this.alunosFiltrados = [...this.alunos]; 
      console.log('resposta', resposta);
    });
  }

  buscarAlunoPorCpf(cpf: string) {
    console.log(cpf);
    if (!cpf) { 
      this.alunosFiltrados = [...this.alunos];
    } else {
      this.alunosService.getAlunosByReg(cpf).subscribe((aluno: any) => {
        this.alunosFiltrados = [aluno]
      });
    }
  }

  adicionarAluno() {
    console.log('aluno: ', this.cpf, this.nome, this.cidade, this.bairro, this.rua, this.cep, this.telefone_1, this.telefone_2);
    this.alunosService.cadastrarAlunoComPessoa(this.cpf, this.nome, this.cidade, this.bairro, this.rua, this.cep, this.telefone_1, this.telefone_2).subscribe((alunoAdicionado: any) => {
      console.log(alunoAdicionado);
      this.alunos.push(alunoAdicionado);
      this.resetForm(); 
    });
  }

  deletarAluno(cpf: string) {
    console.log(`deletar aluno ${cpf}`);
    this.alunosService.delAluno(cpf).subscribe(() => {
      this.alunos = this.alunos.filter(aluno => aluno.cpf_aluno !== cpf); 
    });
    window.location.reload();
  }
}

export interface Aluno {
  matricula: number;
  cpf_aluno: string;
}

export interface Pessoa {
  cpf: string;
  nome: string;
  cidade: string;
  bairro: string;
  rua: string;
  cep: string;
  telefone_1: string;
  telefone_2: string;
}