import * as fetcher from '../utility/fetcher';
import { loadCountries, RECEIVE_COUNTRIES, REQUEST_COUNTRIES, ERROR_COUNTRIES } from '../countries/countriesActions';

describe('countriesActions', () => {
  describe('loadCountries', () => {
    beforeAll(() => {
      require('es6-promise/auto');
    });

    it('should call request before trying to fetch', (done) => {
      // arrange
      const data = {};
      const calls = [];
      const dispatch = (act) => { calls.push(act.type); };

      spyOn(fetcher, 'default').and.callFake(() => {
        calls.push('fetch');
        return Promise.resolve((data));
      });
      // act
      const action = loadCountries();

      // act & assert
      action(dispatch).then(() => {
        expect(calls[0]).toEqual(REQUEST_COUNTRIES);
        expect(calls[1]).toEqual('fetch');
        done();
      }).catch(() => {
        done.fail();
      });
    });

    it('should pass received data to receive action', (done) => {
      // arrange
      const data = {
        countries: ['Brazil', 'Poland'],
      };
      const dispatch = jasmine.createSpy('dispatch');

      spyOn(fetcher, 'default').and.callFake(() => Promise.resolve((data)));
      // act & assert
      const action = loadCountries();

      action(dispatch).then(() => {
        expect(dispatch.calls.mostRecent().args).toEqual([{
          type: RECEIVE_COUNTRIES,
          result: data,
        }]);
        done();
      }).catch(() => {
        done.fail();
      });
    });

    it('should dispatch error action when failing', (done) => {
      // arrange
      const dispatch = jasmine.createSpy('dispatch');

      spyOn(fetcher, 'default').and.callFake(() => {
        return new Promise(() => {
          throw new Error('error');
        });
      });
      // act & assert
      const action = loadCountries();

      action(dispatch).then(() => {
        done.fail();
      }).catch(() => {
        expect(dispatch.calls.mostRecent().args).toEqual([{
          type: ERROR_COUNTRIES,
        }]);
        done();
      });
    });
  });
});
