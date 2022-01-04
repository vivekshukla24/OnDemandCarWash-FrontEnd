import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherRestComponent } from './washer-rest.component';

describe('WasherRestComponent', () => {
  let component: WasherRestComponent;
  let fixture: ComponentFixture<WasherRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
