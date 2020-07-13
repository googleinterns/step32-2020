import { Component, OnInit, Injectable } from '@angular/core';
import { GoogleChartService } from  '../service/google-chart.service';
import { DataPoint } from '../../classes/data-point/data-point';
import { StoreComponent } from '../../components/store/store.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private gLib: any;
  mask: DataPoint[];
  busy: DataPoint[];
  line: DataPoint[];
  hygiene: DataPoint[];

  constructor(
    private gChartService: GoogleChartService,
    private storeComponent: StoreComponent
    )
  {
    this.mask = this.storeComponent.maskData;
    this.busy = this.storeComponent.busyData;
    this.line = this.storeComponent.lineData;
    this.hygiene = this.storeComponent.hygieneData;
    
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  ngOnInit(): void {
  }

  // Assumes that all input arrays are the same length
  private drawChart() {
    // let data = this.gLib.visualization.arrayToDataTable([
    //   ['Year', 'Sales', 'Expenses'],
    //   ['2004',  1000,      400],
    //   ['2005',  1170,      460],
    //   ['2006',  660,       1120],
    //   ['2007',  1030,      540]
    // ]);

    // New data should be 'date' 'busy' 'line' 'hygiene' 'mask'
    // TODO: custom colorization with options

    let data = new this.gLib.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', 'Mask');
    data.addColumn('number', 'Busy');
    data.addColumn('number', 'Line');
    data.addColumn('number', 'Hygiene');

    for (let i in this.mask) {
      data.addRow([this.mask[i].date, this.mask[i].value, this.busy[i].value, this.line[i].value, this.hygiene[i].value]);
    }

    const options = {
      height: 500
    }

    let chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data, options);
    console.log("CLIENT: map has been drawn");
  }

}
