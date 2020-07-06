import { StoreInterface } from 'src/app/interfaces/interface';

export class Store implements StoreInterface {

  // store variables
  id: string = '';
  name: string = '';
  address: string = '';
  score: number;
  reviewCount: number;
  status: boolean;
  latLng: [number, number];

  // check-in statistics
  busy: number;
  line: number;
  hygiene: number;
  masks: number;

  constructor(store: any) {
    this.id = store.id;
    this.name = store.name;
    this.address = store.address;
    this.status = store.open;
    this.score = store.score;
    this.reviewCount = store.reviewCount;
    this.latLng = [store.location.latitude, store.location.longitude];
    this.busy = store.stats.busy;
    this.line = store.stats.line;
    this.hygiene = store.stats.hygiene;
    this.masks = store.stats.masks;
  }
}
