import { DataPointInterface } from '../../interfaces/interface';

export class DataPoint {
  value: number;
  Date: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
