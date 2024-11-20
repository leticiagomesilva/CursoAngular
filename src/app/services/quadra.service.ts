import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Quadra {
  numero_quadra: number;
  modalidade_1: string;
  modalidade_2: string;
  modalidade_3: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuadraService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}/Quadra`; 

  constructor(private http: HttpClient) { }

  addCourt(
    numero_quadra: number,
    modalidade_1: string,
    modalidade_2: string,
    modalidade_3: string
  ) {
    const body = { 
      numero_quadra,
      modalidade_1, 
      modalidade_2,
      modalidade_3
    }
    return this.http.post(this.apiUrl, body);
  }

  updCourt(
    numero_quadra: number,
    modalidade_1: string,
    modalidade_2: string,
    modalidade_3: string
  ) {
    const body = { 
      numero_quadra,
      modalidade_1, 
      modalidade_2,
      modalidade_3
    }
    return this.http.put(`${this.apiUrl}/${numero_quadra}`, body);
  }

  delCourt(numero_quadra: number) {
    return this.http.delete(`${this.apiUrl}/${numero_quadra}`);
  }

  getCourtByNumber(numero_quadra: number) {
    return this.http.get(`${this.apiUrl}/${numero_quadra}`);
  }

  getAllCourts(){
    return this.http.get(this.apiUrl);
  }

  getCourtsByModality(modalidade: string) {
    return this.http.get(`${this.apiUrl}/${modalidade}`);
  }

  getAllModalities() {
    return this.http.get(`${this.apiUrl}`);
  }
}
