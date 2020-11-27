import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addByOne(): void {
    this.count++;
  }

  reduceByOne(): void {
    this.count--;
  }
}
