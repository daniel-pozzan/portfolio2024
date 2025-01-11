import { Component } from '@angular/core';
import { FrontComponent } from '../../sections/front/front.component';
import { AboutComponent } from '../../sections/about/about.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FrontComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
