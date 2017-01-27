/* eslint-env node */

require('dotenv').config();

module.exports = function (environment) {
  const ENV = {
    DS: {
      host: 'http://localhost:3333',
      namespace: 'api',
    },
    modulePrefix: 'daily-planner',
    environment,
    rootURL: '/',
    locationType: 'auto',

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: process.env.GITHUB_ID,
          redirectUri: 'http://localhost:4200',
          // scope: 'repo user'
        }
      }
    },

    'ember-simple-auth': {
      authenticationRoute: 'index',
    },

    'ember-simple-auth-token': {
      tokenPropertyName: 'access_token',
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
