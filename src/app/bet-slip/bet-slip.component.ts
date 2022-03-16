import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ballColors from '../ball-colors';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent implements OnInit {
  @Input() selectedBalls: number[] = [];
  @Output() placeBet = new EventEmitter<number>();
  @Output() betMoney = new EventEmitter<number>();
  balls = [0, 1, 2, 3, 4, 5, 6, 7];
  colors = ballColors;
  bet: number = 100;
  constructor() { }

  ngOnInit(): void { }

  get bettingValue() {
    return this.selectedBalls.length * this.bet;
  }
  startBet() {
    const bettedBall = (Math.round(Math.random() * 1000) % 10) + 1;
    this.placeBet.emit(bettedBall);
    this.betMoney.emit(this.bettingValue);
  }
}
