import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatsysComponent } from './meatsys.component';

describe('MeatsysComponent', () => {
  let component: MeatsysComponent;
  let fixture: ComponentFixture<MeatsysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatsysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
