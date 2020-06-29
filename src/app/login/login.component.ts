import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  
  recuerdame: boolean = true;
  email: string;
  
  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }


  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
  }

  ingresar( forma: NgForm ) {
    if ( !forma.valid ) {
      return;
    }

    let usuario = new Usuario(null, null, forma.value.email, forma.value.password, null, null);

    this._usuarioService.login( usuario, forma.value.recuerdame )
        .subscribe (res => {
          this.router.navigate(['/dashboard']);
        });
  }

}
