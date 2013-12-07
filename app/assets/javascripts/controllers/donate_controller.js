App.DonateController = Ember.Controller.extend({
  currentGoal: null,

  donationAmounts: [
    { amount: 1, goal: 'Protein biscuits for a hungry child.' },
    { amount: 6, goal: 'A soccer ball for children in refugee camps.' },
    { amount: 20, goal: 'Bed nets to protect families from deadly malaria-carrying mosquitoes.' },
    { amount: 35, goal: 'Vaccines to protect 50 kids from killer diseases.' },
    { amount: 70, goal: 'High-protein peanut paste to protect kids from malnutrition.' },
    { amount: 100, goal: 'A bicycle to deliver medicines.' },
    { amount: 240, goal: 'A School-in-a-Box kit that lets kids learn anywhere.' },
    { amount: 500, goal: 'A pump that provides clean water to a village or school.' }
    // { amount: '$2800', goal: 'A motorbike ambulance that travels easily.' }
  ],

  actions: {
    setGoal: function(donationAmount) {
      $(".goal").show();
      this.set('currentGoal', donationAmount.goal);
      $('#amount').val(donationAmount.amount);
    }
  }
});