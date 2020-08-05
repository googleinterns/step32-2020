import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/classes/store/store';

@Component({
  selector: 'app-check-in-modal',
  templateUrl: './check-in-modal.component.html',
  styleUrls: ['./check-in-modal.component.css']
})

// @Injectable({
//   providedIn: 'root'
// })

export class CheckInModalComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<CheckInModalComponent>,
    private route: ActivatedRoute,
    
  ) { 
    if (CheckInModalComponent.store.checkInCount != 0) {
      this.socDis = Number(CheckInModalComponent.store.busy.toFixed(2));
      this.waitTime = Number(CheckInModalComponent.store.line.toFixed(2)); 
      this.clean = Number(CheckInModalComponent.store.hygiene.toFixed(2));
      this.msk = Number(CheckInModalComponent.store.masks.toFixed(2));
    }
  }

  ngOnInit(): void {
  }

  static store: Store;
  
  // Enables Sliders
  socDisSlider: boolean = false;
  waitTimeSlider: boolean = false;
  cleanSlider: boolean = false;
  maskSlider: boolean = false; 
  
  // Average Values
  socDis: number = 0;
  waitTime: number = 0;
  clean: number = 0;
  msk: number = 0; 

  failedCheckIn: boolean = false;

  /**
   * Sets ID variable of check in modal based on store id.
   * @param id of the current store
   */
  public static setParam(store: Store) {
    this.store = store;
    console.log("CLIENT: store id is " + this.store.id);
  }

  /**
   * Sends check-in user data to API
   * @param id ID of store that check-in is for
   * @param busy user input busy score
   * @param line user input line score
   * @param hygiene user input hygiene score
   * @param mask user input mask score
   */
  checkIn(): void {
    console.log("CLIENT: check-in api call");
    this.apiService.createCheckIn(CheckInModalComponent.store.id, this.socDis, this.waitTime, this.clean, this.msk)
      .subscribe();
    this.dialogRef.close();
  }

  /**
   * Indicates to user that they must give each category a rating
   */
  fCheckIn(): void {
      this.failedCheckIn = true;
      setTimeout( () => { this.failedCheckIn = false}, 4000);
  }



}
