import { Component } from '@angular/core';
import { TextContactComponent } from '../text-box/text-contact/text-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GoUpIconComponent } from './go-up-icon/go-up-icon.component';
@Component({
  selector: 'app-contact-module',
  standalone: true,
  imports: [TextContactComponent, ContactFormComponent, GoUpIconComponent],
  templateUrl: './contact-module.component.html',
  styleUrl: './contact-module.component.scss'
})
export class ContactModuleComponent {

}
