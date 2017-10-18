var services = angular.module('starter.services', ['ngResource']);
services.filter('cr2br',  ['$sce',function($sce) {
        return function(neirong) {
            var tmp=neirong||"";

           // tmp=tmp.replace(new RegExp("\\n","gm"),"<br/>");
            return tmp;
        }
    }]).filter('id2name',  ['$sce',function($sce) {
        return function(neirong) {
            var tmp=neirong||"";
            for(var i=0;i<_zhiburenyuan.length;i++){
              if(tmp==_zhiburenyuan[i].uName){
                tmp=_zhiburenyuan[i].dyName;
                break;
              }
            }
           // tmp=tmp.replace(new RegExp("\\n","gm"),"<br/>");
            return tmp;
        }
    }]).filter('emjo',  ['$sce',function($sce) {
        return function(neirong) {
            var tmp=neirong||"";
           tmp=getImgByKey(tmp);
           // tmp=tmp.replace(new RegExp("\\n","gm"),"<br/>");
            return tmp;
        }
    }]).filter('mydate',  ['$sce',function($sce) {
        return function(astr) {
            if(astr){
                var da = new Date(parseInt(astr.replace("/Date(", "").replace(")/", "").split("+")[0]));
                return da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + da.getMinutes() ;
            }else{
                return astr;
            }
        }
    }])
