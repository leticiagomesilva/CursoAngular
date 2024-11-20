import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campeonatos',
  standalone: true,
  imports: [],
  templateUrl: './campeonatos.component.html',
  styleUrl: './campeonatos.component.css'
})
export class CampeonatosComponent {

  constructor(private router: Router) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

}
