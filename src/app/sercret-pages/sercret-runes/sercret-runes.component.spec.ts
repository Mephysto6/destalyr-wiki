import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercretRunesComponent } from './sercret-runes.component';

describe('SercretRunesComponent', () => {
  let component: SercretRunesComponent;
  let fixture: ComponentFixture<SercretRunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercretRunesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercretRunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
