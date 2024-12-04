import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCelComponent } from './menu-cel.component';

describe('MenuCelComponent', () => {
  let component: MenuCelComponent;
  let fixture: ComponentFixture<MenuCelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
