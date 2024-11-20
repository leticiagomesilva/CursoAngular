import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Estoque {
  id_produto: number;
  quantidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Estoque`;

  constructor(private http: HttpClient) {}

  
  getTodos() {
    return this.http.get(`${this.apiUrl}`);
  }

  cadastrar(id_produto: number, quantidade: number) {
    const body = {
      id_produto, quantidade
    }
    return this.http.post(this.apiUrl, body);
  }
  
  excluir(id_produto: number) {
    return this.http.delete(`${this.apiUrl}/${id_produto}`);
  }

  atualizar(id_produto: number, quantidade: number) {
    const body = {
      id_produto, quantidade
    }
    return this.http.put(`${this.apiUrl}/${id_produto}`, body);
  }

  qtdProduto(id_produto: number){
    return this.http.get(`${this.apiUrl}/${id_produto}`);
  }
}
