import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckInModalComponent } from '../check-in-modal/check-in-modal.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

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

}
