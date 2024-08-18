import { Component, Input } from '@angular/core';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';
import { ViewportType } from '../../../shared/enums/viewport-type.enums';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;
  @Input() type: MainButtonType;
  @Input() label: string;

  constructor() {
    this.type = MainButtonType.DEFAULT;
    this.label = 'Text'
  }
}
