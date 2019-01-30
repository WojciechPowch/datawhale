import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingpageComponent } from './searchingpage.component';

describe('SearchingpageComponent', () => {
  let component: SearchingpageComponent;
  let fixture: ComponentFixture<SearchingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
