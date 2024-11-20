import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../../services/pessoa.service';
import { FormsModule } from '@angular/forms';

interface Pessoa {
  cpf: string;
  nome: string;
  cidade: string;
  bairro: string;
  rua: string;
  cep: string;
  telefone_1: string;
  telefone_2: string;
}

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})
export class PessoaComponent {

  pessoas: Pessoa[] = [];
  pessoasFiltradas: Pessoa[] = [];
  showForm: boolean = false;
  isUpdating: boolean = false;
  cpf!: string;
  cpf_edit: string = '';
  nome!: string;
  cidade!: string;
  bairro!: string;
  rua!: string;
  cep!: string;
  telefone_1!: string;
  telefone_2!: string;

  constructor(private router: Router, private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.getPessoas();
    this.pessoasFiltradas = [...this.pessoas];
  }

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  toggleFormEdit(cpf: string) {
    this.isUpdating = !this.isUpdating;

    const pessoa = this.pessoas.find(p => p.cpf === cpf);

    if (pessoa) {
      this.cpf_edit = pessoa.cpf; 
      this.nome = '';
      this.cidade = '';
      this.bairro = '';
      this.rua = '';
      this.cep = '';
      this.telefone_1 = '';
      this.telefone_2 = '';
    }
  }

  resetForm() {
    this.cpf = '';
    this.nome = '';
    this.cidade = '';
    this.bairro = '';
    this.rua = '';
    this.cep = '';
    this.telefone_1 = '';
    this.telefone_2 = '';
  }

  getPessoas() {
    this.pessoaService.getPessoas().subscribe((resposta: any) => {
      this.pessoas = resposta;
      this.pessoasFiltradas = [...this.pessoas];
      console.log('resposta', resposta);
    });
  }

  buscarPessoaPorCpf(cpf: string) {
    if (!cpf) {
      this.pessoasFiltradas = [...this.pessoas];
    } else {
      this.pessoaService.getByCpf(cpf).subscribe((pessoa: any) => {
        this.pessoasFiltradas = [pessoa];
      });
    }
  }

  adicionarPessoa() {
    console.log('pessoa: ', this.cpf, this.nome, this.cidade, this.bairro, this.rua, this.cep, this.telefone_1, this.telefone_2);
  
    this.pessoaService.addPessoa(this.cpf, this.nome, this.cidade, this.bairro, this.rua, this.cep, this.telefone_1, this.telefone_2)
    .subscribe(
      (pessoaAdicionada: any) => {
        console.log(pessoaAdicionada);
        this.pessoas.push(pessoaAdicionada);  
        this.resetForm();  
      });
    window.location.reload();
  }

  atualizarPessoa() {
    console.log('pessoa atualizada: ', this.cpf_edit, this.nome, this.cidade, this.bairro, this.rua, this.cep, this.telefone_1, this.telefone_2);
    this.pessoaService.updatePessoa(this.cpf_edit, this.nome, this.cidade, this.bairro, this.rua, this.cep, this.telefone_1, this.telefone_2).subscribe(() => {
      this.getPessoas();
      this.resetForm();
    });
    window.location.reload();
  }

  deletarPessoa(cpf: string) {
    console.log(`deletar pessoa ${cpf}`);
    this.pessoaService.delPessoa(cpf).subscribe(() => {
      this.pessoas = this.pessoas.filter((pessoa) => pessoa.cpf !== cpf);
    });
    window.location.reload();
  }

  getPessoasByAlphabeticalOrder() {
    this.pessoaService.getPessoasByAlphabeticalOrder().subscribe((resposta: any) => {
      this.pessoas = resposta;
      this.pessoasFiltradas = [...this.pessoas];
      console.log('Pessoas em ordem alfabética:', resposta);
    });
  }
  
}
