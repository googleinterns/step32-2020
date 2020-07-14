import { Component, OnInit, Injectable } from '@angular/core';
import { GoogleChartService } from  '../service/google-chart.service';
import { DataPoint } from '../../classes/data-point/data-point';
import { StoreComponent } from '../../components/store/store.component';

@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {

  private gLib: any;
  covidData: DataPoint[];

  constructor(
    private gChartService: GoogleChartService,
    private storeComponent: StoreComponent
  ) 
  {
    this.covidData = this.storeComponent.covidData;
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  ngOnInit(): void {
  }

  // TODO: custom colorization with options
  // FIXME: hide timestamp
  private drawChart() {

    let data = new this.gLib.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Cases');

    console.log(this.covidData);

    for (let i in this.covidData) {
      data.addRow([new Date(this.covidData[i].date), this.covidData[i].value]);
    }

    const options = {
      height: 600,
      hAxis: { textPosition: 'none' }
    }

    let chart = new this.gLib.visualization.LineChart(document.getElementById('covid-chart'));

    chart.draw(data, options);
    console.log("CLIENT: covid map has been drawn");
  }

}
