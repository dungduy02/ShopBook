import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBookComponent } from './shop-book.component';

describe('ShopBookComponent', () => {
  let component: ShopBookComponent;
  let fixture: ComponentFixture<ShopBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
