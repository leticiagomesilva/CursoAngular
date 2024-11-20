import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Aluno {
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

  getAlunosByReg(matricula: number) {
    return this.http.get(`${this.apiUrl}/${matricula}`);
  }

  addAluno(matricula: number, cpf_aluno: string) {
    const body = { matricula, cpf_aluno };
    return this.http.post(this.apiUrl, body);
  }

  delAluno(matricula: number) {
    return this.http.delete(`${this.apiUrl}/${matricula}`);
  }
  
}
