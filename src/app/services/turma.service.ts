import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface AulaAlunoTurmaProfessor {
  aluno_cpf: string;
  id_turma: number;
  professor_cpf: string;
}

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/aula_Aluno_Turma_Professor`;

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.apiUrl);
  }

  cadastrar(aluno_cpf: string, id_turma: number, professor_cpf: string){
    const body = {
      aluno_cpf,
      id_turma,
      professor_cpf
    }
    return this.http.post(this.apiUrl, body);
  }

}
