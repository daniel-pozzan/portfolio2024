import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { SkillType } from '../../../shared/enums/skill-type.enums';

@Component({
  selector: 'app-skill-icon-container',
  standalone: true,
  imports: [SkillIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skill-icon-container.component.html',
  styleUrl: './skill-icon-container.component.scss'
})
export class SkillIconContainerComponent {

  public readonly SkillType = SkillType;
}
