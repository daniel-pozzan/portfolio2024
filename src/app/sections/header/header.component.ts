import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { ViewportType } from '../../shared/enums/viewport-type.enums';
import { BurgerCloseButtonComponent } from '../../components/buttons/burger-close-button/burger-close-button.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, BurgerCloseButtonComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;

  public showMenu: boolean;

  ViewportType = ViewportType;

  constructor() {
    this.showMenu = false;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
