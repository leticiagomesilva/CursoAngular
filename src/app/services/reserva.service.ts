import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Alugar {
  numero_quadra: number; 
  pessoa_cpf: string; 
  data: string; 
  horario: string; 
  itens: string; 
  valor: number; 
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Alugar`;

  constructor(private http: HttpClient) {}

  getReservation(numero_quadra: number, pessoa_cpf: string) {
    return this.http.get(`${this.apiUrl}/${numero_quadra}/${pessoa_cpf}`);
  }

  getAllReservations()  {
    return this.http.get(`${this.apiUrl}`);
  }

  getReservationsByCourt(numero_quadra: number) {
    return this.http.get(`${this.apiUrl}/${numero_quadra}`);
  }

  getReservationsByCpf(pessoa_cpf: string){
    return this.http.get(`${this.apiUrl}/${pessoa_cpf}`);
  }

  getReservationsByDate() {
    return this.http.get(`${this.apiUrl}`);
  }

  delReservation(numero_quadra: number, pessoa_cpf: string, data: string, horario: string) {
    return this.http.delete(`${this.apiUrl}/${numero_quadra}/${pessoa_cpf}/${data}/${horario}`);
  }

  addReservation(numero_quadra: number, pessoa_cpf: string, data: string, horario: string, itens: string, valor: number) {
    const body = {
      numero_quadra,
      pessoa_cpf, 
      data, 
      horario, 
      itens, 
      valor
    }
    return this.http.post(`${this.apiUrl}`, body);
  }

  updReservation(numero_quadra: number, pessoa_cpf: string, data: string, horario: string, itens: string, valor: number) {
    const body = {
      numero_quadra,
      pessoa_cpf, 
      data, 
      horario, 
      itens, 
      valor
    }
    return this.http.put(`${this.apiUrl}`, body);
  }
}