import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IndicaService } from '../../../services/indica.service';

export interface Indica {
  cpf_indicador: string;
  cpf_indicado: string;
  desconto_mensalidade: number;
}

@Component({
  selector: 'app-indica',
  standalone: true,
  imports: [],
  templateUrl: './indica.component.html',
  styleUrl: './indica.component.css'
})
export class IndicaComponent {

  indicacoes: Indica[] = [];
  indicacoesFiltradas: Indica[] = [];

  constructor(private router: Router, private indicaService: IndicaService) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.getIndicacoes();
    this.indicacoesFiltradas = [...this.indicacoes];
  }

  getIndicacoes() {
    this.indicaService.getTodos().subscribe((indicacoes: any) => {
      this.indicacoes = indicacoes;
      this.indicacoesFiltradas = [...this.indicacoes];
      console.log('Indicações carregadas:', indicacoes);
    });
  }

}
