import {Meteor} from 'meteor/meteor';

Meteor.methods({
    "geta" : function () {
        return JSON.parse(
            HTTP.get(
                'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=%EC%A2%8C%EB%8F%99&dataTerm=daily&pageNo=1&numOfRows=1&ServiceKey=eLjLjmBL%2BZOf41Jubc38O0WhKokYlqQnRuF055Vg7bTq8xWgpgh0YZrkrXxJt5HKUTTj%2F%2BvUVyoh%2BHMyMxf7Fw%3D%3D&ver=1.3&_returnType=json'
            ).content).list;
    }
});
