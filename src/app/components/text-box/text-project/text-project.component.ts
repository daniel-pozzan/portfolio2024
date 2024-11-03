import { Component, Input } from '@angular/core';
import { MainButtonComponent } from '../../buttons/main-button/main-button.component';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';


@Component({
  selector: 'app-text-project',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './text-project.component.html',
  styleUrl: './text-project.component.scss'
})
export class TextProjectComponent {
  @Input() title: string = 'Project';
  @Input() subtitle: string = 'Lorem | Ipsum | Dolor | Sit | Amet';
  @Input() text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nunc euismod, consectetur nunc eu, aliquam nunc. Nulla nec nunc euismod, consectetur nunc eu, aliquam nunc.';

  public readonly MainButtonType = MainButtonType;
}
