import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../components/menu/menu.component';
import { ViewportType } from '../../shared/enums/viewport-type.enums';
import { BurgerCloseButtonComponent } from '../../components/buttons/burger-close-button/burger-close-button.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, BurgerCloseButtonComponent, LogoComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;

  public showMenu: boolean;
  public showBurger: boolean;

  ViewportType = ViewportType;

  constructor() {
    this.showMenu = false;
    this.showBurger = true;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.toggleMenu();
    this.showBurger = false;
    setTimeout(() => {
      this.showBurger = true;
    }, 100);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
