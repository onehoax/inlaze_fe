import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterlinkComponent } from './letterlink.component';

describe('LetterlinkComponent', () => {
  let component: LetterlinkComponent;
  let fixture: ComponentFixture<LetterlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterlinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetterlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
