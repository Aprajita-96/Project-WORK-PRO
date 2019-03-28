import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSearchComponent } from './user-dashboard-search.component';

describe('UserDashboardSearchComponent', () => {
  let component: UserDashboardSearchComponent;
  let fixture: ComponentFixture<UserDashboardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
