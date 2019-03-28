import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaIconComponent } from './eva-icon.component';

describe('EvaIconComponent', () => {
  let component: EvaIconComponent;
  let fixture: ComponentFixture<EvaIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
