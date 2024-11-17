import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-contact',
  standalone: true,
  imports: [],
  templateUrl: './text-contact.component.html',
  styleUrl: './text-contact.component.scss'
})
export class TextContactComponent {
  @Input() title: string = '';
  @Input() bodyText: string = '';
}