services.factory('DataFactory', function ($resource) {
    return $resource(_APPROOT+'/PMMobileService/:action', [], {
        party_getcurrentmonthispay: { method: 'POST',params:{action:"PARTY_GETCURRENTMONTHISPAY"}},
        index_lunbodetail: { method: 'POST',params:{action:"INDEX_LUNBODETAIL"}},
        user_shequrenwuislingqu: { method: 'POST',params:{action:"USER_SHEQURENWUISLINGQU"}},
        party_jifenbanqianliebiao: { method: 'POST',params:{action:"PARTY_JIFENBANQIANLIEBIAO"}},
        GetXueliList: { method: 'POST',params:{action:"GetXueliList"}},
        party_danfyuanbeiyaoqingliebiao: { method: 'POST',params:{action:"PARTY_DANFYUANBEIYAOQINGLIEBIAO"}},
        GetPartyBuildingDetail: { method: 'POST',params:{action:"GetPartyBuildingDetail"}},
        GetPartyBuildingList: { method: 'POST',params:{action:"GetPartyBuildingList"}},
        GetSatchelDetail: { method: 'POST',params:{action:"GetSatchelDetail"}},
        GetSatchelList: { method: 'POST',params:{action:"GetSatchelList"}},
        GetThemeLearnDetail: { method: 'POST',params:{action:"GetThemeLearnDetail"}},
        GetThemeLearnList: { method: 'POST',params:{action:"GetThemeLearnList"}},
        GetChaseAfterList: { method: 'POST',params:{action:"GetChaseAfterList"}},
        GetChaseAfterDetail: { method: 'POST',params:{action:"GetChaseAfterDetail"}},
        GetCreateActivityList: { method: 'POST',params:{action:"GetCreateActivityList"}},
        GetCreateActivityDetail: { method: 'POST',params:{action:"GetCreateActivityDetail"}},
        user_login: { method: 'POST',params:{action:"USER_LOGIN"}},
        party_wodefenshu: { method: 'POST',params:{action:"PARTY_WODEFENSHU"}},
        party_getindexcontent: { method: 'POST',params:{action:"GETINDEXCONTENT"}},
        user_logout:{method: 'POST',params:{action:"USER_LOGOUT"}},
        user_checklogin:{method: 'POST',params:{action:"USER_CHECKLOGIN"}},
        user_gerenxinxixiugai:{method: 'POST',params:{action:"USER_GERENXINXIXIUGAI"}},
        user_getuserinfo:{method: 'POST',params:{action:"USER_GETUSERINFO"}},
        user_wodeshoucang:{method: 'POST',params:{action:"USER_WODESHOUCANG"}},
        gonggao_shoucang:{method: 'POST',params:{action:"GONGGAO_SHOUCANG"}},
        index_lunbo:{method: 'POST',params:{action:"INDEX_LUNBO"}},
        gonggao_liebiao:{method: 'POST',params:{action:"GONGGAO_LIEBIAO"}},
        gonggao_xiangqing:{method: 'POST',params:{action:"GONGGAO_XIANGQING"}},
        party_dangyuandianpingliebiao:{method: 'POST',params:{action:"PARTY_DANGYUANDIANPINGLIEBIAO"}},
        party_dangyuandianping:{method: 'POST',params:{action:"PARTY_DANGYUANDIANPING"}},
        party_dangyuanyaoqing:{method: 'POST',params:{action:"PARTY_DANGYUANYAOQING"}},
        user_nianduchengnuochaxun:{method: 'POST',params:{action:"USER_NIANDUCHENGNUOCHAXUN"}},
        party_yuedukaohebaocun:{method: 'POST',params:{action:"PARTY_YUEDUKAOHEBAOCUN"}},
        party_yuedukaohexiangqing:{method: 'POST',params:{action:"PARTY_YUEDUKAOHEXIANGQING"}},
        party_yuedukaoping:{method: 'POST',params:{action:"PARTY_YUEDUKAOPING"}},
        index_paihang:{method: 'POST',params:{action:"INDEX_PAIHANG"}},
        index_paihang:{method: 'POST',params:{action:"INDEX_PAIHANG"}},
        getyearlist:{method: 'POST',params:{action:"GETYEARLIST"}},
        party_wodezhibupaiming:{method: 'POST',params:{action:"PARTY_WODEZHIBUPAIMING"}},
        party_jianglijifenbaocun:{method: 'POST',params:{action:"PARTY_JIANGLIJIFENBAOCUN"}},
        party_jianglijifenmingxi:{method: 'POST',params:{action:"PARTY_JIANGLIJIFENMINGXI"}},
        party_jianglijifen:{method: 'POST',params:{action:"PARTY_JIANGLIJIFEN"}},
        party_jifenbanqian:{method: 'POST',params:{action:"PARTY_JIFENBANQIAN"}},
        user_shequrenwuchaxun:{method: 'POST',params:{action:"USER_SHEQURENWUCHAXUN"}},
        user_renwuxiugai:{method: 'POST',params:{action:"USER_RENWUXIUGAI"}},
        user_renwulingqu:{method: 'POST',params:{action:"USER_RENWULINGQU"}},
        party_shangjiaochaxun:{method: 'POST',params:{action:"PARTY_SHANGJIAOCHAXUN"}},
        getzhibulist:{method: 'POST',params:{action:"GETDANGWEILIST"}},
        getdangweilist:{method: 'POST',params:{action:"GETDANGWEILIST"}},
        party_xiangxiqingkuang:{method: 'POST',params:{action:"PARTY_XIANGXIQINGKUANG"}},
        user_nianduchengnuobaocun:{method: 'POST',params:{action:"USER_NIANDUCHENGNUOBAOCUN"}},
        user_nianduchengnuoxiangqing:{method: 'POST',params:{action:"USER_NIANDUCHENGNUOMINGXI"}},
        party_shequrenwudetail:{method: 'POST',params:{action:"SQRWDetail"}},
        party_shequrenwujuzheng:{method: 'POST',params:{action:"SHEQURENWUJUZHENG"}},
        party_dianpingdetail:{method: 'POST',params:{action:"DianPingDetail"}},
        SetRegistrationID:{method: 'POST',params:{action:"SetRegistrationID"}},
        GetVersion:{method: 'POST',params:{action:"GetVersion"}},
        DianPingDetailList:{method: 'POST',params:{action:"DianPingDetailList"}},
        zbrenwuchaxun:{method: 'POST',params:{action:"PART_ZHIBURENWUCHAXUN"}},
        myrenwuchaxun:{method: 'POST',params:{action:"PART_MYRENWUCHAXUN"}},
        zbrenwu_detail:{method: 'POST',params:{action:"PART_ZBRENWU_DETAIL"}},
        myrenwu_detail:{method: 'POST',params:{action:"PART_MYRENWU_DETAIL"}},
        party_zbrenwujuzheng:{method: 'POST',params:{action:"PARTY_ZBRENWUJUZHENG"}},

        GetMonitorData:{method: 'POST',params:{action:"GetMonitorData"}}
    })

});
services.factory('UploaderFactory',function($ionicActionSheet,$cordovaCamera,$cordovaFileTransfer,$cordovaToast,$timeout,$ionicLoading,$ionicPlatform){
    var result={};
    var myself={};


//拍照上传
myself.selectimg=function(){
  $ionicPlatform.ready(function(){
     var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
       
       myself.uploadimg(imageURI);

     
    }, function(err) {
      // error
    });

  
  });
 };
 //从相册选择
