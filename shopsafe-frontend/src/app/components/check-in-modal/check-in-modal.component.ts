import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

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

  static storeId: string;
  busy = '';
  line = '';
  hygiene = '';
  mask = '';

  /**
   * Sets ID variable of check in modal based on store id.
   * @param id of the current store
   */
  public static setId(id: string) {
    this.storeId = id;
    console.log("CLIENT: store id is " + this.storeId);
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
    this.apiService.createCheckIn(CheckInModalComponent.storeId, Number(this.busy), Number(this.line), Number(this.hygiene), Number(this.mask))
      .subscribe();
    this.dialogRef.close();
  }

}
