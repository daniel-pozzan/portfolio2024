import { Component, Input } from '@angular/core';
import { MainButtonComponent } from '../../components/buttons/main-button/main-button.component';
import { SocialButtonComponent } from '../../components/buttons/social-button/social-button.component';
import { SocialButtonType } from '../../shared/enums/social-button-type.enums';
import { MainButtonType } from '../../shared/enums/main-button-type.enums';
import { ViewportType } from '../../shared/enums/viewport-type.enums';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [MainButtonComponent, SocialButtonComponent],
  templateUrl: './front.component.html',
  styleUrl: './front.component.scss'
})
export class FrontComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;

  public SocialButtonType = SocialButtonType;
  public MainButtonType = MainButtonType;
}
