import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamFeedComponent } from './webcam-feed.component';

describe('WebcamFeedComponent', () => {
  let component: WebcamFeedComponent;
  let fixture: ComponentFixture<WebcamFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcamFeedComponent]
    });
    fixture = TestBed.createComponent(WebcamFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
