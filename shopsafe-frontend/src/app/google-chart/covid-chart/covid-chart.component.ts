import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartService } from  '../service/google-chart.service';
import { DataPoint } from '../../classes/data-point/data-point';

@Component({
  selector: 'app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit {

  private gLib: any;
  @Input() covidData: DataPoint[];

  constructor(
    private gChartService: GoogleChartService
  ) 
  {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  ngOnInit(): void {}

  ngOnChanges() {
    // Updates chart with new parent input values
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  // TODO: custom colorization with options
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
