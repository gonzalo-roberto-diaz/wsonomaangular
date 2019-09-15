import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogService } from './catalog.service';

describe('AserviceComponent', () => {
  let component: CatalogService;
  let fixture: ComponentFixture<CatalogService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
