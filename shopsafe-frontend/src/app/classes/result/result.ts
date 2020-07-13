import { Store } from '../store/store';
import { CountyStats } from '../county-stats/county-stats';
import { ResultInterface } from 'src/app/interfaces/interface';
/**
 * Result that is rendered in the template search result form
 */
export class Result implements ResultInterface {
  stores: Store[];
  countyStats: CountyStats[];

  // Allows for constructing of obj by declaring all class variables
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
