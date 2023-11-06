import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerClasificacionComponent } from './container-clasificacion.component';

describe('ContainerClasificacionComponent', () => {
  let component: ContainerClasificacionComponent;
  let fixture: ComponentFixture<ContainerClasificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerClasificacionComponent]
    });
    fixture = TestBed.createComponent(ContainerClasificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
