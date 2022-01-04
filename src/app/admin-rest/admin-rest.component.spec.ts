import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestComponent } from './admin-rest.component';

describe('AdminRestComponent', () => {
  let component: AdminRestComponent;
  let fixture: ComponentFixture<AdminRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
