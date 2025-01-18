import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ViewportType } from '../../../shared/enums/viewport-type.enums';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;
  @Input() label: string;
  @Input() fragment: string;
  @Output() closeMenu = new EventEmitter<void>();
  active: boolean = false;

  constructor(private router: Router) {
    this.label = 'Text';
    this.fragment = '';
  }

  activateItem(event: Event) {
    event.preventDefault();
    this.active = true;
    this.router.navigate([], { fragment: this.fragment });
    setTimeout(() => {
      this.active = false;
      this.closeMenu.emit();
    }, 1000);
  }
}
