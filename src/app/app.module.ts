import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './shared/header.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { NotAuthGuard } from './shared/notauth.guard';
import { HomeComponent } from './home.component';
import { AlertsService } from './shared/alerts/alerts.service';
import { AlertsComponent } from './shared/alerts/alerts.component';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }),
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotAuthGuard,
    AlertsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
