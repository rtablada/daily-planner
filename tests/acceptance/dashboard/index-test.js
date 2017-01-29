import { test } from 'qunit';
import moduleForAcceptance from 'daily-planner/tests/helpers/module-for-acceptance';
// import { authenticateSession } from 'daily-planner/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | dashboard/index');

test('visiting /dashboard/index', (assert) => {
  // const app = this.application;
  // authenticateSession(app, { userId: 1, otherData: 'some-data' });
  visit('/dashboard');


  andThen(() => {
    assert.equal(currentURL(), '/dashboard');
  });
});
