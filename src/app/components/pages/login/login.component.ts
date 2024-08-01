import { Component } from '@angular/core';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { LoginFormComponent } from '../../login-form/login-form.component';
import { Router } from '@angular/router';
import { MessagesService } from '../../../services/messages.service';
import { LoginService } from '../../../services/login.service';
import { Login } from '../../../Login';
import { AcessType, pessoas } from '../../../../../db';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MomentFormComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  btnText = 'Entrar';
  pessoas: Login[] = [];

  constructor(
    private loginService: LoginService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  async createLogin(login: Login) {
    const loginData = new FormData();

    loginData.append('email', login.email);
    loginData.append('password', login.password);

    console.log('enviando  login...');

    const pessoa = pessoas.find(pessoa => {
      pessoa.email == login.email;
      pessoa.password == login.password;
      if(pessoa.email == login.email && pessoa.password == login.password){
          return true;
        }
        return false;
    });

    if(!pessoa){
      this.messagesService.add('Login Inválido!');
      this.router.navigate(['/']);
      AcessType.allAcess = "null";
      return
    }

    AcessType.allAcess = pessoa.acesso;

    this.messagesService.add('Login realizado com sucesso!');

    this.router.navigate(['/home']);

  }
}
