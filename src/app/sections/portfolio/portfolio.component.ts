import { Component } from '@angular/core';
import { TextHeadlineComponent } from '../../components/text-box/text-headline/text-headline.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TextHeadlineComponent, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
