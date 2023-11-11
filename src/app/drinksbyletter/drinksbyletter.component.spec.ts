import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksbyletterComponent } from './drinksbyletter.component';

describe('DrinksbyletterComponent', () => {
  let component: DrinksbyletterComponent;
  let fixture: ComponentFixture<DrinksbyletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksbyletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinksbyletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
