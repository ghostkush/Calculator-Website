import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivformComponent } from './divform.component';

describe('DivformComponent', () => {
  let component: DivformComponent;
  let fixture: ComponentFixture<DivformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
