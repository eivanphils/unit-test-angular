import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestComponent } from './first-test.component';

describe('FirstTestComponent', () => {
  let component: FirstTestComponent;
  let fixture: ComponentFixture<FirstTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as name 'phils'`, () => {
    expect(component.name).toEqual('phils');
  });

  it('should render name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('hello world! phils');
  });

  it('enabled should be true', () => {
    expect(component.enabled).toBe(true);
  });

  it('visble should be false', () => {
    expect(component.visible).toBe(false);
  });

});
