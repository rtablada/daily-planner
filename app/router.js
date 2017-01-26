import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('users');
  this.route('cohort', function () {
    this.route('new');
    this.route('invite', { path: '/:cohort_id/invites' });

    this.route('detail', {
      path: '/:cohort_id'
    });

    this.route('new-lesson', {
      path: '/:cohort_id/new-lesson'
    });
  });
});

export default Router;
