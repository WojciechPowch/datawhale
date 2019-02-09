import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexPickDialogComponent } from './regex-pick-dialog.component';

describe('RegexPickDialogComponent', () => {
  let component: RegexPickDialogComponent;
  let fixture: ComponentFixture<RegexPickDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexPickDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexPickDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
