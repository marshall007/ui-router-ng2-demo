import { browser, element, by } from 'protractor';

export class GcPortalNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nx-root h1')).getText();
  }
}
