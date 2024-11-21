import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs';

export interface Aluno {
  matricula: number;
  cpf_aluno: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Aluno`;

  constructor(private http: HttpClient) { }

  getAlunos() {
    return this.http.get(this.apiUrl);
  }

  getAlunosByReg(cpf: string) {
    return this.http.get(`${this.apiUrl}/${cpf}`);
  }

  // addAluno(cpf_aluno: string) {
  //   const body = {cpf_aluno };
  //   return this.http.post(this.apiUrl, body);
  // }

  cadastrarAlunoComPessoa(
    cpf: string,
    nome: string,
    cidade: string,
    bairro: string,
    rua: string,
    cep: string,
    telefone_1: string,
    telefone_2: string
) {
    const pessoa = {
        cpf,
        nome,
        cidade,
        bairro,
        rua,
        cep,
        telefone_1,
        telefone_2
    };

    return this.http.post(`${this.baseUrl}/Aluno/cadastrar`, pessoa);
}
  
  delAluno(cpf: string) {
    return this.http.delete(`${this.apiUrl}/${cpf}`);
  }
  
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