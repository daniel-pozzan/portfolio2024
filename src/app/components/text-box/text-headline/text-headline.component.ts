import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-headline',
  standalone: true,
  imports: [],
  templateUrl: './text-headline.component.html',
  styleUrl: './text-headline.component.scss'
})
export class TextHeadlineComponent {
  @Input() headline!: string;
  @Input() text!: string;
}
