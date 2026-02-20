import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivate } from './can-activate';

describe('CanActivate', () => {
  let component: CanActivate;
  let fixture: ComponentFixture<CanActivate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanActivate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanActivate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
