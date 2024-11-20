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
import { AlunoComponent } from './components/pages/aluno/aluno.component';
import { PessoaComponent } from './components/pages/pessoa/pessoa.component';
import { ReservaComponent } from './components/pages/reserva/reserva.component';
import { TurmaComponent } from './components/pages/turma/turma.component';
import { QuadraComponent } from './components/pages/quadra/quadra.component';
import { ProdutoComponent } from './components/pages/produto/produto.component';
import { CampeonatosComponent } from './components/pages/campeonatos/campeonatos.component';
import { ShowComponent } from './components/pages/show/show.component';
import { FuncionarioComponent } from './components/pages/funcionario/funcionario.component';
import { FormAdicionarComponent } from './components/pages/form-adicionar/form-adicionar.component';
import { EstoqueComponent } from './components/pages/estoque/estoque.component';
import { ComprasComponent } from './components/pages/compras/compras.component';
import { IndicaComponent } from './components/pages/indica/indica.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent,
    FooterComponent, HomeComponent, AboutComponent, RouterLink,
    NewMomentComponent, NgOptimizedImage, MomentFormComponent,
    HttpClientModule, ReactiveFormsModule, FormsModule, MessagesComponent,
    FontAwesomeModule, MomentComponent, EditMomentComponent, MatIconModule, 
    MatButtonModule, ServicosComponent, ContatoComponent, CadastroComponent,
    DashboardComponent, AlunoComponent, PessoaComponent, ReservaComponent,
    TurmaComponent, QuadraComponent, ProdutoComponent, CampeonatosComponent, 
    ShowComponent, FuncionarioComponent, FormAdicionarComponent, EstoqueComponent, 
    ComprasComponent, IndicaComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient, HttpClientModule],
})
export class AppComponent {
  title = 'moments';
}
