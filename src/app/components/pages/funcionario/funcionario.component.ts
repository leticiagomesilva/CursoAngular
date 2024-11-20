import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  standalone: true,
  imports: [],
  templateUrl: './funcionario.component.html',
  styleUrl: './funcionario.component.css'
})
export class FuncionarioComponent {

  constructor(private router: Router) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

}
