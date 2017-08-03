import { Component } from '@angular/core';
import { Carta } from './carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
})
export class CartaComponent {
  menus = [
    new Carta('Menú diario',
    'Primeros',
    ['Ensalada de pasta', 'Crema de setas', 'Revuelto de morcilla', 'Gazpacho'],
    'Segundos',
    ['Costillas ibericas', 'Alitas fritas con salsa picante', 'Chanquetes'],
    'Postre, pan y bebida incluidos'),
    new Carta('Menú Especial',
    'Primeros',
    ['Paella de marisco', 'Pimiento relleno de queso y cangrejo', 'Ensalada de pollo y manzana', 'Gazpacho'],
    'Segundos',
    ['Pierna de cordero asada', 'Entrecot con pimiento de padrón', 'Bacalao a la riojana'],
    'Postre, pan y bebida incluidos')
  ];

}
