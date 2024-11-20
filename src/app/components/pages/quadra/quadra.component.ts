import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuadraService } from '../../../services/quadra.service';

@Component({
  selector: 'app-quadra',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quadra.component.html',
  styleUrls: ['./quadra.component.css']
})
export class QuadraComponent {

  quadras: Quadra[] = [];
  quadrasFiltradas: Quadra[] = [];
  modalidades: string[] = [];
  showForm: boolean = false;
  numero_quadra!: number;
  modalidade_1!: string;
  modalidade_2!: string;
  modalidade_3!: string;
  selectedModalidade: string = '';
  isUpdating: boolean = false;

  constructor(private router: Router, private quadraService: QuadraService) {}

  ngOnInit(): void {
    this.getQuadras();
    this.quadrasFiltradas = [...this.quadras]; 
    this.getAllModalities();
  }

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  resetForm() {
    this.numero_quadra = 0;
    this.modalidade_1 = '';
    this.modalidade_2 = '';
    this.modalidade_3 = '';
  }

  getQuadras() {
    this.quadraService.getAllCourts().subscribe((resposta: any) => {
      this.quadras = resposta;
      this.quadrasFiltradas = [...this.quadras];
      console.log('Quadras carregadas:', resposta);
    });
  }

  buscarQuadraPorNumero(numero_quadra: number) {
    if (!numero_quadra) { 
      this.quadrasFiltradas = [...this.quadras];
    } else {
      this.quadrasFiltradas = this.quadras.filter(
        (quadra) => quadra.numero_quadra === numero_quadra
      );
    }
  }

  filtrarPorModalidade() {
    if (this.selectedModalidade) {
      this.quadraService.getCourtsByModality(this.selectedModalidade).subscribe((resposta: any) => {
        this.quadrasFiltradas = resposta;
      });
    } else {
      this.quadrasFiltradas = [...this.quadras];
    }
  }

  getAllModalities() {
    this.quadraService.getAllModalities().subscribe((modalidades: any) => {
      this.modalidades = modalidades;
      console.log('Modalidades carregadas:', modalidades);
    });
  }

  adicionarQuadra() {
    console.log('quadra: ', this.numero_quadra, this.modalidade_1, this.modalidade_2, this.modalidade_3);

    this.quadraService.addCourt(this.numero_quadra, this.modalidade_1, this.modalidade_2, this.modalidade_3)
    .subscribe((quadraAdicionada: any) => {
      console.log(quadraAdicionada);
      this.quadras.push(quadraAdicionada);  
      this.resetForm();  
    });
    // window.location.reload();
  }

  editarQuadra(numero_quadra: number, modalidade_1: string, modalidade_2: string, modalidade_3: string) {

    this.isUpdating = !this.isUpdating;

    const quadra = this.quadras.find(p => p.numero_quadra === numero_quadra);

    if (quadra) {
      this.numero_quadra = 0;
      this.modalidade_1 = '';
      this.modalidade_2 = '';
      this.modalidade_3 = '';
    }
  }

  atualizarQuadra(){
    console.log('quadra editada: ', this.numero_quadra, this.modalidade_1, this.modalidade_2, this.modalidade_3);
    this.quadraService.updCourt(this.numero_quadra, this.modalidade_1, this.modalidade_2, this.modalidade_3).subscribe(() => {
      this.getQuadras();
      this.resetForm();
    });
    //   window.location.reload();
  }



  deletarQuadra(numero_quadra: number) {
    console.log(`Deletar quadra ${numero_quadra}`);
    this.quadraService.delCourt(numero_quadra).subscribe(() => {
      this.quadras = this.quadras.filter(quadra => quadra.numero_quadra !== numero_quadra);
    });
    window.location.reload();
  }

}

interface Quadra {
  numero_quadra: number;
  modalidade_1: string;
  modalidade_2: string;
  modalidade_3: string;
}
