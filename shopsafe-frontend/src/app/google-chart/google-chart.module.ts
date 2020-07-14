import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CovidChartComponent } from './covid-chart/covid-chart.component';
import { GeochartComponent } from './geochart/geochart.component';


@NgModule({
  declarations: [LineChartComponent, CovidChartComponent, GeochartComponent],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [LineChartComponent, CovidChartComponent],
  providers: [],
})
export class GoogleChartModule { }
