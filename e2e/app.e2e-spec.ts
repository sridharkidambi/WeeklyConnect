import { WeeklyConnectPage } from './app.po';

describe('weekly-connect App', function() {
  let page: WeeklyConnectPage;

  beforeEach(() => {
    page = new WeeklyConnectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
