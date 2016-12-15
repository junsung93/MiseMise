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
            document.getElementById('stationInfo').style.height = "210px";
            document.getElementById('source').style.height = "100px";
        }
        else {
            document.getElementById('underBar').style.height = "430px";
            document.getElementById('emo').style.height = "500px";
            document.getElementById('emo').style.width = "500px";
            document.getElementById('detailName').style.height = 0;
            document.getElementById('stationInfo').style.height = 0;
            document.getElementById('source').style.height = 0;
        }
    }
});
Template.state.helpers({
   "getState" : function () {
       var state;
       var CAIGrade = Session.get('getCAIGrade');

       if (CAIGrade == 1) {
           state = "좋음";
       }
       else if (CAIGrade == 2) {
           state = "보통";
       }
       else if (CAIGrade == 3) {
           state = "나쁨";
       }
       else if (CAIGrade == 4) {
           state = "매우 나쁨";
       }
       else {
           state = "API문제 OR 측정소문제";
       }

       return state;
   }
});
Template.CAIGrade.helpers({
    "getCAIGrade" : function () {
        var src;
        var CAIGrade = Session.get('getCAIGrade');

        if (CAIGrade == 1) {
            src = "/images/good.png";
        }
        else if (CAIGrade == 2) {
            src = "/images/normal.png";
        }
        else if (CAIGrade == 3) {
            src = "/images/bad.png";
        }
        else if (CAIGrade == 4) {
            src = "/images/veryBad.png";
        }
        else {
            src = "/images/q.png";
        }

        return src;
    }
});
Template.PM10Grade.helpers({
    "getPM10Grade" : function () {
        var src;
        var CAIGrade = Session.get('getPM10Grade');

        if (CAIGrade == 1) {
            src = "/images/good.png";
        }
        else if (CAIGrade == 2) {
            src = "/images/normal.png";
        }
        else if (CAIGrade == 3) {
            src = "/images/bad.png";
        }
        else if (CAIGrade == 4) {
            src = "/images/veryBad.png";
        }
        else {
            src = "/images/q.png";
        }

        return src;
    }
});
Template.PM25Grade.helpers({
    "getPM25Grade" : function () {
        var src;
        var CAIGrade = Session.get('getPM25Grade');

        if (CAIGrade == 1) {
            src = "/images/good.png";
        }
        else if (CAIGrade == 2) {
            src = "/images/normal.png";
        }
        else if (CAIGrade == 3) {
            src = "/images/bad.png";
        }
        else if (CAIGrade == 4) {
            src = "/images/veryBad.png";
        }
        else {
            src = "/images/q.png";
        }

        return src;
    }
});

/*
var lat;
var lon;

navigator.geolocation.getCurrentPosition(function (pos) {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    Session.set('getLat',lat);
    Session.set('getLon',lon);
    console.log(Session.get('getLat'));
    console.log(Session.get('getLon'));
});
*/


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
Meteor.call('getName',"stationName", function (err, res) {
    Session.set('getName',res);
});

Meteor.call('getCAIGrade',"CAIGrade",function (err, res) {
    Session.set('getCAIGrade',res);
});
Meteor.call('getPM10Grade',"PM10Grade",function (err, res) {
    Session.set('getPM10Grade',res);
});
Meteor.call('getPM25Grade',"PM25Grade",function (err, res) {
    Session.set('getPM25Grade',res);
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
Template.stationName.helpers({
    getName : function () {
        return Session.get('getName');
    }
});