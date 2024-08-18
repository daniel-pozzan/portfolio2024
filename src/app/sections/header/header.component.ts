import { Component, Input } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { ViewportType } from '../../shared/enums/viewport-type.enums';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;
}
