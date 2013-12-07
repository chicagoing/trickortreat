App.Router.map(function() {
  this.resource('index', { path: '/' });
  this.resource('trick-or-treat', { path: '/trick-or-treat'});
  this.resource('donate', { path: '/donate'});
  this.resource('donate_request', { path: '/donate_request'});
  this.resource('donate_thanks_adult', { path: '/donate_thanks_adult'});
  this.resource('donate_thanks', { path: '/donate_thanks'});
  this.resource('statistics', { path: '/statistics'});
  this.resource('statistics_empty', { path: '/statistics_empty'});
  this.route('catchAll', { path: '*' });
});

App.Router.reopen({
  handleURL: function (url) {
    try {
      return this._super(url);
    } catch (error) {
      return this._super('/');
    }
  }
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    controller.set('isHome', false);
  }
});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('controllers.application.isHome', true);
  }
});