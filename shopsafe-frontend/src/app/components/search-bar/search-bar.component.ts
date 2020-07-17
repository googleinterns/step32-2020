import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';
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

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.getPlace();
  }

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

  invokeEvent(place: Object): void {
    this.setAddress.emit(place);
  }

}
