import { Component } from '@angular/core';
import { ColorType } from '../../shared/enums/color-type.enums';
import { AboutIconType } from '../../shared/enums/about-icon-type.enums';
import { AboutSectionComponent } from '../../components/about/about-section/about-section.component';
import { AboutImageComponent } from '../../components/about/about-image/about-image.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutSectionComponent, AboutImageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  public readonly ColorType = ColorType;
  public readonly AboutIconType = AboutIconType;

  public readonly cardList = {
    title: 'About me',
    description: 'I am a web developer living in Essen, North Rhine-Westphalia, Germany. With over two years of experience in software development, I specialize in building user-friendly and efficient web applications. Beyond coding, I am a food enthusiast who loves exploring new cuisines and experimenting in the kitchen. I enjoy reading about science and artificial intelligence, always eager to learn how these fields are shaping the future.',
    cards: [
      {
        icon: AboutIconType.LIGHTBULB,
        color: ColorType.LIGHT_ORANGE,
        text: 'I believe in continuous learning and pushing the boundaries of what technology can achieve to improve everyday life.'
      },
      {
        icon: AboutIconType.PUZZLE,
        color: ColorType.LIGHT_ORANGE,
        text: 'In my professional journey, I strive to create meaningful connections and contribute to projects that challenge and inspire me. Let’s connect and create something amazing together!'
      },

    ]
  }
}
