import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktaildetailComponent } from './cocktaildetail.component';

describe('CocktaildetailComponent', () => {
  let component: CocktaildetailComponent;
  let fixture: ComponentFixture<CocktaildetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktaildetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktaildetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
