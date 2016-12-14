import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.underBar.events({
    'click #underBar': function () {
        if(document.getElementById('underBar').style.height == "430px") {
            document.getElementById('underBar').style.height = "1330px";
            document.getElementById('emo').style.height = 0;
            document.getElementById('emo').style.width = 0;
        }
        else {
            document.getElementById('underBar').style.height = "430px";
            document.getElementById('emo').style.height = "500px";
            document.getElementById('emo').style.width = "500px";
        }
        console.log("click");
    }
});

Template.date.helpers({
    currentTime: function () {
        var d = new Date();
        var localD = d.toLocaleDateString();
        var localT = d.toLocaleTimeString();

        return localD + " " + localT;
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


var CAI;

Template.CAI.helpers({
    getCAI : function () {
        Meteor.call('getCAI', function (err,res) {
            console.log(res);
        });
        console.log(CAI);
        return CAI.res;
    }
});
