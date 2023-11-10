import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <div
        class="h-16 bg-amber-900 rounded-b-xl shadow-lg shadow-stone-300 mx-2"
      >
        <h1 class="text-4xl font-bold text-orange-500 p-3">The Cocktail DB</h1>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
