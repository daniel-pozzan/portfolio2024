import { Component } from '@angular/core';
import { TextHeadlineComponent } from '../../components/text-box/text-headline/text-headline.component';
import { ContactModuleComponent } from '../../components/contact-module/contact-module.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TextHeadlineComponent, ContactModuleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
