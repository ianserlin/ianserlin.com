Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/'
  });

  this.route('coaching', {
    path: '/secret-mentor'
  });
  
  this.route('meteordevshop1', {
  	path: '/meteordevshop1',
  	action: function(){
  		location.href = "https://docs.google.com/presentation/d/1qCnO8t868CVY2N9Bpr52ULXYh8wn3idPgCesUK-jZ0s/edit?usp=sharing";
  	}
  });
});