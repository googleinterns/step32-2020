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
    if (event.target.innerWidth <= 699) {
      this.mobileCheck = true;
    }
  }

  ngOnInit(): void {
  }

}
