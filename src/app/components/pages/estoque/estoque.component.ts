import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EstoqueService } from '../../../services/estoque.service';

export interface Estoque {
  id_produto: number;
  quantidade: number;
}

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

  estoques: Estoque[] = [];
  estoqueFiltrado: Estoque[] = [];
  showForm: boolean = false;
  isUpdating: boolean = false;
  id_produto_edit: number = 0;

  id_produto!: number;
  quantidade!: number;

  constructor(private router: Router, private estoqueService: EstoqueService ) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.getTodosEstoques();
    this.estoqueFiltrado = [...this.estoques]
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  resetForm() {
    this.id_produto = 0;
    this.quantidade = 0;
  }

  getTodosEstoques() {
    this.estoqueService.getTodos().subscribe(
      (resposta: any) => {
        this.estoques = resposta;
        this.estoqueFiltrado = [...this.estoques];
        console.log('resposta', resposta);
      });
  }

  buscarEstoquePorId(id_produto: number) {
    if (!id_produto) {
      this.estoqueFiltrado = [...this.estoques];
    } else {
      this.estoqueService.qtdProduto(id_produto).subscribe((produto: any) => {
        this.estoqueFiltrado = [produto];
      });
    }
  }

  adicionarEstoque() {

    console.log('estoque: ', this.id_produto, this.quantidade);

    this.estoqueService.cadastrar(this.id_produto, this.quantidade).subscribe(
      (resposta: any) => {
        console.log(resposta);
        this.estoques.push(resposta)
        this.resetForm();
      });
      window.location.reload();
  }

  atualizarEstoque() {
    console.log('estoque: ', this.id_produto_edit, this.quantidade);

    this.estoqueService.atualizar(this.id_produto_edit, this.quantidade).subscribe(
      (resposta) => {
        console.log(resposta);
        this.getTodosEstoques();
        this.resetForm();
        this.showForm = false;
      });
      window.location.reload();
  }

  toggleFormEdit(id_produto: number){
    this.isUpdating = !this.isUpdating

    const estoque = this.estoques.find(e => e.id_produto === id_produto);

    if(estoque){
      this.id_produto_edit = estoque.id_produto;
      this.quantidade = 0;
    }

  }

  deletarEstoque(id_produto: number) {
    this.estoqueService.excluir(id_produto).subscribe(() => {
      this.estoques = this.estoques.filter((estoque) => estoque.id_produto !== id_produto)
    });
    window.location.reload();
  }

}
