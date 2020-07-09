import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.css']
})
export class HttpErrorComponent implements OnInit {

  @Input() httpErrorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
