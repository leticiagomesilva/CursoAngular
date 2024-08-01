import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Login } from '../../Login';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Input() btnText!: string;
  @Output() onSubmitLogin = new EventEmitter<Login>();
  @Input() loginData: Login | null = null;

  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void{
    this.loginForm = new FormGroup({
      email: new FormControl(this.loginData ? this.loginData.email : '', [Validators.required, Validators.email]),
      password: new FormControl(this.loginData ? this.loginData.password : '', [Validators.required]),
    });
  }

  get email(){
    return this.loginForm.get('email')!;
  }

  get password(){
    return this.loginForm.get('password')!;
  }

  submitLogin(){
    if(this.loginForm.invalid){
      console.log("não enviou")
      return;
    }
    console.log("deu bom");
    console.log(this.loginForm.value);

    this.onSubmitLogin.emit(this.loginForm.value);
  }
}
