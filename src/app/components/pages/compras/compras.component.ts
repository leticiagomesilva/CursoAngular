import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ComprasService } from '../../../services/compras.service';

export interface Compra {
  id_compra: number;
  cpf_comprador: string;
  id_produto: number;
  data: string; 
}

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {

  compras: Compra[] = [];
  comprasFiltradas: Compra[] = [];
  showForm: boolean = false;
  isUpdating: boolean = false;
  id_compra_edit: number = 0;

  id_compra!: number;
  cpf_comprador!: string;
  id_produto!: number;
  data!: string; 

  constructor(private router: Router, private compraService: ComprasService) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }
  
  ngOnInit(): void {
    this.getTodasCompras();
    this.comprasFiltradas = [...this.compras];
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  resetForm() {
    this.cpf_comprador = '';
    this.id_produto = 0;
    this.data = '';
  }

  getTodasCompras() {
    this.compraService.getTodos().subscribe(
      (resposta: any) => {
        this.compras = resposta;
        this.comprasFiltradas = [...this.compras];
        console.log('Compras carregadas:', resposta);
      }
    );
  }

  buscarComprasPorCpf(cpf: string) {
    if (!cpf) {
      this.comprasFiltradas = [...this.compras];
    } else {
      this.compraService.porPessoa(cpf).subscribe(
        (compras: any) => {
          console.log('compra filtrada: ', compras);
          this.comprasFiltradas = compras;
        });
    }
  }

  adicionarCompra() {
    console.log('compra: ', this.id_compra, this.cpf_comprador, this.id_produto, this.data)

    this.compraService.cadastrar(this.id_compra, this.cpf_comprador, this.id_produto, this.data).subscribe(
      (resposta: any) => {
        console.log('Compra adicionada:', resposta);
        this.compras.push(resposta);
        this.resetForm();
      });
    window.location.reload();
  }

  deletarCompra(id_compra: number) {
    this.compraService.excluir(id_compra).subscribe(() => {
      this.compras = this.compras.filter((compra) => compra.id_compra !== id_compra);
    });
    window.location.reload();
  }
}
