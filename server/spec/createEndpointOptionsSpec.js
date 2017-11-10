const apiInfo = require('../app/api');
const { createEndpointOptions } = require('../app/utility/createEndpointOptions');

describe('createEndpointOptions', () => {
  it('should attach api url with version to passed url', () => {
    // arrange
    spyOn(apiInfo, 'url').and.returnValue('https://api.url.com');
    spyOn(apiInfo, 'version').and.returnValue('1');

    // act
    const apiOptions = createEndpointOptions('endpoint');

    // assert
    expect(apiOptions.url).toEqual('https://api.url.com/1/endpoint');
  });

  it('should attach other arguments as url path parts', () => {
    // arrange
    spyOn(apiInfo, 'url').and.returnValue('https://api.url.com');
    spyOn(apiInfo, 'version').and.returnValue('1');

    const param1 = 3;
    // act
    const apiOptions = createEndpointOptions('endpoint', param1, 'suffix');

    // assert
    expect(apiOptions.url).toEqual('https://api.url.com/1/endpoint/3/suffix');
  });

  it('should mark as json', () => {
    // arrange

    // act
    const apiOptions = createEndpointOptions('endpoint');

    // assert
    expect(apiOptions.json).toEqual(true);
  });
});

