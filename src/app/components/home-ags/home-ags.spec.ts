import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgs } from './home-ags';

describe('HomeAgs', () => {
  let component: HomeAgs;
  let fixture: ComponentFixture<HomeAgs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAgs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAgs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
