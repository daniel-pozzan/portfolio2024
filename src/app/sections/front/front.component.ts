import { Component } from '@angular/core';
import { MainButtonComponent } from '../../components/buttons/main-button/main-button.component';
import { SocialButtonComponent } from '../../components/buttons/social-button/social-button.component';
import { SocialButtonType } from '../../shared/enums/social-button-type.enums';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [MainButtonComponent, SocialButtonComponent],
  templateUrl: './front.component.html',
  styleUrl: './front.component.scss'
})
export class FrontComponent {

  public SocialButtonType = SocialButtonType;
}
