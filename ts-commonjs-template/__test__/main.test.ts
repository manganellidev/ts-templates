import main from '../src/main/main';

describe('main module', () => {
  test('main', () => {
    expect(main()).toBe('main hereee!');
  });
});
