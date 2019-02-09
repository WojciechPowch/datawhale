import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexUnitComponent } from './regex-unit.component';

describe('RegexUnitComponent', () => {
  let component: RegexUnitComponent;
  let fixture: ComponentFixture<RegexUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
