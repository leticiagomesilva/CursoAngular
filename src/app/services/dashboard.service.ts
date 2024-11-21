import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface ObjetoStringInt {
  label: string;
  value: number;
}

export interface ObjetoDashBoard {
  quantidadeDeAlunos: number;
  quantidadeDeCompras: number;
  quantidadeDeReservas: number;
  pessoasPorCidadeDashBoard: ObjetoStringInt[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Dashboard`;
  
  constructor(private http: HttpClient) {}

  getDashboardData() {
    return this.http.get(this.apiUrl);
  }

}
