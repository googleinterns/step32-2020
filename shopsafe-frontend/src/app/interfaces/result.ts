import { Store } from '../classes/store/store';
import { CountyStats } from '../classes/county-stats/county-stats';

export interface Result {
    nearbyStores: Store[];
    countyStats: CountyStats;
}
