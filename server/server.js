var noop = function() {};

Meteor.setTimeout(function(){
	HTTP.get('http://www.ianserlin.com', noop);
	HTTP.get('http://ianserlin.com', noop);
}, 1000 * 60 * 29); // 29 minutes