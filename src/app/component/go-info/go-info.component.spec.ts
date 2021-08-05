import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoInfoComponent } from './go-info.component';

describe('GoInfoComponent', () => {
  let component: GoInfoComponent;
  let fixture: ComponentFixture<GoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
