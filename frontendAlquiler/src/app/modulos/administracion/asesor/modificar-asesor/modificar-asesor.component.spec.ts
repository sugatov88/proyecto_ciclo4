import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAsesorComponent } from './modificar-asesor.component';

describe('ModificarAsesorComponent', () => {
  let component: ModificarAsesorComponent;
  let fixture: ComponentFixture<ModificarAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
