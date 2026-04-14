import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-bienvenida',
  imports: [Card],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})
export class Bienvenida {
  cards = ["Hola", "Holainas", "Holaineras"]; 

}
