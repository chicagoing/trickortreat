App.ShareLinksView = Ember.View.extend({
  template: Ember.Handlebars.compile(
  '<form name="share">' +
  '<fieldset>' +
    '<legend>Share the experience with your friends!</legend>' +
    '<p>Your team donation link: <a class="donation-link" href="#">http://tot4unicef.org/<wbr>teams/CrazyPumpkins</a></p>' +
    '<p class="btns">' +
      '<button class="fa fa-2x fa-facebook-square"></button>' +
      '<button class="fa fa-2x fa-twitter-square"></button>' +
      '<button class="fa fa-2x fa-google-plus-square"></button>' +
      '<button class="fa fa-2x fa-envelope"></button>' +
    '</p>' +
  '</fieldset>' +
'</form>')
});