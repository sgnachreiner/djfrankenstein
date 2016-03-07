Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'mainPage'});

Router.route('/motivation', 'motivation');
Router.route('/description', 'description');
Router.route('/results', 'results');
