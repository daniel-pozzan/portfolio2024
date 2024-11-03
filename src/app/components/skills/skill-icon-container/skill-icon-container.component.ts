import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { SkillType } from '../../../shared/enums/skill-type.enums';

@Component({
  selector: 'app-skill-icon-container',
  standalone: true,
  imports: [SkillIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skill-icon-container.component.html',
  styleUrl: './skill-icon-container.component.scss'
})
export class SkillIconContainerComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  public readonly SkillType = SkillType;

  ngAfterViewInit() {
    const swiperParams = {
      pagination: {
        clickable: true,
      },
      grabCursor: true,
      // autoplay: {
      //   delay: 2500,
      // },
      breakpoints: {
        320: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          grid: {
            rows: 3,
          },
          spaceBetween: 30,
        }
      }
    };
    Object.assign(this.swiperContainer.nativeElement, swiperParams);
    this.swiperContainer.nativeElement.initialize();
  }
}
