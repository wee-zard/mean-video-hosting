import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVideoUploadComponent } from './chanel-video-upload.component';

describe('ChanelVideoUploadComponent', () => {
  let component: ChanelVideoUploadComponent;
  let fixture: ComponentFixture<ChanelVideoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelVideoUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelVideoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
