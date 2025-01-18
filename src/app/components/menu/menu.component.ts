import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from '../buttons/menu-button/menu-button.component';
import { ViewportType } from '../../shared/enums/viewport-type.enums';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,MenuButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;
  @Input() menuItems: {label: string, fragment: string}[] = [];
  @Input() showMenu: boolean = false;

  @Output() closeMenuTrigger = new EventEmitter<void>();

  closeMenu() {
    this.closeMenuTrigger.emit();
  }
}
