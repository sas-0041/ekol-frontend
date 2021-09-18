import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSystemComponent } from './server-system.component';

describe('ServerSystemComponent', () => {
  let component: ServerSystemComponent;
  let fixture: ComponentFixture<ServerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
