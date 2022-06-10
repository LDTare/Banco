import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEmpleadosComponent } from './nuevo-empleados.component';

describe('NuevoEmpleadosComponent', () => {
  let component: NuevoEmpleadosComponent;
  let fixture: ComponentFixture<NuevoEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
