import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModPersonaComponent } from './mod-persona.component';

describe('ModPersonaComponent', () => {
  let component: ModPersonaComponent;
  let fixture: ComponentFixture<ModPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
