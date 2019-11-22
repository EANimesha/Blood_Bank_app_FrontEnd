import { ProfileComponent } from './userhome/profile/profile.component';
import { ReceivedReqComponent } from './userhome/received-req/received-req.component';
import { RequestsComponent } from './userhome/requests/requests.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // { path: '', component: HomeComponent},
    // { path: 'register', component: RegisterComponent }
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user/:id', component: UserhomeComponent},
    {path: 'user/requests/:id', component: RequestsComponent},
    {path: 'user/requests_received/:id' , component: ReceivedReqComponent},
    {path: 'user/profile/:id' , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
