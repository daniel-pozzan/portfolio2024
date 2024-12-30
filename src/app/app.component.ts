import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from "./sections/header/header.component";
import { MainButtonComponent } from './components/buttons/main-button/main-button.component';
import { MainButtonType } from './shared/enums/main-button-type.enums';
import { ViewportType } from './shared/enums/viewport-type.enums';
import { FrontComponent } from "./sections/front/front.component";
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuComponent, 
    HeaderComponent, 
    MainButtonComponent, 
    FrontComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  viewport: ViewportType = ViewportType.DESKTOP;

  MainButtonType = MainButtonType;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateViewport();
  }

  ngOnInit() {
    this.updateViewport();
  }

  updateViewport() {
    this.viewport = window.innerWidth < 768 ? ViewportType.MOBILE : ViewportType.DESKTOP;
  }
}
