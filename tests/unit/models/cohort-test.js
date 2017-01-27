import { moduleForModel, test } from 'ember-qunit';

moduleForModel('cohort', 'Unit | Model | cohort', {
  // Specify the other units that are required for this test.
  needs: [
    'model:lesson',
    'model:invite',
    'model:student',
    'model:instructor',
  ],
});

test('it exists', function (assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
