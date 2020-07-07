import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckInModalComponent } from '../check-in-modal/check-in-modal.component';
import { ApiService } from '../../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/classes/store/store';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-store', 
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @Input() store: Store;
  latLng: string;

  constructor(
    public matDialog: MatDialog,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    ) { }
  /**
   * Runs when component is loaded
   */
  ngOnInit(): void {
    this.getStore();
    // this.initStore();
  }

  // FIXME: update
  getStore(): void {
    const id = this.route.snapshot.paramMap.get('id').toString();
    this.apiService.getStoreById(id)
      // .subscribe(data => this.store = {
      //   id: (data as any).id,
      //   name: (data as any).name,
      //   address: (data as any).address,
      //   score: (data as any).score,
      //   reviewCount: (data as any).reviewCount,
      //   open: (data as any).open,
      //   latLng: (data as any).latLng,
      //   busy: (data as any).busy,
      //   line: (data as any).line,
      //   hygiene: (data as any).hygiene,
      //   masks: (data as any).masks
      // });
      .subscribe((res: Store) => {
        this.store = res;
      })
    this.latLng = this.store.latitude + "," + this.store.longitude;
  }

  initStore(): void {
    this.store = new Store({
      id: '2347',
      name: 'test',
      address: '1234 Test St.',
      score: 10,
      reviewCount: 10,
      status: true,
      longitude: 0,
      latitude: 0,
      busy: 1,
      line: 1,
      hygiene: 1,
      masks: 1
    });
    this.latLng = this.store.latitude + "," + this.store.longitude;
  }

  /**
   * Opens check in modal dialog using check in modal component
   * @returns opens new check in modal on screen
   */
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "check-in-modal";
    dialogConfig.height = "510px";
    dialogConfig.width = "460px";
    const modalDialog = this.matDialog.open(CheckInModalComponent, dialogConfig);
  }

  redirectToMap() {
    const url = 'https://www.google.com/maps/search/?api=1&query=' + this.latLng;
    this.document.location.href = url;
  }

  goBack() {
    window.history.back();
  }

}
