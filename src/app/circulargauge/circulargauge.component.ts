import { Component, OnInit, ViewChild } from '@angular/core';
import { CircularGaugeComponent, ILoadedEventArgs } from '@syncfusion/ej2-angular-circulargauge';


@Component({
  selector: 'app-circulargauge',
  templateUrl: './circulargauge.component.html',
  styleUrls: ['./circulargauge.component.css']
})
export class CirculargaugeComponent implements OnInit {
  @ViewChild('range')
    public circulargauge!: CircularGaugeComponent;
    public lineStyle!: object;
    public labelStyle!: object;
    public majorTicks!: object;
    public minorTicks!: object;
    public tail!: object;
    public pointerCap!: object;
    public annotaions!: object;
  constructor() { }
  ngOnInit() {
    this.lineStyle = {
      width: 10, color: 'transparent'
    };
  // Initializing LabelStyle
    this.labelStyle = {
      position: 'Inside', useRangeColor: false,
      font: { size: '12px', fontFamily: 'Roboto', fontStyle: 'Regular' }
    };
    this.majorTicks = {
      height: 10, offset: 5, color: '#9E9E9E'
    };
    this.minorTicks = {
      height: 0
    };
    this.tail = {
      length: '18%', color: '#757575'
    };
    this.pointerCap = {
      radius: 7, color: '#757575'
    };
    this.annotaions = [{
      content: '<div><span style="font-size:14px; color:#9E9E9E; font-family:Regular">Speedometer</span></div>',
      radius: '30%', angle: 0, zIndex: '1'
  }, {
      content: '<div><span style="font-size:24px; color:#424242; font-family:Regular">65 MPH</span></div>',
      radius: '40%', angle: 180, zIndex: '1'
  }];
  }
}
