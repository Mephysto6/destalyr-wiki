import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkElfComponent } from './dark-elf.component';

describe('DarkElfComponent', () => {
  let component: DarkElfComponent;
  let fixture: ComponentFixture<DarkElfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkElfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkElfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
