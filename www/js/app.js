// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app=angular.module('starter', ['ionic',
 'starter.controllers',
 'starter.partycontrollers',
 'starter.accountcontrollers',
  'starter.services','ngCordova']);

app.run(function($ionicPlatform,$rootScope,$state,$cordovaAppVersion,$cordovaDevice, $ionicPopup,$timeout,$ionicHistory,$location,$cordovaToast, $ionicLoading, $cordovaFileTransfer, $cordovaFile, $cordovaFileOpener2,UserFactory,DataFactory) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {

          layindex=layer.open({
                type: 2
            });
           var struser=localStorage.loginuser;
           if(struser==''){
             struser='{}';

           }


           var u=angular.fromJson(struser);
           if(u&&u.data){
            $rootScope.uType=u.data.uType;
          }else{
            $rootScope.uType=0;
          }

          console.log("change start"+fromState);

        });
        $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
             console.log(fromState);
             console.log(toState);
             console.log("change success"+toState);
              layer.close(layindex);
        });

        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        //alert(error.authenticated);
         console.log("change error");
           layer.close(layindex);
        if(error.authenticated === false){
          if(toState.name!='login'){

            $state.go("login");
          }
        }

        });

$rootScope.zhibuindexclk=function(){
  $state.go("tab.zhibuindex");
};
$rootScope.jifenpaihangclk=function(){
  var params={};
  params.showtype='jifen';
  $state.go("tab.jifenpaihang",params);
};
$rootScope.zhibupaihangclk=function(){
   $state.go("tab.zhibupaihang");
};

 $rootScope.partyclk=function(){
    $state.go("tab.party");

 };
  $rootScope.idxclk=function(){
    $state.go("tab.index");

 };
  $rootScope.chatclk=function(){
    $state.go("tab.chats");

 };
  $rootScope.accclk=function(){
    $state.go("tab.account");

 };
 $rootScope.huodongclk=function(){
    $state.go("tab.huodong");
 };
 var appurl="";
  $rootScope.checkUpdate=function (){
    var serverAppVersion = "1.1.2"; //从服务端获取最新版本            //获取版本
    DataFactory.GetVersion({},function(result){

       if(result.Msg=="成功"){
          serverAppVersion=result.Data.appversion;
          appurl=result.Data.appurl;
          $cordovaAppVersion.getVersionNumber().then(function (version) {
             //alert("本地app版本号："+version+",服务端版本号："+serverAppVersion);
              //如果本地与服务端的APP版本不符合
              if (version != serverAppVersion) {
                $rootScope.showUpdateConfirm();
              }
          });
       }
    });


  }


  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
   // alert($cordovaDevice.getPlatform());
     if($cordovaDevice.getPlatform()=="Android"){
       $rootScope.checkUpdate();
    }
    if(window.plugins&&window.plugins.jPushPlugin){
      //启动极光推送服务
      window.plugins.jPushPlugin.init();
      window.plugins.jPushPlugin.setDebugMode(true);
    }
  });

  $ionicPlatform.registerBackButtonAction(function (e) {
            //判断处于哪个页面时双击退出

            if ($location.path() == '/tab/index'||$location.path() == '/login') {
                if ($rootScope.backButtonPressedOnceToExit) {
                    ionic.Platform.exitApp();
                } else {
                    $rootScope.backButtonPressedOnceToExit = true;
                    $cordovaToast.showShortBottom('再按一次退出系统');
                    setTimeout(function () {
                        $rootScope.backButtonPressedOnceToExit = false;
                    }, 2000);
                }
            }
            else if ($ionicHistory.backView()) {
                $ionicHistory.goBack();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                $cordovaToast.showShortBottom('再按一次退出系统');
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
            e.preventDefault();
            return false;
        }, 101);

  $rootScope.showUpdateConfirm=function (){
    var confirmPopup = $ionicPopup.confirm({                title: '版本升级',
      template: '发现新版本，确定升级吗？', //从服务端获取更新的内容
      cancelText: '取消',
      okText: '升级'
    });
    confirmPopup.then(function (res) {

      if (res) {

        $ionicLoading.show({
          template: "已经下载：0%"
        });
        var url = appurl||"http://125.76.233.119:8065/jifen.apk";
        var targetPath = cordova.file.externalRootDirectory + "/jifen.apk";
//           var targetPath = cordova.file.dataDirectory+"/jifen.apk"
        var trustHosts = true;
        var options = {};
        $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function (result) {
          $cordovaFileOpener2.open(targetPath,'application/vnd.android.package-archive').then(function(){
            alert("升级成功");
          },function(){
            alert("升级失败");
          });
          $ionicLoading.hide();
        },function (err){
          alert('下载失败');
          $ionicLoading.hide();
        },function(progress){
          $timeout(function(){
            var downloadProgress=(progress.loaded / progress.total) * 100;
            $ionicLoading.show({
              template: "已经下载：" + Math.floor(downloadProgress) + "%"
            });
            if (downloadProgress > 99) {
              $ionicLoading.hide();
            }


          });
        });

      }
    });


  }

})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

     $ionicConfigProvider.platform.ios.tabs.style('standard');
     $ionicConfigProvider.platform.ios.tabs.position('bottom');
     $ionicConfigProvider.platform.android.tabs.style('standard');
     $ionicConfigProvider.platform.android.tabs.position('bottom');
     $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
     $ionicConfigProvider.platform.android.navBar.alignTitle('center');
     $ionicConfigProvider.views.maxCache(0);



  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:



  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}

        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
        }
      }
    })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
    console.log("这是app.js中的state");
});
