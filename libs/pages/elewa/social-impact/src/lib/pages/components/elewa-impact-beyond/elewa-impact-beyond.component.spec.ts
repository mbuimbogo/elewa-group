import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElewaImpactBeyondComponent } from './elewa-impact-beyond.component';

describe('ElewaImpactBeyondComponent', () => {
  let component: ElewaImpactBeyondComponent;
  let fixture: ComponentFixture<ElewaImpactBeyondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElewaImpactBeyondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElewaImpactBeyondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
