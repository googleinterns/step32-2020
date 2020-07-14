import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  @Input() mask: DataPoint[];
  @Input() busy: DataPoint[];
  @Input() line: DataPoint[];
  @Input() hygiene: DataPoint[];

  constructor(
    private gChartService: GoogleChartService,
    private storeComponent: StoreComponent
    )
  {
    // this.mask = this.storeComponent.maskData;
    // this.busy = this.storeComponent.busyData;
    // this.line = this.storeComponent.lineData;
    // this.hygiene = this.storeComponent.hygieneData;
    
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  ngOnInit(): void {}

  ngOnChanges() {
    // Updates chart with new parent input values
    this.gLib.charts.load('current', {'packages': ['corechart', 'table'], callback: this.drawChart.bind(this)});
  }

  // Assumes that all input arrays are the same length
  // TODO: custom colorization with options
  private drawChart() {

    let data = new this.gLib.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Mask');
    data.addColumn('number', 'Busy');
    data.addColumn('number', 'Line');
    data.addColumn('number', 'Hygiene');

    for (let i in this.mask) {
      data.addRow([new Date(this.mask[i].date), this.mask[i].value, this.busy[i].value, this.line[i].value, this.hygiene[i].value]);
    }

    const options = {
      height: 600,
      hAxis: { textPosition: 'none' }
    }

    let chart = new this.gLib.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data, options);
    console.log("CLIENT: check-in map has been drawn");
  }

}
