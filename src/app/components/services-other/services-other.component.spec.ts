import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOtherComponent } from './services-other.component';

describe('ServicesOtherComponent', () => {
  let component: ServicesOtherComponent;
  let fixture: ComponentFixture<ServicesOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesOtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