myself.selectimg2=function(){
  $ionicPlatform.ready(function(){
     var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {

           myself.uploadimg(imageURI);
    }, function(err) {

    });

  
  });
 };

 myself.uploadimg=function(filePath){

  $ionicPlatform.ready(function(){
      var server=_APPROOT+'/pMMobileService/imgUploader.ashx';
      options={};
      var fileName;
      if(filePath.indexOf("/")>0){
        var t=filePath.lastIndexOf("/");
        fileName=filePath.substring(t+1);
      }else{
        fileName=filePath;
      }
    if(fileName.indexOf(".")<0){
        fileName=fileName+".jpg";
      }else if(fileName.indexOf("?")>0){
        fileName=fileName.substr(1,fileName.indexOf("?")-1);
      }
      options.fileName=fileName;
      $ionicLoading.show({
            template: '图片上传中...'
          });
      $cordovaFileTransfer.upload(server, filePath, options)
      .then(function(result) {

          myself.options.callback(result.response);
          $ionicLoading.hide();
          $cordovaToast.showShortCenter("上传成功");
      }, function(err) {
        $ionicLoading.hide();
          var testmsg;
         switch (err.code)
            {
                case 1:
                {
                   testmsg="错误代码1：源文件路径异常，请重新选择或者拍照上传！";
                    break;
                }
                case 2:
                {
                    testmsg="错误代码2:目标地址无效,请重试！";
                    break;
                }
                case 3:
                {
                    testmsg="您手机或者后台服务器网络异常,请重新上传！";
                    break;
                }
                default :
                {
                    testmsg="程序出错";
                    break;
                }

            }
             $cordovaToast.showShortCenter(testmsg);

        // Error
      }, function (progress) {
        // constant progress updates
        $timeout(function () {
          myself.downloadProgress = (progress.loaded / progress.total) * 100;
        })
      });

 
  });

 };

    myself.sheet=function(){
              {
                  var hideSheet = $ionicActionSheet.show({
                      buttons: [
                        { text: '拍照上传' },
                        { text: '选择图片' }
                      ],
                        titleText: '请选择要执行的操作',
                        cancelText: '取消',
                        cancel: function() {
                             // add cancel code..
                        },
                      buttonClicked: function(index) {
                        if(index==0){
                          myself.selectimg();
                        }else if(index==1){
                          myself.selectimg2();
                        }
                      return true;
                      }
                  });
              }

            };
    result.upload=function(options){
        myself.options=options;
        myself.sheet();

    };

    return result;

});

services.factory('jpushService',['$http','$window','$ionicPlatform',function($http,$window,$ionicPlatform){
  var jpushServiceFactory={};

  //var jpushapi=$window.plugins.jPushPlugin;

  //启动极光推送
  var _init=function(){
    $window.plugins.jPushPlugin.init();
    $window.plugins.jPushPlugin.setDebugMode(true);
  }

  //停止极光推送
  var _stopPush=function(){
    $window.plugins.jPushPlugin.stopPush();
  }

  //重启极光推送
  var _resumePush=function(){
    $window.plugins.jPushPlugin.resumePush();
  }

  //设置标签和别名
  var _setTagsWithAlias=function(tags,alias){
    $window.plugins.jPushPlugin.setTagsWithAlias(tags,alias);
  }

  //设置标签
  var _setTags=function(tags){
    $window.plugins.jPushPlugin.setTags(tags);
  }

  //设置别名
  var _setAlias=function(alias){
    $window.plugins.jPushPlugin.setAlias(alias);
  }

  var _getRegistrationID=function(successcallback){
    if($window.plugins&&$window.plugins.jPushPlugin){
      $window.plugins.jPushPlugin.getRegistrationID(successcallback);
    }
  }
 var _openNotification=function(event){
  
        try {
                  var alertContent,url;
                  if (ionic.Platform.isAndroid()) {
                      alertContent = event.alert;
                      url=event.extras.url;
                  } else {
                      alertContent = event.aps.alert;
                      url=event.aps.extras.url;
                  }
               //   alert(url);
               //   alert(alertContent);
               if(url){
                  document.location.href=url;

               }
              } catch (exception) {
                  console.log(exception)
              }
    };

  jpushServiceFactory.init=_init;
  jpushServiceFactory.stopPush=_stopPush;
  jpushServiceFactory.resumePush=_resumePush;

  jpushServiceFactory.setTagsWithAlias=_setTagsWithAlias;
  jpushServiceFactory.setTags=_setTags;
  jpushServiceFactory.setAlias=_setAlias;
  jpushServiceFactory.getRegistrationID=_getRegistrationID;
   document.addEventListener("jpush.openNotification", _openNotification, false);

  return jpushServiceFactory;
}]);

services.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/adam.jpg'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/adam.jpg'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/adam.jpg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/adam.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}).factory('GonggaoFactory', function() {
  var gonggaos = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    url: '',
    path: 'img/banner01.jpg'
  },{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    url: '',
    path: 'img/banner02.jpg'
  },{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    url: '',
    path: 'img/banner03.jpg'
  }];

  return {
    all: function() {
      return gonggaos;
    }
  };
}).factory('UserFactory', function ($http, $q) {
    return {
        islogined: function() {
            console.log("checklogin");
            var d = $q.defer();
            var u=angular.fromJson(localStorage.loginuser);
            console.log("uuuu");
            console.log(u);
            if(u&&u.id){
                d.resolve(u);
            }else{
                d.reject({ authenticated: false });
            }
            return d.promise;
        }
    }
});