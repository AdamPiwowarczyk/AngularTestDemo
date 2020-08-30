import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  @Output() emitter = new EventEmitter<string>(true);

  constructor() { }

  ngOnInit(): void {
  }

  emituj(value: string): void{
    this.emitter.emit(value);
  }

}
