import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountsModule } from './accounts/account/account.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'account', module:AccountsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
