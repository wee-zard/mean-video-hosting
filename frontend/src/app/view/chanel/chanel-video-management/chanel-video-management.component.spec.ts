import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVideoManagementComponent } from './chanel-video-management.component';

describe('ChanelVideoManagementComponent', () => {
  let component: ChanelVideoManagementComponent;
  let fixture: ComponentFixture<ChanelVideoManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelVideoManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelVideoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
