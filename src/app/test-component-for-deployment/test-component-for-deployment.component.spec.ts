import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestComponentForDeploymentComponent } from './test-component-for-deployment.component';

describe('TestComponentForDeploymentComponent', () => {
  let component: TestComponentForDeploymentComponent;
  let fixture: ComponentFixture<TestComponentForDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentForDeploymentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponentForDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
