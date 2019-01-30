import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchingpageComponent } from './searchingpage/searchingpage.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatToolbarRow } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisrationPageComponent } from './regisration-page/regisration-page.component';


const appRoutes: Routes = [
  { path: 'search', component: SearchingpageComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisrationPageComponent },
  { path: '', redirectTo: 'mainpage', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchingpageComponent,
    MainpageComponent,
    LoginpageComponent,
    RegisrationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forRoot (
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
