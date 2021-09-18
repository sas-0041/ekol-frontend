import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentezSoftwareComponent } from './sentez-software.component';

describe('SentezSoftwareComponent', () => {
  let component: SentezSoftwareComponent;
  let fixture: ComponentFixture<SentezSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentezSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentezSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
