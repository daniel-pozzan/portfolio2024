import { Component } from '@angular/core';
import { TextSkillsComponent } from '../../components/text-box/text-skills/text-skills.component';
import { SkillType } from '../../shared/enums/skill-type.enums';
import { SkillIconContainerComponent } from '../../components/skills/skill-icon-container/skill-icon-container.component';
import { MainButtonType } from '../../shared/enums/main-button-type.enums';
import { MainButtonComponent } from '../../components/buttons/main-button/main-button.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TextSkillsComponent, SkillIconContainerComponent, MainButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  public readonly SkillType = SkillType;
  public readonly MainButtonType = MainButtonType;
}
