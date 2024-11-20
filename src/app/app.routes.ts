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
  { path: 'dashboard/alunos', component: AlunoComponent },
  { path: 'dashboard/pessoas', component: PessoaComponent },
  { path: 'dashboard/reservas', component: ReservaComponent },
  { path: 'dashboard/turmas', component: TurmaComponent },
  { path: 'dashboard/quadras', component: QuadraComponent },
  { path: 'dashboard/produtos', component: ProdutoComponent },
  { path: 'dashboard/campeonatos', component: CampeonatosComponent },
  { path: 'dashboard/show', component: ShowComponent },
  { path: 'dashboard/funcionarios', component: FuncionarioComponent },
  { path: 'adicionar', component: FormAdicionarComponent },
];
