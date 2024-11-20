import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Pessoa {
  cpf: string;
  nome: string;
  cidade: string;
  bairro: string;
  rua: string;
  cep: string;
  telefone_1: string;
  telefone_2: string;
}

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  
  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Pessoa`;

  constructor(private http: HttpClient) {}

  addPessoa(
    cpf: string,
    nome: string,
    cidade: string,
    bairro: string,
    rua: string,
    cep: string,
    telefone_1: string,
    telefone_2: string
  ) {

    const body = {
      cpf,
      nome,
      cidade,
      bairro,
      rua,
      cep,
      telefone_1,
      telefone_2
    };
    return this.http.post(this.apiUrl, body);
  }

  delPessoa(cpf: string) {
    return this.http.delete(`${this.apiUrl}/${cpf}`);
  }

  updatePessoa(cpf: string,
    nome: string,
    cidade: string,
    bairro: string,
    rua: string,
    cep: string,
    telefone_1: string,
    telefone_2: string) {
    const body = {
      cpf,
      nome,
      cidade,
      bairro,
      rua,
      cep,
      telefone_1,
      telefone_2
    };
    return this.http.put(`${this.apiUrl}/${cpf}`, body);
  }

  getByCpf(cpf: string){
    return this.http.get(`${this.apiUrl}/${cpf}`);
  }

  getPessoas(){
    return this.http.get(`${this.apiUrl}`);
  }

  getPessoasByAlphabeticalOrder() {
    return this.http.get(`${this.apiUrl}`);
  }
}
