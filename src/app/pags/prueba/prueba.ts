import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prueba.html',
  styleUrls: ['./prueba.css']
})
export class Prueba {

  variableUno: number = 3;
  variableDos: number = 5;

  mensaje: string = 'Mi primera página';

  get suma(): number {
    return this.variableUno + this.variableDos;
  }

}