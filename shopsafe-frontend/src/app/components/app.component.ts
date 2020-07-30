import { Component, OnInit, HostListener } from '@angular/core';
import { environment } from "../../environments/environment";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}
  title = 'shopsafe-frontend';


  // Check for window size and redirect if mobile
  @HostListener('window:resize', ['$event'])
  onResizeDown(event) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.router.navigate(['mobile']);
    }
  }

  ngOnInit() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }
}
