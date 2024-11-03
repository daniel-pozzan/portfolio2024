import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHeadlineComponent } from './text-headline.component';

describe('TextHeadlineComponent', () => {
  let component: TextHeadlineComponent;
  let fixture: ComponentFixture<TextHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextHeadlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
