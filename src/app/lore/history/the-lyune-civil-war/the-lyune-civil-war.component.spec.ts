import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLyuneCivilWarComponent } from './the-lyune-civil-war.component';

describe('TheLyuneCivilWarComponent', () => {
  let component: TheLyuneCivilWarComponent;
  let fixture: ComponentFixture<TheLyuneCivilWarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheLyuneCivilWarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLyuneCivilWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
