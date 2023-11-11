import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-letterlink',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="letter" class="text-xl uppercase font-bold mx-2">{{
      letter
    }}</a>
  `,
})
export class LetterlinkComponent {
  @Input()
  href = '';
  @Input()
  letter = '';
}
