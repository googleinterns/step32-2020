import { Store } from '../classes/store/store';
import { CountyStats } from '../classes/county-stats/county-stats';

export interface ResultInterface {
  stores: Store[];
  countyStats: CountyStats[];
}

export interface StoreResultInterface {
  store: Store[];
  countyStats: CountyStats[];
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
}
