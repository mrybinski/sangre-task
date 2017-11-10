const countriesHandler = require('../../app/handlers/population');
const apiInfo = require('../../app/api');

describe('population', () => {
  describe('createOptions', () => {
    it('should pass country parameter from request', () => {
      // arrange
      spyOn(apiInfo, 'url').and.returnValue('https://api.url.com');
      spyOn(apiInfo, 'version').and.returnValue('1');
      const request = { params: { country: 'Poland' } };
      // act
      const apiOptions = countriesHandler.createOptions(request);

      // assert
      expect(apiOptions.url).toEqual('https://api.url.com/1/population/Poland/today-and-tomorrow');
    });
  });

  describe('handleSuccess', () => {
    const invalidCases = [
      {
        total_population: [],
      },
      {
        total_population: [
          {
            date: '2017-11-10',
            population: 211834935,
          },
        ],
      },
    ];

    invalidCases.forEach((invCase) => {
      it('should throw when result data is incorrect', () => {
        // act & assert
        expect(() => { countriesHandler.handleSuccess(invCase); })
          .toThrow(new Error(`Incorrect population data: ${JSON.stringify(invCase)}`));
      });
    });

    it('should return population from result', () => {
      // arrange
      const apiData = {
        total_population: [
          {
            date: '2017-11-10',
            population: 211834935,
          },
          {
            date: '2017-11-11',
            population: 211839425,
          },
        ],
      };

      // act
      const result = countriesHandler.handleSuccess(apiData);

      // assert
      expect(result).toEqual(211834935);
    });
  });
});
