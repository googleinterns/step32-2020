import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../classes/store/store';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  @Input() stores: Store[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    window.location.reload();
  }

}
