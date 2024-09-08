import { Component } from '@angular/core';
import { MainButtonComponent } from '../../components/buttons/main-button/main-button.component';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './front.component.html',
  styleUrl: './front.component.scss'
})
export class FrontComponent {

}
