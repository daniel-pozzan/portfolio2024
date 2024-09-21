import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFrontComponent } from './text-front.component';

describe('TextFrontComponent', () => {
  let component: TextFrontComponent;
  let fixture: ComponentFixture<TextFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
