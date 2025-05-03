import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikeToggleComponent } from './like-dislike-toggle.component';

describe('LikeDislikeToggleComponent', () => {
  let component: LikeDislikeToggleComponent;
  let fixture: ComponentFixture<LikeDislikeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeDislikeToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeDislikeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
