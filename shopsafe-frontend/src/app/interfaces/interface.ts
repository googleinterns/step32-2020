import { Store } from '../classes/store/store';
import { CountyStats } from '../classes/county-stats/county-stats';

export interface ResultInterface {
  nearbyStores: Store[];
  countyStats: CountyStats;
}

export interface StoreInterface {
  // store variables
  id: string;
  name: string;
  address: string;
  score: number;
  reviewCount: number;
  status: boolean;
  latLng: [number, number];

  // check-in statistics
  busy: number;
  line: number;
  hygiene: number;
  masks: number;
}

export interface CountyStatsInterface {
  countyName: string;
  stateName: string;
  cases: number;
  deaths: number;
  population: number;
}
