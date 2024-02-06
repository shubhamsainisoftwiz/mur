import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCircularComponent } from './view-circular.component';

describe('ViewCircularComponent', () => {
  let component: ViewCircularComponent;
  let fixture: ComponentFixture<ViewCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCircularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
