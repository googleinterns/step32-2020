import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('address') address: any;

  autocompleteInput: string;
  queryWait: boolean;

  constructor() {
    // Check if API is loaded
    if (google.maps.places) {
      this.queryWait = true;
    } else {
      this.queryWait = false;
    }
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.getPlace();
  }

  /**
   * Fetches places based on changing input values using Google Places API autocomplete feature.
   * Restricted to the US for geocoded locations (ie. not corporate)
   */
  getPlace(): void {
    const autocomplete = new google.maps.places.Autocomplete(this.address.nativeElement,
      {
          componentRestrictions: { country: 'US' },
          // Restricted to addresses (ie. not establishments)
          types: ['geocode']
      });
    
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  /**
   * Invokes EventEmitter to toggle changes for autocomplete.
   * @param place contained value within event to be emitted
   */
  invokeEvent(place: Object): void {
    this.setAddress.emit(place);
  }

}
