import { moduleForModel, test } from 'ember-qunit';

moduleForModel('instructor', 'Unit | Model | instructor', {
  // Specify the other units that are required for this test.
  needs: ['model:cohort', 'model:user']
});

test('it exists', function (assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
