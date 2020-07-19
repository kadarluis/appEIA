import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
//import { timeStamp } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  
  recuerdame: boolean = true;
  email: string;
  password: '123';
  
  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }


  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    this.password = '123';
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
