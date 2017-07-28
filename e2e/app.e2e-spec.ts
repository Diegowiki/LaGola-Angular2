import { LaGolaPage } from './app.po';

describe('la-gola App', () => {
  let page: LaGolaPage;

  beforeEach(() => {
    page = new LaGolaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
