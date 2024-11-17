import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUpIconComponent } from './go-up-icon.component';

describe('GoUpIconComponent', () => {
  let component: GoUpIconComponent;
  let fixture: ComponentFixture<GoUpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoUpIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
