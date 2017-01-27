import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({ location: config.locationType, rootURL: config.rootURL });

Router.map(function () {
  this.route('users');
  this.route('cohort', function () {
    this.route('new');
    this.route('invite', { path: '/:cohort_id/invites' });

    this.route('detail', { path: '/:cohort_id' }, function () {
      this.route('lesson', { path: '/lesson/:lesson_id' });
    });

    this.route('new-lesson', { path: '/:cohort_id/new-lesson' });

    this.route('lesson-edit', {
      path: '/:cohort_id/lessons/:lesson_id/edit'
    }, function () {
      this.route('instructor-notes');
      this.route('detail');
    });
  });
});

export default Router;
