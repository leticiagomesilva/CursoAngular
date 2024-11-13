import { Component } from '@angular/core';
import { CadastroFormComponent } from "../../cadastro-form/cadastro-form.component";
import { LoginService } from '../../../services/login.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';
import { pessoas } from '../../../../../db';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CadastroFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnText = 'Realizar Cadastro';
  pessoas: Login[] = [];

  constructor(
    private loginService: LoginService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  async createCadastro(cadastro: Login){
    const cadastroData = new FormData();

    cadastroData.append('email', cadastro.email);
    cadastroData.append('password', cadastro.password);

    const novoCadastro = {
      email: cadastro.email,
      password: cadastro.password
    };

    console.log("pessoas: " + pessoas)

    console.log("novo cadastro: " + novoCadastro);

    pessoas.push(novoCadastro);

    console.log("pessoas: " + pessoas)

    console.log('enviando novo cadastro...');

    this.messagesService.add('Cadastro realizado com sucesso!');

    this.router.navigate(['dashboard']);

  }
}

export interface Login{
  email: string;
  password: string;
}