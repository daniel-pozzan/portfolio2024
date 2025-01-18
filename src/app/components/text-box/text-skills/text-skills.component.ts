import { Component, Inject, Input } from '@angular/core';
import { MainButtonComponent } from '../../buttons/main-button/main-button.component';
import { ViewportType } from '../../../shared/enums/viewport-type.enums';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-text-skills',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './text-skills.component.html',
  styleUrl: './text-skills.component.scss'
})
export class TextSkillsComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;

  public readonly MainButtonType = MainButtonType;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToContact() {
    this.document.querySelector('app-contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
