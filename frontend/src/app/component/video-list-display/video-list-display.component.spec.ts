import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListDisplayComponent } from './video-list-display.component';

describe('VideoListDisplayComponent', () => {
  let component: VideoListDisplayComponent;
  let fixture: ComponentFixture<VideoListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoListDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
