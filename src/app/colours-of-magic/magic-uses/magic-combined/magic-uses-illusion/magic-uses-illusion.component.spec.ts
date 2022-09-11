import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesIllusionComponent } from './magic-uses-illusion.component';

describe('MagicUsesIllusionComponent', () => {
  let component: MagicUsesIllusionComponent;
  let fixture: ComponentFixture<MagicUsesIllusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesIllusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesIllusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
