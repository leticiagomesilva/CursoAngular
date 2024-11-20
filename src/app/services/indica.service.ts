import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Indica {
  cpf_indicador: string;
  cpf_indicado: string;
  desconto_mensalidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class IndicaService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Indica`;

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(this.apiUrl);
  }

}
