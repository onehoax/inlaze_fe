import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cocktailcard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="['/drink', id]">
      <div
        class="bg-gray-100 h-32 sm:h-40 overflow-hidden rounded-md shadow-md hover:shadow-2xl transition ease-out duration-300"
      >
        <img
          [src]="imgSrc"
          [alt]="imgAlt"
          class="w-full h-24 sm:h-32 object-cover"
        />
        <div class="h-8 flex justify-center items-center">
          <span class="text-stone-500 text-xs uppercase font-bold">
            {{ name }}
          </span>
        </div>
      </div>
    </a>
  `,
})
export class CocktailcardComponent {
  @Input()
  name = '';
  @Input()
  imgSrc = '';
  @Input()
  imgAlt = '';
  @Input()
  id = '';
}
