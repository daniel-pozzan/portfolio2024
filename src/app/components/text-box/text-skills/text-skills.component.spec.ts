import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSkillsComponent } from './text-skills.component';

describe('TextSkillsComponent', () => {
  let component: TextSkillsComponent;
  let fixture: ComponentFixture<TextSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
