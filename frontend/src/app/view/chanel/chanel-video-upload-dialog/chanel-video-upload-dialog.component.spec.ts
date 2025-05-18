import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVideoUploadDialogComponent } from './chanel-video-upload-dialog.component';

describe('ChanelVideoUploadDialogComponent', () => {
  let component: ChanelVideoUploadDialogComponent;
  let fixture: ComponentFixture<ChanelVideoUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelVideoUploadDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelVideoUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
