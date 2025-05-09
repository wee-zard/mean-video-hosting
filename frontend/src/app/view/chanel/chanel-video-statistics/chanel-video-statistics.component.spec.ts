import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVideoStatisticsComponent } from './chanel-video-statistics.component';

describe('ChanelVideoStatisticsComponent', () => {
  let component: ChanelVideoStatisticsComponent;
  let fixture: ComponentFixture<ChanelVideoStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelVideoStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelVideoStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
