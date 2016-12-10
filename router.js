/*Router.configure({
    layoutTemplate: 'layout'
});*/
Router.route('/', {
    name : 'layout',
    template : 'layout'
});

Router.route('/search', {
    name : 'search',
    template : 'search'
});

Router.route('/infoPage', {
    name : 'infoPage',
    template : 'infoPage'
});