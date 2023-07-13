import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';


   
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarChartComponent,
    HighChartComponent,
    ColumnChartComponent,
    PieChartComponent,
    LineChartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
