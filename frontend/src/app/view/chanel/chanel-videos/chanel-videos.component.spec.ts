import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVideosComponent } from './chanel-videos.component';

describe('ChanelVideosComponent', () => {
  let component: ChanelVideosComponent;
  let fixture: ComponentFixture<ChanelVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
