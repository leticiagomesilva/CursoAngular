import { MomentComponent } from './components/pages/moment/moment.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { NgOptimizedImage } from '@angular/common';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ServicosComponent } from './components/pages/servicos/servicos.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent,
    FooterComponent, HomeComponent, AboutComponent, RouterLink,
    NewMomentComponent, NgOptimizedImage, MomentFormComponent,
    HttpClientModule, ReactiveFormsModule, FormsModule, MessagesComponent,
    FontAwesomeModule, MomentComponent, EditMomentComponent, MatIconModule, 
    MatButtonModule, ServicosComponent, ContatoComponent, CadastroComponent,
    DashboardComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient, HttpClientModule],
})
export class AppComponent {
  title = 'moments';
}
