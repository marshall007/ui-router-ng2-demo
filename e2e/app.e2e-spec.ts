import { GcPortalNg2Page } from './app.po';

describe('gc-portal-ng2 App', () => {
  let page: GcPortalNg2Page;

  beforeEach(() => {
    page = new GcPortalNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nx works!');
  });
});
