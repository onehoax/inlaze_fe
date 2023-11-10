import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main>
      <div class="m-5">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
})
export class MainComponent {}
