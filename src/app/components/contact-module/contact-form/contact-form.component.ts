import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainButtonComponent } from '../../buttons/main-button/main-button.component';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';
import { ErrorIconComponent } from '../error-icon/error-icon.component';
import { ValidIconComponent } from '../valid-icon/valid-icon.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactDialogService } from '../../../services/contact-dialog.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, MainButtonComponent, ReactiveFormsModule, ErrorIconComponent, ValidIconComponent, HttpClientModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;

  public readonly MainButtonType = MainButtonType;

  post = {
    endPoint: 'https://daniel-pozzan.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        responseType: 'text',
      },
    },
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private contactDialogService: ContactDialogService) {
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
      privacyPolicy: new FormControl(false, Validators.requiredTrue)
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactDialogService.open('Thank you for your message! ', 'I will get in touch with you as soon as possible.');
      this.http.post(this.post.endPoint, this.post.body(this.contactForm.value))
      .subscribe({
        next: (response) => {
          this.contactForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
