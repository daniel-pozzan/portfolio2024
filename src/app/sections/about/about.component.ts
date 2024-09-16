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
    description: 'Hi, I am a Front-end deverloper based in München, Germany(....)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor sem non tempus convallis. Integer et justo vitae urna finibus eleifend sit amet porttitor sapien. Donec sollicitudin massa vel lorem vestibulum efficitur. ',
    cards: [
      {
        icon: AboutIconType.LIGHTBULB,
        color: ColorType.LIGHT_ORANGE,
        text: 'Some personal thing to share(...) Donec ut imperdiet diam, et convallis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      },
      {
        icon: AboutIconType.PUZZLE,
        color: ColorType.LIGHT_ORANGE,
        text: 'Some personal thing to share(...) Donec ut imperdiet diam, et convallis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      },

    ]
  }
}
