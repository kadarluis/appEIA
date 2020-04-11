import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  porcentaje: number = 10;

  constructor() { }

  ngOnInit() {
  }

  incrementar( cant: number ) {
    if (this.porcentaje >= 100 && cant === 5) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && cant === -5) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + cant;
  }

}
