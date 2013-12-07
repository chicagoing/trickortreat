App.ApplicationView = Ember.View.extend({
  classNames: ['wrapper'],
  classNameBindings: ['controller.isHome'],
  didInsertElement: function() {
    // $('.nav-primary').on('mouseover', function() {
    //   $('.nav-secondary').toggle();
    // });
  }
});