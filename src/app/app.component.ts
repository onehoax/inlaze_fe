import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  template: `
    <div class="flex flex-col h-screen justify-between">
      <app-header> </app-header>
      <app-main></app-main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {}
