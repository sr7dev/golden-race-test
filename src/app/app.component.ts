import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'golden-race';
  selectedBalls: number[] = [];
  bettedBall = 0;
  toggleBall(ball: number) {
    const i = this.selectedBalls.findIndex((item) => item === ball);
    if (i >= 0) {
      this.selectedBalls.splice(i, 1);
    } else {
      this.selectedBalls.push(ball);
    }
  }
  placeBet(bettedBall: number) {
    this.bettedBall = bettedBall;
  }
}
