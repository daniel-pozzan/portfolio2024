import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonType } from '../../../shared/enums/main-button-type.enums';
import { ViewportType } from '../../../shared/enums/viewport-type.enums';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {
  @Input() viewport: ViewportType = ViewportType.DESKTOP;
  @Input() type: MainButtonType;
  @Input() label: string;
  @Input() disabled: boolean = false;
  @Output() clickTrigger: EventEmitter<void> = new EventEmitter<void>();

  public isActive: boolean = false;

  constructor() {
    this.type = MainButtonType.DEFAULT;
    this.label = 'Text'
  }

  handleClick() {
    this.isActive = true;
    this.clickTrigger.emit();
    setTimeout(() => {
      this.isActive = false;
    }, 1000);
  }


}
