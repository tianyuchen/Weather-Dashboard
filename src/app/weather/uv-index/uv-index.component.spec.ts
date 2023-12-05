import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvIndexComponent } from './uv-index.component';

describe('UvIndexComponent', () => {
  let component: UvIndexComponent;
  let fixture: ComponentFixture<UvIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
