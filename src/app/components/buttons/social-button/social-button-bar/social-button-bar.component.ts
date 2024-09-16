import { Component } from '@angular/core';
import { SocialButtonComponent } from '../social-button.component';
import { SocialButtonType } from '../../../../shared/enums/social-button-type.enums';

@Component({
  selector: 'app-social-button-bar',
  standalone: true,
  imports: [SocialButtonComponent],
  templateUrl: './social-button-bar.component.html',
  styleUrl: './social-button-bar.component.scss'
})
export class SocialButtonBarComponent {

  public readonly SocialButtonType = SocialButtonType;
}
