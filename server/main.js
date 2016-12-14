import {Meteor} from 'meteor/meteor';

Meteor.methods({
    "getCAI" : function () {
        return JSON.parse(
            HTTP.get(
                'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=%EC%A2%8C%EB%8F%99&dataTerm=daily&pageNo=1&numOfRows=1&ServiceKey=eLjLjmBL%2BZOf41Jubc38O0WhKokYlqQnRuF055Vg7bTq8xWgpgh0YZrkrXxJt5HKUTTj%2F%2BvUVyoh%2BHMyMxf7Fw%3D%3D&ver=1.3&_returnType=json'
            ).content).list[0].khaiValue;
    }
});

Meteor.methods({
    "getTM" : function () {
        return JSON.parse(HTTP.get('https://apis.daum.net/local/geo/transcoord?apikey=d1840910eeeb691c5dcdf7a070fdeb7e&fromCoord=WGS84&y=35.189236&x=129.1650865&toCoord=TM&output=json').content)
    }
});

Meteor.methods({
    getData : function (searchBox) {
        var url = "http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList?stationName="+searchBox+"&pageNo=1&numOfRows=1&ServiceKey=eLjLjmBL%2BZOf41Jubc38O0WhKokYlqQnRuF055Vg7bTq8xWgpgh0YZrkrXxJt5HKUTTj%2F%2BvUVyoh%2BHMyMxf7Fw%3D%3D&_returnType=json";

        console.log(url);

        var res = HTTP.get(url).content;

        return res;
    }
});