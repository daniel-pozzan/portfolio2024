import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,MenuButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() viewport: 'desktop' | 'mobile' = 'desktop';
  @Input() menuItems: string[] = [];
}
