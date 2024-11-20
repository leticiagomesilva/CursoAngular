import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicaComponent } from './indica.component';

describe('IndicaComponent', () => {
  let component: IndicaComponent;
  let fixture: ComponentFixture<IndicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
