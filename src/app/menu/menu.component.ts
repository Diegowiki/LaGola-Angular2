import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menus = [
    new Menu('Menú diario',
    'Primeros',
    ['Ensalada de pasta', 'Crema de setas', 'Revuelto de morcilla', 'Gazpacho'],
    'Segundos',
    ['Costillas ibericas', 'Alitas fritas con salsa picante', 'Chanquetes'],
    'Postre, pan y bebida incluidos'),
    new Menu('Menú Especial',
    'Primeros',
    ['Paella de marisco', 'Pimiento relleno de queso y cangrejo', 'Ensalada de pollo y manzana', 'Gazpacho'],
    'Segundos',
    ['Pierna de cordero asada', 'Entrecot con pimiento de padrón', 'Bacalao a la riojana'],
    'Postre, pan y bebida incluidos')
  ];

}
