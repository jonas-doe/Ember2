import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | team-redirect', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:team-redirect');

    assert.ok(route);
  });
});
