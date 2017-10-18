//var _APPROOT="http://127.0.0.1:8100";
//var _APPROOT="http://192.168.1.100:8100";
//var _APPROOT="http://10.10.10.107:8100";
//var _APPROOT="http://120.25.164.228:8088";
var _APPROOT="http://125.76.233.119:8065";
var _IMGROOT="http://www.byxd8.com/";
//var _APPROOT="http://192.168.2.101:8080/dhxt";
//var _IMGROOT="http://192.168.2.101/"
//
var _DEBUG=true;
var _LOGINEDUSER={};
var _WEIXIN=false;//默认使用微信
var _APPKEY="463def7d-5c16-4404-9adc-a12a0b004a60";
var rkcloud_client_key = "af35a95319b3aaa27313495f9b6f4d93e481691d";
var regiUrl = "http://api.rongkecloud.com:8080/3.0/registerDemo.do?r=";
//var rkapi="api.rongkecloud.com:8080";
var rkapi="api.rongkecloud.com";
var _REFRESHSPEED=10000;
var _CHATSCEZHANID=0;
var _zhiburenyuan=new Array();
var huodong={};
huodong.Data=new Array();
huodong.Data.push({'hdId':0,'hdTitle':'“两学一做”学习教育'});
huodong.Data.push({'hdId':1,'hdTitle':'中省市传达精神'});
huodong.Data.push({'hdId':2,'hdTitle':'“补，提，树”'});
huodong.Data.push({'hdId':3,'hdTitle':'小书包'});
huodong.Data.push({'hdId':4,'hdTitle':'“抓党建，促脱贫”'});
huodong.Data.push({'hdId':5,'hdTitle':'创建活动列表'});
huodong.Data.push({'hdId':6,'hdTitle':'追赶超越'});

function msg(amsg){
	layer.open({content:amsg,time:2});

}

function msgerr(){
	msg("网络异常，请与管理员联系");
}

function log(obj){
	 if(_DEBUG){
		console.log(obj);
	}
}


