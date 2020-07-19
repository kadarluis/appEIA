import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})

export class HeaderComponent {

  Usuario = JSON.parse( localStorage.getItem('Usuario') );

  constructor(
    public usuarioService: UsuarioService
    ) { }

  logout() {
    this.usuarioService.logout();
  }

}
