import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillType } from '../../../shared/enums/skill-type.enums';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss'
})
export class SkillIconComponent {
  @Input() type: SkillType = SkillType.HTML;

  public readonly SkillType = SkillType;
}
