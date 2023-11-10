import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div
        class="h-10 sm:h-12 bg-amber-900 rounded-t-xl shadow-lg shadow-stone-300 mx-2"
      >
        <div class="flex justify-center pt-2">
          <a target="_self" href="">
            <svg
              class="footer-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  clip-rule="evenodd"
                />
                <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                <path
                  fill-rule="evenodd"
                  d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622ZM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3Z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
          </a>
          <a target="_self" href="">
            <svg
              class="footer-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h16Zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5v-7h2.076a1 1 0 0 0 .949-.684l.443-1.329a.75.75 0 0 0-.712-.987H15V9c0-.5.5-1 1-1h2a1 1 0 0 0 1-1v-.686a.71.71 0 0 0-.519-.695C17.171 5.273 16 5.273 16 5.273c-2.5 0-4 1.727-4 3.227V11h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
