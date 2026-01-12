import { Routes } from '@angular/router';
import { SignIn } from './components/signIn/SignIn';
import { SignUp } from './components/signUp/signUp';
import { Home } from './components/home/home';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'signin', component: SignIn },
  { path: 'signup', component: SignUp },
  { path: '', component: Home },

  { path: '**', redirectTo: 'signin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
