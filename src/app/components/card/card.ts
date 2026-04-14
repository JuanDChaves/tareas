import { Component, InputSignal, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  titulo: InputSignal<string> = input("titulo");
  subtitulo: InputSignal<string> = input("subtitulo");
  imagen: InputSignal<string> = input("imagen");
  link: InputSignal<string> = input("link");
  textoLink: InputSignal<string> = input("textoLink");
}
