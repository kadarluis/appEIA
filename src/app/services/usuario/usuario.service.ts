import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient
  ) { 

    console.log('UsuarioService listo para usar');
  
  }

  login( usuario: Usuario ) {
    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
                .pipe(map((res: any) => {
                  localStorage.setItem('Id', res.id);
                  localStorage.setItem('Token', res.token);
                  localStorage.setItem('Usuario', JSON.stringify(res.usuarioDB));
                  return true;
                }));
  }

  creaUsuario( usuario: Usuario ) {
  let url = URL_SERVICIOS + '/user';
  return this.http.post( url, usuario )
              .pipe(map((res: any ) => {
                  Swal.fire({ title: 'Usuario creado', text: usuario.email, icon: 'success' });
                  return res.usuario;
          }));
  }
}
