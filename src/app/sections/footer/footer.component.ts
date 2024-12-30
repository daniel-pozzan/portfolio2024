import { Component } from '@angular/core';
import { FooterBoxComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterBoxComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
