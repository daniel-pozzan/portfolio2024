import { Component, Input } from '@angular/core';
import { MainButtonComponent } from '../../components/buttons/main-button/main-button.component';
import { SocialButtonBarComponent } from '../../components/buttons/social-button/social-button-bar/social-button-bar.component';
import { SocialButtonType } from '../../shared/enums/social-button-type.enums';
import { MainButtonType } from '../../shared/enums/main-button-type.enums';
import { ViewportType } from '../../shared/enums/viewport-type.enums';
import { TextFrontComponent } from '../../components/text-box/text-front/text-front.component';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [MainButtonComponent, SocialButtonBarComponent, TextFrontComponent],
  templateUrl: './front.component.html',
  styleUrl: './front.component.scss'
})
export class FrontComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;

  public SocialButtonType = SocialButtonType;
  public MainButtonType = MainButtonType;
}
