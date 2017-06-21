import { HotelRoomsAngularPage } from './app.po';

describe('hotel-rooms-angular App', () => {
  let page: HotelRoomsAngularPage;

  beforeEach(() => {
    page = new HotelRoomsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
