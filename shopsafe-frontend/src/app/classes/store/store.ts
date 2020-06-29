export class Store {

    // store variables
    id: number;
    name: string = '';
    address: string = '';
    score: number;
    checkedIn: number;
    status: boolean;
    latLng: [number, number];

    // check-in statistics
    busy: number;
    line: number;
    hygiene: number;
    masks: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
