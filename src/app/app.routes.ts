import { MomentComponent } from './components/pages/moment/moment.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { LoginComponent } from './components/pages/login/login.component';
import { authGuardsGuard } from './guards/auth-guards.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [authGuardsGuard], data: { acesso: 'ADMIN, USER'} },
  { path: '', component: LoginComponent},
  { path: 'about', component: AboutComponent, canActivate: [authGuardsGuard], data: { acesso: 'USER'}  },
  { path: 'moments/new', component: NewMomentComponent, canActivate: [authGuardsGuard], data: { acesso: 'USER'}  },
  { path: 'moments/:id', component: MomentComponent },
  { path: 'moments/edit/:id', component: EditMomentComponent },
];
