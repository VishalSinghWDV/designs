import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiviewerComponent } from './multiviewer.component';

describe('MultiviewerComponent', () => {
  let component: MultiviewerComponent;
  let fixture: ComponentFixture<MultiviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiviewerComponent]
    });
    fixture = TestBed.createComponent(MultiviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
