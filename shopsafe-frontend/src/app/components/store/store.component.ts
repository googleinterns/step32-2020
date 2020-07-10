import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckInModalComponent } from '../check-in-modal/check-in-modal.component';
import { ApiService } from '../../api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/classes/store/store';

@Component({
  selector: 'app-store', 
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @Input() store: Store;
  latLng: string;
  isLoaded: boolean;
  storeId: string;
  httpError: boolean;
  httpErrorMessage: string;

  constructor(
    public matDialog: MatDialog,
    private apiService: ApiService,
    private route: ActivatedRoute,
    // private checkInModalComponent: CheckInModalComponent,
    ) { }

  /**
   * Runs when component is loaded
   */
  ngOnInit(): void {
    // Defaults to API not called yet
    this.isLoaded = false;
    // Defaults to no HTTP error
    this.httpError = false;
    this.getStore();
  }

  /**
   * Calls API to get store and subscribes local variables using data returned in the 
   * Observable from the HTTP response.
   */
  getStore(): void {
    const id = this.route.snapshot.paramMap.get('id').toString();
    this.storeId = id;
    this.apiService.getStoreById(id)
      .subscribe(
        (res: Store) => {
          this.store = res
        },
        err => {
          console.log(err),
          this.httpError = true,
          this.httpErrorMessage = err
        },
        () => {
          this.initTemplate();
        }
      );
  }

  handleError(err): void {
    switch (err) {
      case 400:
        this.httpErrorMessage = 'Could not find results for your location.';
      case 404:
        this.httpErrorMessage = 'Page not found.';
      case 500:
        this.httpErrorMessage = 'Internal server error.';
    }
  }

  /**
   * Initializes component by using data returned from API call.
   * Sets isLoaded boolean to true, as the function can only be called when there
   * is a successful response.
   */
  initTemplate(): void {
    // Sets loaded state to true
    this.isLoaded = true;
    console.log("CLIENT: API call finished");
  }
  
  /**
   * Opens check in modal dialog using check in modal component.
   * Opens new check in modal on screen.
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "check-in-modal";
    dialogConfig.height = "510px";
    dialogConfig.width = "460px";
    CheckInModalComponent.setId(this.storeId);
    const modalDialog = this.matDialog.open(CheckInModalComponent, dialogConfig);
  }

  /**
   * Opens Google Maps link using Places ID of the store.
   */
  redirectToMap() {
    const url = 'https://www.google.com/maps/place/?q=place_id:' + this.storeId;
    window.open(url, "_blank");
  }

  /**
   * Redirects to result page (previous page).
   */
  goBack() {
    window.history.back();
  }

}
