import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIconComponent } from './about-icon.component';

describe('AboutIconComponent', () => {
  let component: AboutIconComponent;
  let fixture: ComponentFixture<AboutIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
