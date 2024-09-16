import { Component, Input } from '@angular/core';
import { AboutIconComponent } from '../about-icon/about-icon.component';
import { AboutIconType } from '../../../shared/enums/about-icon-type.enums';
import { ColorType } from '../../../shared/enums/color-type.enums';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [AboutIconComponent],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {
  @Input() icon: AboutIconType = AboutIconType.LIGHTBULB;
  @Input() color: ColorType = ColorType.WHITE;
  @Input() text: string = '';
}
