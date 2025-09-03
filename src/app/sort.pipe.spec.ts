import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  let pipe: SortPipe;

  beforeEach(() => {
    pipe = new SortPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort numbers in ascending order', () => {
    const input = [3, 1, 2];
    const expected = [1, 2, 3];
    expect(pipe.transform(input, 'asc')).toEqual(expected);
  });

  it('should sort numbers in descending order', () => {
    const input = [3, 1, 2];
    const expected = [3, 2, 1];
    expect(pipe.transform(input, 'desc')).toEqual(expected);
  });

  it('should sort strings in ascending order', () => {
    const input = ['banana', 'apple', 'cherry'];
    const expected = ['apple', 'banana', 'cherry'];
    expect(pipe.transform(input, 'asc')).toEqual(expected);
  });

  it('should sort strings in descending order', () => {
    const input = ['banana', 'apple', 'cherry'];
    const expected = ['cherry', 'banana', 'apple'];
    expect(pipe.transform(input, 'desc')).toEqual(expected);
  });
});
