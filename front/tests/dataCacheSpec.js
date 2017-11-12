import { get, save, contains } from '../data/dataCache';

describe('dataCache', () => {
  describe('get', () => {
    it('should return undefined when undefined cache and country passed', () => {
      // arrange

      // act
      const result = get();

      // assert
      expect(result).toBeUndefined();
    });

    it('should return undefined when empty cache passed', () => {
      // arrange
      const country = 'Poland';
      const dataState = {
        cache: {
          Argentina: {
            testProp: 'testValue',
          },
        },
      };

      // act
      const result = get(country, dataState);

      // assert
      expect(result).toBeUndefined();
    });

    it('should return cache content for country', () => {
      // arrange
      const country = 'Poland';
      const dataState = {
        cache: {
          Poland: {
            testProp: 'testValue',
          },
        },
      };

      // act
      const result = get(country, dataState);

      // assert
      expect(result).toEqual({
        testProp: 'testValue',
      });
    });
  });

  describe('save', () => {
    it('should not return same object', () => {
      // arrange
      const country = 'Poland';
      const countryData = {
        prop: 'propValue',
      };
      const dataState = {
        cache: {
          Argentina: {
            testProp: 'testValue',
          },
        },
      };

      // act
      const result = save(country, countryData, dataState);

      // assert
      expect(result).not.toBe(dataState);
    });

    it('should save country data in cache', () => {
      // arrange
      const country = 'Poland';
      const countryData = {
        prop: 'propValue',
      };
      const dataState = {
        cache: {
          Argentina: {
            testProp: 'testValue',
          },
        },
      };

      // act
      const result = save(country, countryData, dataState);

      // assert
      expect(result.Poland).toEqual({
        prop: 'propValue',
      });
    });
  });

  describe('contains', () => {
    it('should return false if cache undefined', () => {
      // arrange
      const country = 'Poland';

      // act
      const result = contains(country);

      // assert
      expect(result).toBeFalsy();
    });

    it('should return false if cache does not contain country', () => {
      // arrange
      const country = 'Poland';

      const dataState = {
        cache: {
          Argentina: {
            testProp: 'testValue',
          },
        },
      };

      // act
      const result = contains(country, dataState);

      // assert
      expect(result).toBeFalsy();
    });

    it('should return true if cache contains country', () => {
      // arrange
      const country = 'Poland';

      const dataState = {
        cache: {
          Argentina: {
            testProp: 'testValue',
          },
          Poland: {
            prop: 'propValue',
          },
        },
      };

      // act
      const result = contains(country, dataState);

      // assert
      expect(result).toBeTruthy();
    });
  });
});
