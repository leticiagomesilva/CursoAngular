import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js/auto';
import { DashboardService } from '../../../services/dashboard.service';

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

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dashboardData: ObjetoDashBoard | any;

  constructor(private router: Router, private dashboardService: DashboardService) {
    Chart.register(...registerables);
  }

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.dashboardData = data;
      console.log(data);
      this.renderCharts();
    });
  }

  renderCharts() {
    if (this.dashboardData) {
      // Gráfico de Barras (Pessoas por Cidade)
      new Chart('cidadeBarChart', {
        type: 'bar',
        data: {
          labels: this.dashboardData.pessoasPorCidadeDashBoard.map((c: any) => c.strinG),
          datasets: [{
            label: 'Quantidade de Pessoas',
            data: this.dashboardData.pessoasPorCidadeDashBoard.map((c: any) => c.inT),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Cidades'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Quantidade de Pessoas'
              },
              beginAtZero: true
            }
          }
        }
      });

      // Gráfico de Pizza (Reservas Hoje, Compras Hoje, Total de Alunos)
      new Chart('summaryPieChart', {
        type: 'pie',
        data: {
          labels: ['Reservas Hoje', 'Compras Hoje', 'Total de Alunos'],
          datasets: [{
            data: [
              this.dashboardData.quantidadeDeReservas,
              this.dashboardData.quantidadeDeCompras,
              this.dashboardData.quantidadeDeAlunos
            ],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            }
          }
        }
      });
    }
  }

}
