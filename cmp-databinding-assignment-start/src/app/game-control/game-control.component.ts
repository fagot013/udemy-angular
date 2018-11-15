import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer: number;
  increment = 0;
  @Output() event = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  onStart() {
    const self = this;
    this.timer = setInterval(() => {
      this.event.emit(this.increment++);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }

}
