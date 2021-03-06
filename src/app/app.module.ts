import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* ROUTES */
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.routes';

/* MODULE */
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* COMPONENT */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

/* SERVICIOS */
import { UsuarioService } from './services/usuario/usuario.service';
import { LoginGuardGuard } from './services/guards/login-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService, LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
