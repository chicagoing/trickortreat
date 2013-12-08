App.Router.map(function() {
  this.resource('index', { path: '/' });
  this.resource('trick-or-treat', { path: '/trick-or-treat'});
  this.resource('donate', { path: '/donate'});
  this.resource('donate_request', { path: '/donate_request'});
  this.resource('donate_thanks_adult', { path: '/donate_thanks_adult'});
  this.resource('donate_thanks', { path: '/donate_thanks'});
  this.resource('statistics', { path: '/statistics'});
  this.resource('statistics_empty', { path: '/statistics_empty'});
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    controller.set('isHome', false);
  }
});

App.DonateRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    $("body").addClass("donate-page");
  }
});

App.StatisticsEmptyRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    $("body").addClass("is-account");
  }
});

App.StatisticsRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    $("body").addClass("is-account");
  }
});

App.DonateThanksRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    $("body").addClass("is-account");
  }
});

App.DonateThanksAdultRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    $("body").addClass("is-account");
  }
});

App.TrickOrTreatRoute = Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    $("body").removeClass("is-account");
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('trick-or-treat');
  }
});