import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavbComponent } from './menu-navb.component';

describe('MenuNavbComponent', () => {
  let component: MenuNavbComponent;
  let fixture: ComponentFixture<MenuNavbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
