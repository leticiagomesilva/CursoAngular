import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  constructor(private router: Router) {}

  routerLinkFunciona(pag: string) {
    const url = pag;
    this.router.navigate([url]);
  }

}
