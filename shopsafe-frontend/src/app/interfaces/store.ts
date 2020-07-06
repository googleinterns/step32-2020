export interface Store {
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
}
