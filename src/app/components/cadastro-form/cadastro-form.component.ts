import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Login } from '../../Login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './cadastro-form.component.html',
  styleUrl: './cadastro-form.component.css'
})
export class CadastroFormComponent {
  @Input() btnText!: string;
  @Output() onSubmitCadastro = new EventEmitter<Login>();
  @Input() loginData: Login | null = null;

  cadastroForm!: FormGroup;

  constructor(private router: Router,) {}

  ngOnInit(): void{
    this.cadastroForm = new FormGroup({
      email: new FormControl(this.loginData ? this.loginData.email : '', [Validators.required, Validators.email]),
      password: new FormControl(this.loginData ? this.loginData.password : '', [Validators.required]),
    });
  }

  get email(){
    return this.cadastroForm.get('email')!;
  }

  get password(){
    return this.cadastroForm.get('password')!;
  }

  submitCadastro(){
    if(this.cadastroForm.invalid){
      console.log("não enviou")
      return;
    }
    console.log("deu bom");
    console.log(this.cadastroForm.value);

    this.onSubmitCadastro.emit(this.cadastroForm.value);
  }

}
