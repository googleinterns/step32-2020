import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mobileCheck: boolean = false;

  constructor(
    private router: Router,
  ) { }

  @HostListener('window:resize', ['$event'])
  onResizeDown(event) {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.mobileCheck = true;
    }
  }

  ngOnInit(): void {
  }

}
