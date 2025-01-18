import { Component, Inject, Input } from '@angular/core';
import { MainButtonComponent } from '../../buttons/main-button/main-button.component';
import { ViewportType } from '../../../shared/enums/viewport-type.enums';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-text-front',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './text-front.component.html',
  styleUrl: './text-front.component.scss'
})
export class TextFrontComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public readonly MainButtonType = MainButtonType;

  scrollToContact() {
    this.document.querySelector('app-contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
