import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSection } from './address-section';

describe('AddressSection', () => {
  let component: AddressSection;
  let fixture: ComponentFixture<AddressSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
