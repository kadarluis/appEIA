import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  
  recuerdame: boolean = false;
  
  constructor(
    public _usuarioService: UsuarioService
  ) { }


  ngOnInit() {
  }

  ingresar( forma: NgForm ) {
    if ( !forma.valid ) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login( usuario )
        .subscribe (res => {
          console.log(res);
        });
  };

}
