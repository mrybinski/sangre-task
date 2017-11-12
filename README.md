# Sangre task

This is a repository for recruitment task. 

## Instructions

### Prerequisites

I assume you have a machine with Node installed. I used Node version v7.10.1.

### Installing

Please install following packages globally:

* jasmine
* karma
* karma-cli
* micro
* webpack
* webpack-dev-server

Quick command:

```
npm install -g jasmine karma karma-cli micro webpack webpack-dev-server
```

After cloning repository, please run following command:

```
npm install
```

To run microservice and website servers, please run:

```
npm start
```

By default, microservice will listen on http://localhost:3000, site will be hosted on http://localhost:3001. You can change it by updating ```start``` command in package.json (3 places to change, microservice address is passed to site by command line argument).

## Running the tests

To run microservice test, please run:

```
npm run test_server
```

To run React app tests, please run:

```
npm run test_front
```

## Built With

* React
  * ```prop-types```- I am used to it since it was part of React
  * ```react-notify-toast``` - simple toast for error handling
* Redux
  * [redux-thunk](https://github.com/gaearon/redux-thunk) -  for async requests and conditional dispatch
* [Micro](https://www.npmjs.com/package/micro) - I used micro for microservice
  * ```microrouter``` - basic routing
  * ```micro-cors``` - to allow CORS requests
  * ```request``` along with ```request-promise-native``` - to call external api with Promises
* ```throttle-debounce``` - for debouncing filter input
* ```url-join``` - for path combining
* ```font-awesome``` - for loading spinner
* ```classnames``` - I am used to it, it makes combining css class names in jsx trivial.
* ```bootstrap``` - for simple styling

## Dev dependencies

Among others:
* Webpack
* ```concurrently``` - for running two task with single command
* ```webpack-dev-server``` - for simplicity I used this dev server, I hope it is acceptable
* ```jasmine``` - for server testing
* ```karma``` with ```karma-jasmine``` - for React app testing, jasmine was not enough unfortunately. I made microservice first, that is why it is tested with jasmine not karma, did not change it. Another thing about testing - it uses Chrome browser. I was trying to use PhantomJs, but somewhere along the way it started to fail run test with syntax errors, and I could not repair it, also I did not wanted to waste time for such thing.

To ensure code style, I used ```eslint``` along with ```stylelint```, the former emits warning to compilation, latter is only for IDE. ```eslint``` is loaded with ```airbnb``` rules, with small modifications to suit my personal style.

## Acknowledgments

* Tested on both Chrome (61.0.3163.100) and IE (11.1770.14393.0), for the latter I had to install some pollyfills but it is working.
* Developed on Windows (10.0.14393) using Visual Studio Code.
* I did not have idea about mobile design, please let me know if I should work more on it.
* External API seems to have problem with data for regions (for example 'AFRICA').
* There are almost no comments in code, I do not think that comments should be overused. However, if you would like I can provide more comments for whole source.
