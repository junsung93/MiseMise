import {Meteor} from 'meteor/meteor';

var miseUrl = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=%EC%A2%8C%EB%8F%99&dataTerm=daily&pageNo=1&numOfRows=1&ServiceKey=eLjLjmBL%2BZOf41Jubc38O0WhKokYlqQnRuF055Vg7bTq8xWgpgh0YZrkrXxJt5HKUTTj%2F%2BvUVyoh%2BHMyMxf7Fw%3D%3D&ver=1.3&_returnType=json';
var listUrl1 = 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList?addr=';
var listUrl2 = '&pageNo=1&numOfRows=323&ServiceKey=eLjLjmBL%2BZOf41Jubc38O0WhKokYlqQnRuF055Vg7bTq8xWgpgh0YZrkrXxJt5HKUTTj%2F%2BvUVyoh%2BHMyMxf7Fw%3D%3D&_returnType=json';
var addrUrl = 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList?serviceKey=eLjLjmBL%2BZOf41Jubc38O0WhKokYlqQnRuF055Vg7bTq8xWgpgh0YZrkrXxJt5HKUTTj%2F%2BvUVyoh%2BHMyMxf7Fw%3D%3D&numOfRows=323&pageSize=323&pageNo=1&startPage=1&_returnType=json';

Meteor.methods({
    "getCAI" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].khaiValue;
    },
    "getTime" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].dataTime;
    },
    "getPM10" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].pm10Value;
    },
    "getPM25" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].pm25Value;
    },
    "getO3Value" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].o3Value;
    },
    "getNO2Value" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].no2Value;
    },
    "getCOValue" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].coValue;
    },
    "getSO2Value" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].so2Value;
    },
    "getName" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).parm.stationName;
    },
    "geta" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0];
    }
});

Meteor.methods({
    "getCAIGrade" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].khaiGrade;
    },
    "getPM10Grade" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].pm10Grade;
    },
    "getPM25Grade" : function () {
        return JSON.parse(HTTP.get(miseUrl).content).list[0].pm25Grade;
    }
});

Meteor.methods({
    "getAddr" : function () {
/*        var list = [];
        for (var i = 0; i < 322; i++) {
            list = JSON.parse(HTTP.get(addrUrl).content).list[i].addr;
        }
        console.log(list);*/
        return JSON.parse(HTTP.get(addrUrl).content).list[0].addr;
    }
});

/*Meteor.methods({
    "getTM" : function () {
        return JSON.parse(HTTP.get('https://apis.daum.net/local/geo/transcoord?apikey=d1840910eeeb691c5dcdf7a070fdeb7e&fromCoord=WGS84&y=35.189236&x=129.1650865&toCoord=TM&output=json').content)
    }
});*/

Meteor.methods({
    "getList" : function (searchBox) {
/*        var addrList = [];
        for(i = 0; i<323; i++) {
            addrList = JSON.parse(HTTP.get(listUrl).content).list[i].addr;
        }
        console.log(addrList);*/

        console.log(searchBox);

        return JSON.parse(HTTP.get(listUrl1+searchBox+listUrl2).content).list[0].addr;
    }
});

/*
Meteor.methods({
    getData : function (searchBox) {
        var url = "http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList?stationName="+searchBox+"&pageNo=1&numOfRows=1&ServiceKey=eLjLjmBL%2BZOf41Jubc38O0WhKokYlqQnRuF055Vg7bTq8xWgpgh0YZrkrXxJt5HKUTTj%2F%2BvUVyoh%2BHMyMxf7Fw%3D%3D&_returnType=json";

        console.log(url);

        var res = HTTP.get(url).content;

        return res;
    }
});*/
