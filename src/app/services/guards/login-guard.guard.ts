import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { FormStyle } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( 
    public _usuarioService: UsuarioService,
    public rouete: Router ) {}

  canActivate() {
    
    if ( this._usuarioService.estaLogueado() ) {
      console.log('ESTA LOGUEADO');
      return true;

    } else {
      console.log('NO ESTA LOGUEADO');
      this.rouete.navigate(['/login']);
      return false;
    }

    return true;
  }
}
