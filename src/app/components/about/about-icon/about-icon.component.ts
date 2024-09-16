import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutIconType } from '../../../shared/enums/about-icon-type.enums';
import { ColorType } from '../../../shared/enums/color-type.enums';

@Component({
  selector: 'app-about-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-icon.component.html',
  styleUrl: './about-icon.component.scss'
})
export class AboutIconComponent {
  @Input() icon: AboutIconType = AboutIconType.LIGHTBULB; 
  @Input() color: ColorType = ColorType.WHITE;

  public readonly AboutIconType = AboutIconType;
}
