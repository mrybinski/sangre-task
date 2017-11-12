import * as fetcher from '../utility/fetcher';
import { showCountry, REQUEST_COUNTRY_DATA, RECEIVE_COUNTRY_DATA, COUNTRY_DATA_ERROR, SHOW_COUNTRY } from '../data/dataActions';
import * as cache from '../data/dataCache';

describe('dataActions', () => {
  describe('showCountry', () => {
    beforeAll(() => {
      require('es6-promise/auto');
    });

    it('should call request before trying to fetch', (done) => {
      // arrange
      const data = {};
      const calls = [];
      const country = 'Poland';
      const state = {

      };

      const getState = () => state;
      const dispatch = (act) => { calls.push(act.type); };

      spyOn(fetcher, 'default').and.callFake(() => {
        calls.push('fetch');
        return Promise.resolve((data));
      });
      // act
      const action = showCountry(country);

      // act & assert
      action(dispatch, getState).then(() => {
        expect(calls[0]).toEqual(REQUEST_COUNTRY_DATA);
        expect(calls[1]).toEqual('fetch');
        done();
      }).catch(() => {
        done.fail();
      });
    });

    it('should pass received data to receive action', (done) => {
      // arrange
      const data = {
        population: 12,
      };
      const dispatch = jasmine.createSpy('dispatch');
      const country = 'Poland';
      const state = {

      };

      const getState = () => state;

      spyOn(fetcher, 'default').and.callFake(() => Promise.resolve((data)));
      // act & assert
      const action = showCountry(country);

      action(dispatch, getState).then(() => {
        expect(dispatch.calls.allArgs()).toContain(jasmine.objectContaining([{
          type: RECEIVE_COUNTRY_DATA,
          countryData: data,
          country,
        }]));
        done();
      }).catch(() => {
        done.fail();
      });
    });

    it('should dispatch error action when failing', (done) => {
      // arrange
      const dispatch = jasmine.createSpy('dispatch');
      const country = 'Poland';

      spyOn(fetcher, 'default').and.callFake(() => new Promise(() => {
        throw new Error('error');
      }));
      const state = {

      };

      const getState = () => state;

      // act & assert
      const action = showCountry(country);

      action(dispatch, getState).then(() => {
        done.fail();
      }).catch(() => {
        expect(dispatch.calls.allArgs()).toContain(jasmine.objectContaining([{
          type: COUNTRY_DATA_ERROR,
          country,
        }]));
        done();
      });
    });

    it('should dispatch show country action if cache contains country data', () => {
      // arrange
      const data = {
        population: 12,
      };
      const dispatch = jasmine.createSpy('dispatch');
      const country = 'Poland';
      const state = {
        data: {
          cache: {
            Poland: 'test',
          },
        },
      };

      const getState = () => state;
      spyOn(cache, 'contains').and.callFake(() => true);
      spyOn(fetcher, 'default').and.callFake(() => Promise.resolve(data));
      // act & assert
      const action = showCountry(country);

      action(dispatch, getState);

      expect(dispatch.calls.mostRecent().args).toEqual([{
        type: SHOW_COUNTRY,
        country,
      }]);

      expect(fetcher.default).not.toHaveBeenCalled();
    });
  });
});
