import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface Produto {
  id_produto: number;
  nome: string;
  tipo: string;
  preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/produtos`;

  constructor(private http: HttpClient) { }

  getProductById(id_produto: number) {
    return this.http.get(`${this.apiUrl}/${id_produto}`);
  }

  getAllProducts() {
    return this.http.get(this.apiUrl);
  }

  addProduct(
    id_produto: number,
    nome: string,
    tipo: string,
    preco: number
  ) {
    const body = {
      id_produto,
      nome,
      tipo,
      preco
    };
    return this.http.post(this.apiUrl, body);
  }

  delProduct(id_produto: number) {
    return this.http.delete(`${this.apiUrl}/${id_produto}`);
  }

  updateProduct(
    id_produto: number,
    nome: string,
    tipo: string,
    preco: number
  ) {
    const body = {
      id_produto,
      nome,
      tipo,
      preco
    };
    return this.http.put(`${this.apiUrl}/${id_produto}`, body);
  }

}