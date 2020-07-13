import { DataPointInterface } from '../../interfaces/interface';

export class DataPoint implements DataPointInterface {
  value: number;
  Date: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
