import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  Usuario =  JSON.parse(localStorage.getItem('Usuario'));

  constructor(
    public usuarioService: UsuarioService
  ) { }

  logout() {
    this.usuarioService.logout();
  }

  ngOnInit() {
  }

}
