import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TemperaturePipe, SortPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have currentTemperatures defined', () => {
    expect(component.currentTemperatures).toBeDefined();
    expect(Object.keys(component.currentTemperatures).length).toBeGreaterThan(0);
  });

  it('should have historicTemperatures defined and sorted', () => {
    expect(component.historicTemperatures).toBeDefined();
    expect(component.historicTemperatures.length).toBeGreaterThan(0);
    
    // Check if the array is sorted in ascending order
    const isSorted = component.historicTemperatures.every((val, i, arr) => 
      i === 0 || val >= arr[i - 1]
    );
    expect(isSorted).toBeTrue();
  });

  it('should reset temperature when onReset is called', () => {
    const initialValue = component.historicTemperatures[0];
    component.onReset(0);
    expect(component.historicTemperatures[0]).not.toBe(initialValue);
  });
});
