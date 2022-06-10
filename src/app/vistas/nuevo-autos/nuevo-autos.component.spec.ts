import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAutosComponent } from './nuevo-autos.component';

describe('NuevoAutosComponent', () => {
  let component: NuevoAutosComponent;
  let fixture: ComponentFixture<NuevoAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
