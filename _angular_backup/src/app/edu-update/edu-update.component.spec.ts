import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduUpdateComponent } from './edu-update.component';

describe('EduUpdateComponent', () => {
  let component: EduUpdateComponent;
  let fixture: ComponentFixture<EduUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
