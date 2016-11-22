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