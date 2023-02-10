import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHolderComponent } from './people-holder.component';

describe('PeopleHolderComponent', () => {
  let component: PeopleHolderComponent;
  let fixture: ComponentFixture<PeopleHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
