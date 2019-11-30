import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterialModule } from './materials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RequestsComponent } from './userhome/requests/requests.component';
import { ReceivedReqComponent } from './userhome/received-req/received-req.component';
import { ProfileComponent } from './userhome/profile/profile.component';
import { DonarsComponent } from './userhome/donars/donars.component';
import { ParticlesDirective } from './particles.directive'
import { FilterPipeModule } from 'ngx-filter-pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserhomeComponent,
    RequestsComponent,
    ReceivedReqComponent,
    ProfileComponent,
    DonarsComponent,
    ParticlesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
