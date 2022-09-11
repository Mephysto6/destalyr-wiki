import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesExplosionComponent } from './magic-uses-explosion.component';

describe('MagicUsesExplosionComponent', () => {
  let component: MagicUsesExplosionComponent;
  let fixture: ComponentFixture<MagicUsesExplosionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesExplosionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesExplosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
