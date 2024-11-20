import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Compra {
  id_compra: number;
  cpf_comprador: string;
  id_produto: number;
  data: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Compra`;

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(this.apiUrl);
  }

  cadastrar(id_compra: number, cpf_comprador: string, id_produto: number, data: string) {
    const body = {
      id_compra, cpf_comprador, id_produto, data
    }
    return this.http.post(this.apiUrl, body);
  }

  porPessoa(cpf_comprador: string) {
    return this.http.get(`${this.apiUrl}/${cpf_comprador}`);
  }

  excluir(id_compra: number) {
    return this.http.delete(`${this.apiUrl}/${id_compra}`);
  }
}
