import { CountyStatsInterface } from 'src/app/interfaces/interface';
import { DataPoint } from '../data-point/data-point';

export class CountyStats implements CountyStatsInterface {
  countyName: string = '';
  stateName: string = '';
  cases: number;
  deaths: number;
  activeCases: number;
  population: number;
  covidData: DataPoint[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
