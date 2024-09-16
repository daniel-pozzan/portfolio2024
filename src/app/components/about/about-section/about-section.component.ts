import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCardComponent } from '../about-card/about-card.component';
import { AboutCard } from '../../../shared/interfaces/about-card.interface';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, AboutCardComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  @Input() cards: AboutCard[] = [];
  @Input() title: string = '';
  @Input() description: string = '';

}
