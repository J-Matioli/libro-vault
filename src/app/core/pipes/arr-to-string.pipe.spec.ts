import { ArrToStringPipe } from './arr-to-string.pipe';

describe('ArrToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
