import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GoogleChartService } from  '../service/google-chart.service';
import { DataPoint } from '../../classes/data-point/data-point';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private gLib: any;
  @Input() mask: DataPoint[];
  @Input() busy: DataPoint[];
  @Input() line: DataPoint[];
  @Input() hygiene: DataPoint[];

  constructor(
    private gChartService: GoogleChartService,
    )
  {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  ngOnInit(): void {}

   /**
   * Called when parameters are changed by the parent component.
   */
  ngOnChanges() {
    // Updates chart with new parent input values
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  // TODO: custom colorization with options
  /**
   * Draws COVID-19 statistics line chart and renders within template.
   * Assumes that all input arrays are the same length
   */
  private drawChart() {

    let data = new this.gLib.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Mask Usage');
    data.addColumn('number', 'Social Distancing');
    data.addColumn('number', 'Wait Time');
    data.addColumn('number', 'Cleanliness');

    for (let i in this.mask) {
      data.addRow([new Date(this.mask[i].date), this.mask[i].value, this.busy[i].value, this.line[i].value, this.hygiene[i].value]);
    }

    const options = {
      focusTarget: "category",
      height: 600,
      hAxis: { textPosition: 'none' },
      pointSize: 5,
      vAxis: {
        ticks: [0, 2, 4, 6, 8, 10]
      }
    }

    let chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data, options);
    console.log("CLIENT: check-in map has been drawn");
  }

}
