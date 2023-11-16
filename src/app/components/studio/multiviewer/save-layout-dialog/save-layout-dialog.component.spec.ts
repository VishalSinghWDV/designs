import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLayoutDialogComponent } from './save-layout-dialog.component';

describe('SaveLayoutDialogComponent', () => {
  let component: SaveLayoutDialogComponent;
  let fixture: ComponentFixture<SaveLayoutDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveLayoutDialogComponent]
    });
    fixture = TestBed.createComponent(SaveLayoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
