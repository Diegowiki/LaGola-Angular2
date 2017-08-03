import { Component, OnInit } from '@angular/core';
import { Carta } from './carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
})
export class CartaComponent implements OnInit {
  public Cartas: Carta[];
  public Carta: Carta;
  public seccion: {header: string, body: string[]};

  ngOnInit() {
    this.Carta.title = 'Carta';
    this.seccion.header = 'asdsad';
    this.seccion.body = ['sdasd', 'asdasd'];
    this.Carta.secciones.push(this.seccion);
    this.Cartas.push(this.Carta);
  }

}
