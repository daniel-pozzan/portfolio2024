import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModuleComponent } from './contact-module.component';

describe('ContactModuleComponent', () => {
  let component: ContactModuleComponent;
  let fixture: ComponentFixture<ContactModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
