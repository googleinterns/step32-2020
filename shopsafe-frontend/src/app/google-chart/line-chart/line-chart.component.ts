import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from  '../service/google-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private gLib: any;

  constructor(
    private gChartService: GoogleChartService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});

    // // Callback method triggered to contain the code to create the line chart
    // this.gLib.charts.setOnLoadCallBack(this.drawChart.bind(this));
  }

  ngOnInit(): void {
  }

  private drawChart() {
    let data = this.gLib.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    let chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data);
    console.log("CLIENT: map has been drawn");
  }

}
