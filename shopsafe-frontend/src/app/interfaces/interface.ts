import { Store } from '../classes/store/store';
import { CountyStats } from '../classes/county-stats/county-stats';
import { DataPoint } from '../classes/data-point/data-point';

export interface ResultInterface {
  stores: Store[];
  latLng: { latitude: number, longitude: number };
}

export interface StoreResultInterface {
  store: Store[];
  countyStats: CountyStats[];
  maskData: DataPoint[];
  busyData: DataPoint[];
  lineData: DataPoint[];
  hygieneData: DataPoint[];
}

export interface DataPointInterface {
  value: number;
  date: string; // update based on what is returned
}

export interface StoreInterface {
  id: string;
  name: string;
  address: string;
  open: boolean;
  latitude: number;
  longitude: number;
  score: number;
  busy: number;
  line: number;
  hygiene: number;
  masks: number;
  checkInCount: number;
}

export interface CountyStatsInterface {
  countyName: string;
  stateName: string;
  cases: number;
  deaths: number;
  activeCases: number;
  population: number;
  covidData: DataPoint[];
}
