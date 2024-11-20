import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  showForm: boolean = false;
  id_produto!: number;
  nome!: string;
  tipo!: string;
  preco!: number;
  isUpdating: boolean = false;
  id_produto_edit: number = 0;

  constructor(private router: Router, private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
    this.produtosFiltrados = [...this.produtos]; 
  }

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  resetForm() {
    this.id_produto = 0;
    this.nome = '';
    this.tipo = '';
    this.preco = 0;
  }

  getProdutos() {
    this.produtoService.getAllProducts().subscribe((resposta: any) => {
      this.produtos = resposta;
      this.produtosFiltrados = [...this.produtos];
      console.log('resposta', resposta);
    });
  }

  buscarProdutoPorId(id_produto: number) {
    if (!id_produto) { 
      this.produtosFiltrados = [...this.produtos];
    } else {
      this.produtosFiltrados = this.produtos.filter(
        (produto) => produto.id_produto === id_produto
      );
    }
  }

  adicionarProduto() {
    console.log('produto: ', this.id_produto, this.nome, this.tipo, this.preco);

    this.produtoService.addProduct(this.id_produto, this.nome, this.tipo, this.preco)
    .subscribe((produtoAdicionado: any) => {
      console.log(produtoAdicionado);
      this.produtos.push(produtoAdicionado);  
      this.resetForm();
    });
    // window.location.reload();
  }

  editarProduto() {
    console.log('produto: ', this.id_produto_edit, this.nome, this.tipo, this.preco);

    this.produtoService.updateProduct(this.id_produto_edit, this.nome, this.tipo, this.preco).subscribe(() => {
      this.getProdutos(); 
      this.resetForm();
    });
    // window.location.reload();
  }

  toggleFormEdit(id_produto: number) {
    this.isUpdating = !this.isUpdating;

    const produto = this.produtos.find(p => p.id_produto === id_produto);

    if (produto) {
      this.id_produto_edit = produto.id_produto; 
      this.nome = '';
      this.tipo = '';
      this.preco = 0;
    }
  }

  deletarProduto(id_produto: number) {
    console.log(`deletar produto ${id_produto}`);
    this.produtoService.delProduct(id_produto).subscribe(() => {
      this.produtos = this.produtos.filter(produto => produto.id_produto !== id_produto);
    });
    window.location.reload();
  }

}

interface Produto {
  id_produto: number;
  nome: string;
  tipo: string;
  preco: number;
}