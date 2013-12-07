// http://emberjs.com/guides/models/using-the-store/

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});