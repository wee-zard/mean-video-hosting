import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelVideoEditDialogComponent } from './chanel-video-edit-dialog.component';

describe('ChanelVideoEditDialogComponent', () => {
  let component: ChanelVideoEditDialogComponent;
  let fixture: ComponentFixture<ChanelVideoEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelVideoEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelVideoEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
