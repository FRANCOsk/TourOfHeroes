import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', () => {
    const component = new AppComponent();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'TourOfHeroes'`, () => {
    const component = new AppComponent();
    expect(component.title).toEqual('TourOfHeroes');
  });
});
