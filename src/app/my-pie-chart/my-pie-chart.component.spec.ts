import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieChartComponent } from './my-pie-chart.component';

describe('MyPieChartComponent', () => {
  let component: MyPieChartComponent;
  let fixture: ComponentFixture<MyPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
