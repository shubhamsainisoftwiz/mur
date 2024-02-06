import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMakerComponent } from './add-maker.component';

describe('AddMakerComponent', () => {
  let component: AddMakerComponent;
  let fixture: ComponentFixture<AddMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
