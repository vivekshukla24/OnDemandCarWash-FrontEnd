import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestComponent } from './user-rest.component';

describe('UserRestComponent', () => {
  let component: UserRestComponent;
  let fixture: ComponentFixture<UserRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
