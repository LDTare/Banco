import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAutosComponent } from './dashboard-autos.component';

describe('DashboardAutosComponent', () => {
  let component: DashboardAutosComponent;
  let fixture: ComponentFixture<DashboardAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
