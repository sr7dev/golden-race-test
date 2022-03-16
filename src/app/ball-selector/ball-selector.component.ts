import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ballColors from '../ball-colors';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent implements OnInit {
  @Input() selectedBalls: number[] = [];
  @Input() bettedBall: number = 0;
  @Output() toggleBall = new EventEmitter<number>();
  @Output() clearSelectedBalls = new EventEmitter<number>();
  balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  colors = ballColors;
  constructor() {}

  ngOnInit(): void {}

  clickBall(ball: number) {
    this.toggleBall.emit(ball);
  }
  clearSelection() {
    this.clearSelectedBalls.emit();
  }

  get isWon() {
    return this.selectedBalls.includes(this.bettedBall);
  }
}
