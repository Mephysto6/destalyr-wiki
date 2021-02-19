import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicCreationComponent } from './magic-creation.component';

describe('MagicCreationComponent', () => {
  let component: MagicCreationComponent;
  let fixture: ComponentFixture<MagicCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
