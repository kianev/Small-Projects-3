import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have router-outlet', () => {
   let de = fixture.debugElement.query(By.directive(RouterOutlet));

   expect(de).not.toBe(null);
  });

});
