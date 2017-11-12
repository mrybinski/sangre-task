const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'front/tests/globalParameters.js',
      'front/tests/**/*Spec.js',
    ],
    preprocessors: {
      'front/tests/**/*Spec.js': ['webpack'],
      'front/tests/globalParameters.js': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
