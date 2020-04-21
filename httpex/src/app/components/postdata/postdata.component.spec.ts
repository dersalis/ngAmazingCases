import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdataComponent } from './postdata.component';

describe('PostdataComponent', () => {
  let component: PostdataComponent;
  let fixture: ComponentFixture<PostdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
