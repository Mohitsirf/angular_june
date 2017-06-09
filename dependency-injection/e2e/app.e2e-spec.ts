import { DependencyInjectionPage } from './app.po';

describe('dependency-injection App', () => {
  let page: DependencyInjectionPage;

  beforeEach(() => {
    page = new DependencyInjectionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
