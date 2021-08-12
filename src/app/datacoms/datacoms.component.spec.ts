import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacomsComponent } from './datacoms.component';

describe('DatacomsComponent', () => {
  let component: DatacomsComponent;
  let fixture: ComponentFixture<DatacomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
