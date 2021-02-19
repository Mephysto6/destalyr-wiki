import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackingComponent } from './attacking.component';

describe('AttackingComponent', () => {
  let component: AttackingComponent;
  let fixture: ComponentFixture<AttackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
