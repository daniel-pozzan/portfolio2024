import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./sections/header/header.component";
import { MainButtonType } from './shared/enums/main-button-type.enums';
import { ViewportType } from './shared/enums/viewport-type.enums';
import { FooterComponent } from './sections/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
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
