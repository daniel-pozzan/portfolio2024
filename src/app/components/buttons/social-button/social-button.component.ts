import { Component, Input } from '@angular/core';
import { SocialButtonType } from '../../../shared/enums/social-button-type.enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.scss'
})
export class SocialButtonComponent {
  @Input() type: SocialButtonType = SocialButtonType.GITHUB;

  public SocialButtonType = SocialButtonType;
  public isActive = false;

  activate() {
    this.isActive = true;
    setTimeout(() => {
      this.isActive = false;
    }, 1000)
  }
}
