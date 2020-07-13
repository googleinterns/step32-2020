import { Component, OnInit, Injectable } from '@angular/core';
import { GoogleChartService } from  '../service/google-chart.service';
import { DataPoint } from '../../classes/data-point/data-point';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  ngOnInit(): void {
  }

  private drawChart(dataPoints: DataPoint[]) {
    // let data = this.gLib.visualization.arrayToDataTable([
    //   ['Year', 'Sales', 'Expenses'],
    //   ['2004',  1000,      400],
    //   ['2005',  1170,      460],
    //   ['2006',  660,       1120],
    //   ['2007',  1030,      540]
    // ]);

    // New data should be 'date' 'busy' 'line' 'hygiene' 'mask'
    // TODO: custom colorization

    let data = new this.gLib.visualization.DataTable();

    let chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data);
    console.log("CLIENT: map has been drawn");
  }

}
