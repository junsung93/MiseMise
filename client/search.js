import {Session} from 'meteor/session';

Session.setDefault('dataList');

Template.search.events({
    'click #searchBtn' : function (event) {
        var searchBox = $('#searchBox').val();

        console.log(searchBox);

        Meteor.call('getList',searchBox, function (err, res) {
            console.log(res);
        });
    }
});

/*
Template.search.helpers({
    dList : function () {
        var list = Session.get('dataList');

        return list;
    }
});
*/
