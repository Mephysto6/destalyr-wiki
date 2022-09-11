import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUsesFirewaterComponent } from './magic-uses-firewater.component';

describe('MagicUsesFirewaterComponent', () => {
  let component: MagicUsesFirewaterComponent;
  let fixture: ComponentFixture<MagicUsesFirewaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicUsesFirewaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicUsesFirewaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
