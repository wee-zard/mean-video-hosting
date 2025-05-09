import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelHeaderComponent } from './chanel-header.component';

describe('ChanelHeaderComponent', () => {
  let component: ChanelHeaderComponent;
  let fixture: ComponentFixture<ChanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChanelHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
