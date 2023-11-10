import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <div
        class="h-14 sm:h-16 bg-amber-900 rounded-b-xl shadow-lg shadow-stone-300"
      >
        <a target="_self" href="/">
          <h1 class="text-2xl sm:text-4xl font-bold text-orange-500 p-3">
            The Cocktail DB
          </h1>
        </a>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
