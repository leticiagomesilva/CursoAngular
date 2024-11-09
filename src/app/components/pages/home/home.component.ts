import { Moment } from './../../../Moment';
import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, MatIconModule, MatButtonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}
  
  redirectSobre(pagina: string){
    const url = pagina;
    this.router.navigate([url]);
  }

  

}
