import { Component, Inject, Input } from '@angular/core';
import { SocialButtonType } from '../../../shared/enums/social-button-type.enums';
import { CommonModule, DOCUMENT } from '@angular/common';
import { environment } from '../../../../environments/environment';

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

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}

  activate(location: string) {
    this.isActive = true;
    setTimeout(() => {
      this.isActive = false;
      this.navigate(location);
    }, 1000)
  }

  navigate(location: string) {
    console.log(location);
    switch (location) {
      case 'github':
        this.document.defaultView?.open(environment.github, '_blank');
        break;
      case 'linkedIn':
        this.document.defaultView?.open(environment.linkedIn, '_blank');
        break;
      default:
        console.warn('Unknown location: ', location);
    }
    
  }
}
