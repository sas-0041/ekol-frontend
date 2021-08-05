import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferansComponent } from './referans.component';

describe('ReferansComponent', () => {
  let component: ReferansComponent;
  let fixture: ComponentFixture<ReferansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
