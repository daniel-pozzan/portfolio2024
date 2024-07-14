import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  viewport: 'desktop' | 'mobile' = 'desktop';

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateViewport();
  }

  ngOnInit() {
    this.updateViewport();
  }

  updateViewport() {
    this.viewport = window.innerWidth < 768 ? 'mobile' : 'desktop';
  }
}
