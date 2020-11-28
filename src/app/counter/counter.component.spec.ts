import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase count when click add button', () => {
    // given
    component.count = 0;

    // when
    component.increaseCount();

    // then
    expect(component.count).toBe(1);
  });

  it('should decrease count when click minus button', () => {
    // given
    component.count = 0;

    // when
    component.decreaseCount();

    // then
    expect(component.count).toBe(-1);
  });

  it('should isMinusButtonShown to be false when number is less than 0', () => {
    // given
    component.count = 0;

    // when
    component.decreaseCount();

    // then
    expect(component.isMinusButtonShown).toBe(false);
  });

  it('should isMinusButtonShown to be true when number is greater tha or equal to 0', () => {
    // given
    component.count = -1;

    // when
    component.increaseCount();

    // then
    expect(component.isMinusButtonShown).toBe(true);
  });

  it('should isAddButtonShown to be false when number is greater than 10', () => {
    // given
    component.count = 10;

    // when
    component.increaseCount();

    // then
    expect(component.isAddButtonShown).toBe(false);
  });

  it('should isAddButtonShown to be true when number is less than or equal to 10', () => {
    // given
    component.count = 11;

    // when
    component.decreaseCount();

    // then
    expect(component.isAddButtonShown).toBe(true);
  });

  it('should numberBackgroundColor to green when number is less than 0', () => {
    // given
    component.count = 0;

    // when
    component.decreaseCount();

    // then
    expect(component.numberBackgroundColor).toBe('green');
  });

  it('should numberBackgroundColor to white when number is greater than or equal to 0', () => {
    // given
    component.count = -1;

    // when
    component.increaseCount();

    // then
    expect(component.numberBackgroundColor).toBe('white');
  });

  it('should numberBackgroundColor to red when number is greater than 10', () => {
    // given
    component.count = 10;

    // when
    component.increaseCount();

    // then
    expect(component.numberBackgroundColor).toBe('red');
  });

  it('should numberBackgroundColor to white when number is less than or equal to 10', () => {
    // given
    component.count = 11;

    // when
    component.decreaseCount();

    // then
    expect(component.numberBackgroundColor).toBe('white');
  });

  it('should reset number to 0 when click reset', () => {
    // given
    component.count = 10;

    // when
    component.reset();

    // then
    expect(component.count).toBe(0);
  });
});
