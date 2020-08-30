import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() appTitle:string;

  data = {
    message: ''
  }
  constructor() { }

  ngOnInit(): void {
  }


}
