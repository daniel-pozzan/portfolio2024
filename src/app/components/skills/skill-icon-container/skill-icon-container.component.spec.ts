import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillIconContainerComponent } from './skill-icon-container.component';

describe('SkillIconContainerComponent', () => {
  let component: SkillIconContainerComponent;
  let fixture: ComponentFixture<SkillIconContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillIconContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillIconContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
