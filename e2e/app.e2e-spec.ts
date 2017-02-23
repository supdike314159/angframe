import { AngframePage } from './app.po';

describe('angframe App', () => {
  let page: AngframePage;

  beforeEach(() => {
    page = new AngframePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
