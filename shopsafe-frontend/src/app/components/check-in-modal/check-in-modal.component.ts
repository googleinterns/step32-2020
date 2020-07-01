import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-check-in-modal',
  templateUrl: './check-in-modal.component.html',
  styleUrls: ['./check-in-modal.component.css']
})
export class CheckInModalComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialogRef<CheckInModalComponent>
  ) { }

  ngOnInit(): void {
  }

  busy = '';
  line = '';
  hygiene = '';
  mask = '';

  /**
   * Sends check-in user data to API
   * @param id ID of store that check-in is for
   * @param busy user input busy score
   * @param line user input line score
   * @param hygiene user input hygiene score
   * @param mask user input mask score
   */
  checkIn(): void {
    // let storeId = this.storeId.toString();
    // console.log(storeId);
    this.apiService.createCheckIn('temp', Number(this.busy), Number(this.line), Number(this.hygiene), Number(this.mask));
    this.dialogRef.close();
  }

}
