import { CountyStatsInterface } from 'src/app/interfaces/interface';

export class CountyStats implements CountyStatsInterface {
  countyName: string = '';
  stateName: string = '';
  cases: number;
  deaths: number;
  population: number;

  constructor(countyStats: any) {
    this.countyName = countyStats.countyName;
    this.stateName = countyStats.stateName;
    this.cases = countyStats.cases;
    this.deaths = countyStats.deaths;
    this.population = countyStats.population;
  }
}
