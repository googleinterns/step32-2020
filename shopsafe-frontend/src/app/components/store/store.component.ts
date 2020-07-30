import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckInModalComponent } from '../check-in-modal/check-in-modal.component';
import { ApiService } from '../../api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/classes/store/store';
import { CountyStats } from 'src/app/classes/county-stats/county-stats';
import { DataPoint } from '../../classes/data-point/data-point';

@Component({
  selector: 'app-store', 
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  store: Store;
  countyStats: CountyStats;
  latLng: string;
  isLoaded: boolean;
  storeId: string;
  httpError: boolean;
  httpErrorMessage: string;
  proportion: number;

  covidData: DataPoint[];
  maskData: DataPoint[];
  busyData: DataPoint[];
  lineData: DataPoint[];
  hygieneData: DataPoint[];

  isSmall: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResizeDown(event) {
    if (event.target.innerWidth < 1655) {
      this.isSmall = true;
    }
  }

  constructor(
    public matDialog: MatDialog,
    private apiService: ApiService,
    private route: ActivatedRoute
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
        (res: any) => {
          this.store = res.store,
          this.countyStats = res.countyStats,
          this.covidData = this.countyStats.covidData,
          this.maskData = res.maskData,
          this.busyData = res.busyData,
          this.lineData = res.lineData,
          this.hygieneData = res.hygieneData
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

  /**
   * Initializes component by using data returned from API call.
   * Sets isLoaded boolean to true, as the function can only be called when there
   * is a successful response.
   */
  initTemplate(): void {
    // Sets loaded state to true
    this.isLoaded = true;
    console.log("CLIENT: API call finished");

    // Round proportion to 2 decimal places
    this.proportion = this.countyStats.cases / this.countyStats.population * 100;
    console.log("CLIENT: calculated percentage as " + this.proportion);
  }
  
  /**
   * Opens check in modal dialog using check in modal component.
   * Opens new check in modal on screen.
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "check-in-modal";
    dialogConfig.height = "510px";
    dialogConfig.width = "600px";
    CheckInModalComponent.setId(this.storeId);
    const modalDialog = this.matDialog.open(CheckInModalComponent, dialogConfig);
    
    // Updates changes in place after modal closes
    modalDialog.afterClosed().subscribe(() => { this.getStore() });
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
