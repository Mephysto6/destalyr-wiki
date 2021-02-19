import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodElfComponent } from './wood-elf.component';

describe('WoodElfComponent', () => {
  let component: WoodElfComponent;
  let fixture: ComponentFixture<WoodElfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodElfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodElfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
