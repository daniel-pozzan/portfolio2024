import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportType } from '../../../shared/enums/viewport-type.enums';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;
  @Input() label: string;
  active: boolean = false;

  constructor() {
    this.label = 'Text';
  }

  activateItem() {
    this.active = true;
    setTimeout(() => {
      this.active = false;
    }, 1000);
  }
}
