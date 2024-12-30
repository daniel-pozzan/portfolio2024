import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SocialButtonComponent } from '../buttons/social-button/social-button.component';
import { SocialButtonType } from '../../shared/enums/social-button-type.enums';

@Component({
  selector: 'app-footer-box',
  standalone: true,
  imports: [LogoComponent, SocialButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterBoxComponent {
  public readonly SocialButtonType = SocialButtonType;
}
