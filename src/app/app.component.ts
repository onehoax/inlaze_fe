import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  template: `
    <div class="flex flex-col h-screen justify-between">
      <app-header></app-header>
      <app-main></app-main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {}
