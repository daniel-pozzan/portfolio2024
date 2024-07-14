import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  @Input() viewport: 'desktop' | 'mobile' = 'desktop';
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
