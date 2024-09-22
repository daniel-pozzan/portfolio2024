import { Component } from '@angular/core';
import { TextSkillsComponent } from '../../components/text-box/text-skills/text-skills.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TextSkillsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
