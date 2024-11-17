import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from '../../buttons/main-button/main-button.component';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';
import { ErrorIconComponent } from '../error-icon/error-icon.component';
import { ValidIconComponent } from '../valid-icon/valid-icon.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, MainButtonComponent, ReactiveFormsModule, ErrorIconComponent, ValidIconComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  public readonly MainButtonType = MainButtonType;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
      privacyPolicy: new FormControl(false, Validators.requiredTrue)
    })
  }

  onSubmit() {
    console.log('Form Submitted!', this.contactForm.value);
    if (this.contactForm.valid) {
      
    }
  }
}
