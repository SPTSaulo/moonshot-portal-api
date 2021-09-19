import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformPolicyComponent } from './platform-policy.component';

describe('PlatformPolicyComponent', () => {
  let component: PlatformPolicyComponent;
  let fixture: ComponentFixture<PlatformPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
