const expectancyHandler = require('../../app/handlers/expectancy');
const apiInfo = require('../../app/api');

describe('expectancy', () => {
  describe('createOptions', () => {
    it('should pass country parameter from request', () => {
      // arrange
      spyOn(apiInfo, 'url').and.returnValue('https://api.url.com');
      spyOn(apiInfo, 'version').and.returnValue('1');
      const requestParameters = { country: 'Poland' };
      // act
      const apiOptionsArray = expectancyHandler.createOptions(requestParameters);

      // assert
      expect(apiOptionsArray.map(options => options.url)).toEqual([
        'https://api.url.com/1/life-expectancy/total/male/Poland/1952-01-01',
        'https://api.url.com/1/life-expectancy/total/female/Poland/1952-01-01',
      ]);
    });
  });

  describe('handleSingleSuccess', () => {
    it('should take expectancy only from result', () => {
      // arrange
      const expectancy = 80.87658913380378;
      const returnedData = {
        dob: '1952-03-11',
        country: 'United Kingdom',
        total_life_expectancy: expectancy,
        sex: 'male',
      };

      // act
      const singleResult = expectancyHandler.handleSingleSuccess(returnedData);

      // assert
      expect(singleResult).toEqual(expectancy);
    });
  });

  describe('handleMultiSuccess', () => {
    it('should count average of expectancies', () => {
      // arrange
      const expectancyMale = 80;
      const expectancyFemale = 84;
      const mergerDataFromRequests = [expectancyMale, expectancyFemale];

      // act
      const multiResult = expectancyHandler.handleMultiSuccess(mergerDataFromRequests);

      // assert
      // used toBeCloseTo because javascript can do strange things to floats
      expect(multiResult).toBeCloseTo(82, 1);
    });
  });
});
