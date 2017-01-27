/* jshint node:true*/
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    codemirror: {
      addons: ['overlay'],
      modes: ['javascript', 'markdown', 'gfm'],
      keyMaps: ['sublime'],
      themes: []
    }
    // Add options here
  });

  app.import(`${app.bowerDirectory}/codemirror/addon/mode/overlay.js`);

  app.import('bower_components/highlightjs/styles/agate.css');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
