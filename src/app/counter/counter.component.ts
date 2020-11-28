import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;
  isMinusButtonShown = this.count >= 0 ? true : false;
  isAddButtonShown = this.count <= 11 ? true : false;
  numberBackgroundColor = 'white';

  changeButtonShownStatus(): void {
    if (this.count < 0) {
      this.isMinusButtonShown = false;
      this.isAddButtonShown = true;
    } else if (this.count >= 0 && this.count <= 10) {
      this.isMinusButtonShown = true;
      this.isAddButtonShown = true;
    } else {
      this.isMinusButtonShown = true;
      this.isAddButtonShown = false;
    }
  }

  changeNumberBackgroundColor(): void {
    if (this.count < 0) {
      this.numberBackgroundColor = 'green';
    } else if (this.count >= 0 && this.count <= 10) {
      this.numberBackgroundColor = 'white';
    } else {
      this.numberBackgroundColor = 'red';
    }
  }

  increaseCount(): void {
    this.count++;
    this.changeButtonShownStatus();
    this.changeNumberBackgroundColor();
  }

  decreaseCount(): void {
    this.count--;
    this.changeButtonShownStatus();
    this.changeNumberBackgroundColor();
  }

  reset(): void {
    this.count = 0;
    this.changeButtonShownStatus();
    this.changeNumberBackgroundColor();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
