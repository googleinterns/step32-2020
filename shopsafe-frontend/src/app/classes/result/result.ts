import { Store } from '../store/store';
import { CountyStats } from '../county-stats/county-stats';
import { ResultInterface } from 'src/app/interfaces/interface';
/**
 * Result that is rendered in the template search result form
 */
export class Result implements ResultInterface {
  nearbyStores: Store[];
  countyStats: CountyStats;

  // Allows for constructing of obj by declaring all class variables
  // TODO: update tests to meet new constructor
  constructor(result: any) {
    this.nearbyStores = result.nearbyStores;
    this.countyStats = result.countyStats;
  }
}
