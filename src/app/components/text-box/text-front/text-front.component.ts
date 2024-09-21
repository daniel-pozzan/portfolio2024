import { Component, Input } from '@angular/core';
import { MainButtonComponent } from '../../buttons/main-button/main-button.component';
import { ViewportType } from '../../../shared/enums/viewport-type.enums';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';

@Component({
  selector: 'app-text-front',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './text-front.component.html',
  styleUrl: './text-front.component.scss'
})
export class TextFrontComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;

  public readonly MainButtonType = MainButtonType;
}
