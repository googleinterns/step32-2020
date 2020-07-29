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
    
  ) { }

  ngOnInit(): void {
  }

  static store: Store;
  
  //Enables Sliders
  socDisSlider: boolean = false;
  waitTimeSlider: boolean = false;
  cleanSlider: boolean = false;
  maskSlider: boolean = false; 
  
  //Average Values
  static socDis: number = 0;
  static waitTime: number = 0;
  static clean: number = 0;
  static msk: number = 0; 

  busy = '';
  line = '';
  hygiene = '';
  mask = '';

  /**
   * Sets ID variable of check in modal based on store id.
   * @param id of the current store
   */
  public static setParam(store: Store) {
    this.store = store;
    if (this.store.checkInCount != 0) {
      this.socDis = this.store.busy;
      this.waitTime = this.store.line;
      this.clean = this.store.hygiene;
      this.msk = this.store.masks;
    }
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
    this.apiService.createCheckIn(CheckInModalComponent.store.id, Number(this.busy), Number(this.line), Number(this.hygiene), Number(this.mask))
      .subscribe();
    this.dialogRef.close();
  }

  get socDisAvg() {
    return CheckInModalComponent.socDis;
  }
  get waitTimeAvg() {
    return CheckInModalComponent.waitTime;
  }get cleanAvg() {
    return CheckInModalComponent.clean;
  }get maskAvg() {
    return CheckInModalComponent.msk;
  }

}
