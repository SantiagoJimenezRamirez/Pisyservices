import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsAddComponent } from './operations-add.component';

describe('OperationsAddComponent', () => {
  let component: OperationsAddComponent;
  let fixture: ComponentFixture<OperationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
