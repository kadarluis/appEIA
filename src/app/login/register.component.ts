import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  // Declaro el formulario
  forma: FormGroup;

  constructor() { }

  // funcion para verificar si las contraseñas son iguales
  sonIguales(campo1: string, campo2: string){
    return (group: FormGroup) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {

    // defino el formulario
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales( 'password', 'password2') } );

    this.forma.setValue({
          nombre: 'Luis Gaviria',
          correo: 'kadarluis@hotmail.com',
          password: '12344',
          password2: '123',
          condiciones: true
      });
  }

registrarUsuario() {
  if (this.forma.invalid) {
    return;
  }
  console.log('forma valida: ', this.forma.valid);
  console.log(this.forma.value);
  }
}
