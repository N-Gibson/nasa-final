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

  it('Should return a response if fetch is ok', () => {
    const result = dailyImage();
    expect(result).resolves.toEqual(mockResponse);
  });

  it('Should throw an error if the response is not ok' , () => {
    const response = 'There was an error fetching your photo';
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: false });
    });
    expect(dailyImage()).rejects.toEqual(response);
  });

  it('Should throw an error if there is a problem with the fetch', () => {
    expect(dailyImage()).rejects.toEqual('Error');
  });
});