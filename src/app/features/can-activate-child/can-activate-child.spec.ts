import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivateChild } from './can-activate-child';

describe('CanActivateChild', () => {
  let component: CanActivateChild;
  let fixture: ComponentFixture<CanActivateChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanActivateChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanActivateChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
