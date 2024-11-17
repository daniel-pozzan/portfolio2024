import { Component } from '@angular/core';

@Component({
  selector: 'app-go-up-icon',
  standalone: true,
  imports: [],
  templateUrl: './go-up-icon.component.html',
  styleUrl: './go-up-icon.component.scss'
})
export class GoUpIconComponent {
    goUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
