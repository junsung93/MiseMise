import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.underBar.events({
    'click #underBar': function () {
        if(document.getElementById('underBar').style.height == "430px") {
            document.getElementById('underBar').style.height = "1330px";
            document.getElementById('emo').style.height = 0;
            document.getElementById('emo').style.width = 0;
            document.getElementById('detailName').style.height = "600px";
        }
        else {
            document.getElementById('underBar').style.height = "430px";
            document.getElementById('emo').style.height = "500px";
            document.getElementById('emo').style.width = "500px";
            document.getElementById('detailName').style.height = 0;
        }
        console.log("click");
    }
});

var lat;
var lon;

navigator.geolocation.getCurrentPosition(function (pos) {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    console.log('lat : ', lat);
    console.log('lon : ', lon);
});


Meteor.call('getCAI', "CAI" ,function (err, res) {
    Session.set('getCAI', res);
});
Meteor.call('getTime',"dataTime",function (err, res) {
    Session.set('getTime',res);
});
Meteor.call('getPM10',"pm10Value",function (err, res) {
    Session.set('getPM10',res);
});
Meteor.call('getPM25',"pm25Value",function (err, res) {
    Session.set('getPM25',res);
});
Meteor.call('getO3Value',"o3Value",function (err, res) {
    Session.set('getO3Value',res);
});
Meteor.call('getNO2Value',"no2Value",function (err, res) {
    Session.set('getNO2Value',res);
});
Meteor.call('getCOValue',"coValue",function (err, res) {
    Session.set('getCOValue',res);
});
Meteor.call('getSO2Value',"so2Value",function (err,res) {
    Session.set('getSO2Value',res);
});

///
Template.CAI.helpers({
    getCAI : function () {
        return Session.get('getCAI');
    }
});
Template.dataTime.helpers({
    getDataTime : function () {
        return Session.get('getTime');
    }
});
Template.PM10.helpers({
    getPM10 : function () {
        return Session.get('getPM10');
    }
});
Template.PM25.helpers({
    getPM25 : function () {
        return Session.get('getPM25');
    }
});
Template.o3.helpers({
    getO3Value : function () {
        return Session.get('getO3Value');
    }
});
Template.no2.helpers({
    getNO2Value : function () {
        return Session.get('getNO2Value');
    }
});
Template.co.helpers({
    getCOValue : function () {
        return Session.get('getCOValue');
    }
});
Template.so2.helpers({
    getSO2Value : function () {
        return Session.get('getSO2Value');
    }
});