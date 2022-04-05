import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public graph = {
    data: [
        // { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1000, 2000, 3000], y: [2000, 5000, 3000], type: 'bar', marker: {color: 'green'} },
    ],
    layout: {width: 520, height: 440, title: 'Prueba de Plotly con Angular/Ionic'}
};

}
