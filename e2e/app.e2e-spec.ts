import { NG2FormsTamplateFromScratchPage } from './app.po';

describe('ng2-forms-tamplate-from-scratch App', function() {
  let page: NG2FormsTamplateFromScratchPage;

  beforeEach(() => {
    page = new NG2FormsTamplateFromScratchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
