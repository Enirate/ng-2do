import { Ng2doPage } from './app.po';

describe('ng-2do App', function() {
  let page: Ng2doPage;

  beforeEach(() => {
    page = new Ng2doPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
