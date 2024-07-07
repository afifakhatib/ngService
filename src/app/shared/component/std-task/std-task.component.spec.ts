import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTaskComponent } from './std-task.component';

describe('StdTaskComponent', () => {
  let component: StdTaskComponent;
  let fixture: ComponentFixture<StdTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
