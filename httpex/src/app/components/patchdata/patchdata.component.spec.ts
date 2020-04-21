import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchdataComponent } from './patchdata.component';

describe('PatchdataComponent', () => {
  let component: PatchdataComponent;
  let fixture: ComponentFixture<PatchdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
