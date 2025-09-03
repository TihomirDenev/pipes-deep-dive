import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  let pipe: TemperaturePipe;

  beforeEach(() => {
    pipe = new TemperaturePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert Celsius to Fahrenheit', () => {
    expect(pipe.transform('0', 'cel', 'fah')).toBe('32.00 °F');
    expect(pipe.transform('100', 'cel', 'fah')).toBe('212.00 °F');
  });

  it('should convert Fahrenheit to Celsius', () => {
    expect(pipe.transform('32', 'fah', 'cel')).toBe('0.00 °C');
    expect(pipe.transform('212', 'fah', 'cel')).toBe('100.00 °C');
  });

  it('should return same value when input and output types are same', () => {
    expect(pipe.transform('25', 'cel', 'cel')).toBe('25.00 °C');
    expect(pipe.transform('77', 'fah', 'fah')).toBe('77.00 °F');
  });
});
