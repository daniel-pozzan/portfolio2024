import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-headline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-headline.component.html',
  styleUrl: './text-headline.component.scss'
})
export class TextHeadlineComponent {
  @Input() headline!: string;
  @Input() text!: string;
  @Input() reverse: boolean = false;
}
