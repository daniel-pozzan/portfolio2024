import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialButtonBarComponent } from './social-button-bar.component';

describe('SocialButtonBarComponent', () => {
  let component: SocialButtonBarComponent;
  let fixture: ComponentFixture<SocialButtonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialButtonBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
