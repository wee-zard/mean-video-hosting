import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVideoDeleteDialogComponent } from './chanel-video-delete-dialog.component';

describe('ChanelVideoDeleteDialogComponent', () => {
  let component: ChanelVideoDeleteDialogComponent;
  let fixture: ComponentFixture<ChanelVideoDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelVideoDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelVideoDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
