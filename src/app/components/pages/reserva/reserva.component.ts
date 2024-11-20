import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../../services/reserva.service';

interface Alugar {
  numero_quadra: number;
  pessoa_cpf: string;
  data: string;
  horario: string;
  itens: string;
  valor: number;
}

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent {
  reservas: Alugar[] = [];
  reservasFiltradas: Alugar[] = [];
  showForm: boolean = false;
  numero_quadra!: number;
  pessoa_cpf!: string;
  data!: string;
  horario!: string;
  itens!: string;
  valor!: number;

  constructor(private router: Router, private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.getReservas();
    this.reservasFiltradas = [...this.reservas]; 
  }

  routerLinkFunciona(pag: string) {
    this.router.navigate([pag]);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  resetForm() {
    this.numero_quadra = 0;
    this.pessoa_cpf = '';
    this.data = '';
    this.horario = '';
    this.itens = '';
    this.valor = 0;
  }

  getReservas() {
    this.reservaService.getAllReservations().subscribe((resposta: any) => {
      this.reservas = resposta;
      this.reservasFiltradas = [...this.reservas];
      console.log('Reservas:', resposta);
    });
  }

  buscarReservaPorNumero(numero_quadra: number) {
    console.log(numero_quadra);
    if (!numero_quadra) {
      this.reservasFiltradas = [...this.reservas];
    } else {
      this.reservaService.getReservationsByCourt(numero_quadra).subscribe((quadra: any) => {
        console.log(quadra);
        this.reservasFiltradas = [quadra];
      });
    }
  }

  buscarReservaPorCpf(cpf: string) {
    if (!cpf) {
      this.reservasFiltradas = [...this.reservas];
    } else {
      this.reservaService.getReservationsByCpf(cpf).subscribe((quadra: any) => {
        console.log(quadra);
        this.reservasFiltradas = [quadra];
      });
    }
  }

  adicionarReserva() {
    console.log('Reserva:', this.numero_quadra, this.pessoa_cpf, this.data, this.horario, this.itens, this.valor);
    this.reservaService.addReservation(this.numero_quadra, this.pessoa_cpf, this.data, this.horario, this.itens, this.valor).subscribe((reservaAdicionada: any) => {
      console.log('Reserva adicionada:', reservaAdicionada);
      this.reservas.push(reservaAdicionada);
      this.resetForm();
    });
    window.location.reload();
  }

  deletarReserva(numero_quadra: number, pessoa_cpf: string, data: string, horario: string) {
    console.log(`Deletar reserva: ${numero_quadra}, ${pessoa_cpf}, ${data}, ${horario}`);
    this.reservaService
      .delReservation(numero_quadra, pessoa_cpf, data, horario)
      .subscribe(() => {
        this.reservas = this.reservas.filter(
          (reserva) =>
            !(
              reserva.numero_quadra === numero_quadra &&
              reserva.pessoa_cpf === pessoa_cpf &&
              reserva.data === data &&
              reserva.horario === horario
            )
        );
      });
    window.location.reload();
  }

}
