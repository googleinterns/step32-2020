import { StoreInterface } from 'src/app/interfaces/interface';

export class Store implements StoreInterface {

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
  distance: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
