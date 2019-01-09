import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirculargaugeComponent } from './circulargauge/circulargauge.component';
import {CircularGaugeModule, AnnotationsService} from '@syncfusion/ej2-angular-circulargauge';
@NgModule({
  declarations: [
    AppComponent,
    CirculargaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CircularGaugeModule
  ],
  providers: [CircularGaugeModule, AnnotationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
