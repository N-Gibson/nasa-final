import { dailyImage, dailyImageOnDate } from '../../apiCalls';

describe('Api Calls', () => {
  const mockResponse = {
    hdurl: 'image_url_string',
    title: 'Nasa Image',
    explanation: 'This is a really great photo of a moon.'
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('Should return a photo response if fetch is ok', () => {
    const result = dailyImage();
    expect(result).resolves.toEqual(mockResponse);
  });
});