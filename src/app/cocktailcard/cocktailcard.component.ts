import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktailcard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-gray-100 h-28 p-3 rounded-md shadow-md hover:shadow-xl transition ease-out duration-300"
    >
      {{ name }}
    </div>
  `,
})
export class CocktailcardComponent {
  @Input()
  name = '';
}
