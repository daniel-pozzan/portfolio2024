import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextProjectComponent } from './text-project.component';

describe('TextProjectComponent', () => {
  let component: TextProjectComponent;
  let fixture: ComponentFixture<TextProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
