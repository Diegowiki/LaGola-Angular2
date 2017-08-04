import { Component } from '@angular/core';
import { Carta, Seccion } from './carta';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
})
export class CartaComponent {
  public modalOptions: Materialize.ModalOptions = {
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .3, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '50%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  };
  seccion: Seccion;
  secciones: Seccion[];
  carta: Carta;
  constructor() {
    this.seccion = new Seccion('Entrantes', ['chipirones', 'almejas', 'almejas', 'almejas', 'almejas', 'almejas', 'almejas']);
    this.carta = new Carta('Carta Verano', [this.seccion, this.seccion, this.seccion, this.seccion, this.seccion, this.seccion]);
  }
}
