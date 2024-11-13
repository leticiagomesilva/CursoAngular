import { MomentComponent } from './components/pages/moment/moment.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { ServicosComponent } from './components/pages/servicos/servicos.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moments/new', component: NewMomentComponent },
  { path: 'moments/:id', component: MomentComponent },
  { path: 'moments/edit/:id', component: EditMomentComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard', component: DashboardComponent },
];
