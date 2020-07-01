import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckInModalComponent } from '../check-in-modal/check-in-modal.component';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(
    public matDialog: MatDialog,
    private apiService: ApiService
    ) { }
  
  
  /**
   * Runs when component is loaded
   */
  ngOnInit(): void {
  }


  /**
   * Opens check in modal dialog using check in modal component
   * @returns opens new check in modal on screen
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "check-in-modal";
    dialogConfig.height = "500px";
    dialogConfig.width = "460px";
    const modalDialog = this.matDialog.open(CheckInModalComponent, dialogConfig);
  }

  /**
   * Sends check-in user data to API
   * @param id ID of store that check-in is for
   * @param busy user input busy score
   * @param line user input line score
   * @param hygiene user input hygiene score
   * @param mask user input mask score
   */
  checkIn(storeId: string, busy: number, line: number, hygiene: number, mask: number): void {
    this.apiService.createCheckIn(storeId, busy, line, hygiene, mask);
  }

}
