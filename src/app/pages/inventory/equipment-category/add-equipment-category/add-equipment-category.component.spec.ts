import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentCategoryComponent } from './add-equipment-category.component';

describe('AddEquipmentCategoryComponent', () => {
  let component: AddEquipmentCategoryComponent;
  let fixture: ComponentFixture<AddEquipmentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
