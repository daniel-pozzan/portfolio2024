import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerCloseButtonComponent } from './burger-close-button.component';

describe('BurgerCloseButtonComponent', () => {
  let component: BurgerCloseButtonComponent;
  let fixture: ComponentFixture<BurgerCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerCloseButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurgerCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
