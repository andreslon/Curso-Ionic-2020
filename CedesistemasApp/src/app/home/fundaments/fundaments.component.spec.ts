import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundamentsComponent } from './fundaments.component';

describe('FundamentsComponent', () => {
  let component: FundamentsComponent;
  let fixture: ComponentFixture<FundamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
