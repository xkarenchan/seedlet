if (Meteor.isClient) {
  Template.body.helpers({
    mentors: function() {
      return Meteor.users.find();
    }
  });

  Template.body.events({
    'submit .form-signin': function(event) {
        event.preventDefault();
        var emailVar = event.target.signinEmail.value;
        var passwordVar = event.target.signinPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    },

    'submit .register': function(event) {
        event.preventDefault();
        var firstNameVar = event.target.firstName.value;
        var lastNameVar = event.target.lastName.value;
        var fieldVar = event.target.field.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var passwordVar2 = event.target.registerPassword2.value;
        var menteeVar = event.target.isMentee.value;
        var mentorVar = event.target.isMentor.value;
        if (passwordVar != passwordVar2) {
            alert("Passwords don't match.");
        }
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: {
              firstName: firstNameVar,
              lastName: lastNameVar,
              field: fieldVar,
              isMentee: menteeVar === "on",
              isMentor: mentorVar === "on"
            }
        });
        event.target.firstName.value = "";
        event.target.lastName.value = "";
        event.target.field.value = "";
        event.target.registerEmail.value = "";
        event.target.registerPassword.value = "";
        event.target.registerPassword2.value = "";
        event.target.isMentee.value = "";
        event.target.isMentor.value = "";
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

