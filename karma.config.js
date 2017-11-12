const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'front/tests/**/*Spec.js',
    ],
    preprocessors: {
      'front/tests/**/*Spec.js': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
  });
};
