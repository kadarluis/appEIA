import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient
  ) { 

    console.log('UsuarioService listo para usar');
  
  }

  creaUsuario(usuario: Usuario){

  let url = URL_SERVICIOS + '/user';
  
  return this.http.post( url, usuario )
              .pipe(
                map((res: any ) => {
                  Swal.fire({ title: 'Usuario creado', text: usuario.email, icon: 'success' });
                  return res.usuario;
          }));
  };
}
