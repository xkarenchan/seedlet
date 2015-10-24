if (Meteor.isClient) {
  Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
    }
  });

  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
  });

  Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
  });

  Template.createprofile.events({
    'submit form':function(event){
    var firstName = event.target.firstName.value;
    var lastName = event.target.lastName.value;
    var field = event.target.field.value;
    Meteor.users.update(
      {_id:Meteor.user()._id}, 
      {$set: 
        {
          "profile.firstName":firstName, 
          "profile.lastName":lastName,
          "profile.field":field}
        })
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

