import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Home } from './components/home/home';





export const routes: Routes = [
  { path: '', 
    component:Login
   },
     { 
    path: 'home', 
    component: Home
  },
 
 { path: '', redirectTo:
   '/login', 
   pathMatch: 'full'
   },
  { path: '**', 
    redirectTo: '/login' 
  
  },
 
  {
    path: 'material',
    loadComponent: () => import('./app').then(m => m.App)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }