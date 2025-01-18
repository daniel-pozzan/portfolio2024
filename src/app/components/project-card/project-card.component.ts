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
  @Input() title: string = 'Project';
  @Input() subtitle: string = 'Lorem | Ipsum | Dolor | Sit | Amet';
  @Input() text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nunc euismod, consectetur nunc eu, aliquam nunc. Nulla nec nunc euismod, consectetur nunc eu, aliquam nunc.';
  @Input() reverse: boolean = false;
  @Input() projectHref?: string;
  @Input() githubHref?: string;
}
