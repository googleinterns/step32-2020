import { Store } from '../classes/store/store';
import { CountyStats } from '../classes/county-stats/county-stats';

export interface ResultInterface {
  nearbyStores: Store[];
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
  reviewCount: number;
}

export interface CountyStatsInterface {
  countyName: string;
  stateName: string;
  cases: number;
  deaths: number;
  population: number;
}
