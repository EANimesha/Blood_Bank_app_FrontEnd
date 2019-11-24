import { DonarsComponent } from './userhome/donars/donars.component';
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
    {path: 'user/:id', component: UserhomeComponent,
      children: [
        {path: 'requests', component: RequestsComponent},
        {path: 'requests_received' , component: ReceivedReqComponent},
        {path: 'profile' , component: ProfileComponent},
        {path:'donars', component: DonarsComponent},
        {path: '', redirectTo:'donars', pathMatch: 'full'}
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
