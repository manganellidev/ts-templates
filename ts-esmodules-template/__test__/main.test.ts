import main from '../src/main/main.js';

describe('main module', () => {
  test('main', () => {
    expect(main()).toBe('main hereee!');
  });
});
