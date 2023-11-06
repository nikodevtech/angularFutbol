import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPartidosComponent } from './container-partidos.component';

describe('ContainerPartidosComponent', () => {
  let component: ContainerPartidosComponent;
  let fixture: ComponentFixture<ContainerPartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerPartidosComponent]
    });
    fixture = TestBed.createComponent(ContainerPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
