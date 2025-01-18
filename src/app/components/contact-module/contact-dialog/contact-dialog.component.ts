import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @Input() title: string = '';
  @Input() message: string = '';
  isVisible: boolean = false;

  open() {
    this.renderer.addClass(document.body, 'no-scroll');
    this.isVisible = true;
  }

  close() {
    this.renderer.removeClass(document.body, 'no-scroll');
    this.isVisible = false;
  }

}
