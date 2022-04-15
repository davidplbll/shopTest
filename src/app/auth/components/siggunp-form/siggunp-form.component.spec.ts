import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiggunpFormComponent } from './siggunp-form.component';

describe('SiggunpFormComponent', () => {
  let component: SiggunpFormComponent;
  let fixture: ComponentFixture<SiggunpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiggunpFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiggunpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
