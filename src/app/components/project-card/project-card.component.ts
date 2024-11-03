import { Component, Input } from '@angular/core';
import { TextProjectComponent } from '../text-box/text-project/text-project.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TextProjectComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() image?: string;
  @Input() title?: string;
  @Input() reverse: boolean = false;
}
