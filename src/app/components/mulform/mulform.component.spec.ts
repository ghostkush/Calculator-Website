import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulformComponent } from './mulform.component';

describe('MulformComponent', () => {
  let component: MulformComponent;
  let fixture: ComponentFixture<MulformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
