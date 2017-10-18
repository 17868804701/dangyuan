app.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
       .state('tab.account', {
    url: '/account',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/account.html',
        controller: 'AccountCtrl'
      }
    }
  }).state('tab.profile', {
    url: '/profile',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  }).state('tab.wodejifen', {
    url: '/wodejifen',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/wodejifen.html',
        controller: 'WodejifenCtrl'
      }
    }
  }).state('tab.woderenwulist', {
    url: '/woderenwulist/:year/:month/:leixing',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/woderenwulist.html',
        controller: 'WoderenwulistCtrl'
      }
    }
  }).state('tab.woderenwudetail', {
    url: '/woderenwudetail/:rwid',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/woderenwudetail.html',
        controller: 'WoderenwudetailCtrl'
      }
    }
  }).state('tab.zhiburenwudetail', {
    url: '/zhiburenwudetail/:rwid',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/zhiburenwudetail.html',
        controller: 'ZhiburenwudetailCtrl'
      }
    }
  }).state('tab.woderenwuadd', {
    url: '/woderenwuadd',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/woderenwuadd.html',
        controller: 'WoderenwuaddCtrl'
      }
    }
  }).state('tab.xiugaimima', {
    url: '/xiugaimima',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/xiugaimima.html',
        controller: 'ProfileCtrl'
      }
    }
  }).state('tab.chengnuolist', {
    url: '/chengnuolist',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/chengnuolist.html',
        controller: 'AccountCtrl'
      }
    }
  }).state('tab.chengnuosubmit', {
    url: '/chengnuosubmit/:id',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/chengnuosubmit.html',
        controller: 'ChengnuosubmitCtrl'
      }
    }
  }).state('tab.chengnuoview', {
    url: '/chengnuoview/:cnId',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/chengnuoview.html',
        controller: 'ChengnuoviewCtrl'
      }
    }
  }).state('tab.shoucanglist', {
    url: '/shoucanglist',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/shoucanglist.html',
        controller: 'AccountCtrl'
      }
    }
  }).state('tab.shoucangview', {
    url: '/shoucangview/:xwid',
    cache:false,
    views: {
      'tab-account': {
        templateUrl: 'templates/shoucangview.html',
        controller: 'ShoucangviewCtrl'
      }
    }
  }).state('tab.xinwenview', {
    url: '/xinwenview/:xwid',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/xinwenview.html',
        controller: 'ShoucangviewCtrl'
      }
    }
  }).state('tab.lunboview', {
    url: '/lunboview/:xwid',
    cache:false,
    views: {
      'tab-index': {
        templateUrl: 'templates/lunboview.html',
        controller: 'LunboviewCtrl'
      }
    }
  }).state('tab.shangjiaolist', {
    url: '/shangjiaolist',
    views: {
      'tab-account': {
        templateUrl: 'templates/shangjiaolist.html',
        controller: 'AccountCtrl'
      }
    }
  });
    console.log("这是我自己定义的account");

});

angular.module('starter.accountcontrollers', [])
.controller('AccountCtrl', function($scope,$state,DataFactory) {
  console.log("acc11");
  $scope.path=_APPROOT;
  var u=angular.fromJson(localStorage.loginuser);
  $scope.user=u;
  console.log(localStorage.loginuser);
  var shoucangpara={};
  shoucangpara.UserName=u.name;
  shoucangpara.CNYear=(new Date()).getFullYear();
  shoucangpara.CnID=-1;
  //user_nianduchengnuochaxun
  $scope.nianduchengnuo=DataFactory.user_nianduchengnuochaxun(shoucangpara);

//user_wodeshoucang
  $scope.shoucangdata=DataFactory.user_wodeshoucang(shoucangpara);
var dangfeipara={};
dangfeipara.UserName=u.name;
dangfeipara.Password='';
   $scope.dangfei=DataFactory.party_getcurrentmonthispay(dangfeipara);
//party_shangjiaochaxun
var shangjiaochaxunpara={};
  shangjiaochaxunpara.UserName=u.name;
  shangjiaochaxunpara.Password='';
  $scope.shangjiaochaxun=DataFactory.party_shangjiaochaxun(shangjiaochaxunpara);

  //user_shequrenwuchaxun

  $scope.shequrenwu=DataFactory.user_shequrenwuchaxun(shoucangpara);
  var lingqupara={};
  lingqupara.UserName=u.name;
  lingqupara.Password='';
  $scope.lingqudata=DataFactory.user_shequrenwuislingqu(lingqupara);
  $scope.logout=function(){
    // localStorage.loginuser='{}';
      var logoutpara={};
      logoutpara.UserName=u.name;
      logoutpara.Password='';
      DataFactory.user_logout(logoutpara);

      $state.go("login");
  };
   console.log("This is AccountCtrl222.");
}).controller('ProfileCtrl', function($scope,$state,DataFactory,UploaderFactory) {
  $scope.path=_APPROOT;
  var u=angular.fromJson(localStorage.loginuser);
  $scope.user=u;

  var param={};
    param.DyID=u.id;
    param.UserName=u.name;

    DataFactory.party_xiangxiqingkuang(param,function(result){
      angular.extend($scope.user.data,result.Data);
      console.log($scope.user.data);
    });

  $scope.mypara={};
  $scope.mypara.state="编辑";
  $scope.save=function(){
    if($scope.mypara.state=="编辑"){
      $scope.mypara.state="保存";
      return false;
    }
    var p={};
    p.UserName=$scope.user.data.uName;
    p.SendWord=$scope.user.data.dyJiyu;
    p.RealName=$scope.user.data.dyName;
    p.TelNumber=$scope.user.data.dyTel;
    p.Password='';
    console.log($scope.user);
    p.HeadPicName=$scope.user.data.dyTouxiang||'';

    p.dyTouxiang=$scope.user.data.dyTouxiang||'';
      DataFactory.user_gerenxinxixiugai(p,function(result){
          if(result.Msg=="成功"){
              msg("信息修改成功");
                var rr={};
                rr.id=$scope.user.data.uId;
                rr.name=$scope.user.data.uName;
                rr.data=$scope.user.data;
                localStorage.loginuser=angular.toJson(rr);
          }else{
              msg("信息修改失败,"+result.Detail);
          }
      },function(err){
        msgerr();
      });
  };
  $scope.logout=function(){
      var logoutpara={};
       logoutpara.UserName=u.name;
       logoutpara.Password='';
       DataFactory.user_logout(logoutpara);

      $state.go("login");
  };
  $scope.options={};
$scope.options.callback=function(response){
  var rr=angular.fromJson(response);
            log(rr);

            if(rr.length>0){
              $scope.user.data.dyTouxiang=rr[0].ImgUrl;
            }else{
              alert("上传图片失败!");
            }
}

  $scope.edittouxiang=function(){

    if($scope.mypara.state=="保存"){
      UploaderFactory.upload($scope.options);
    }
  };

  $scope.doxiugai=function(){
    //修改密码
    if($scope.user.data.yuanmima!=u.password){
      alert("原密码错误");
      return false;
    }
    if($scope.user.data.xinmima==''){
        alert("新密码不能为空");
        return false;
    }
    if($scope.user.data.xinmima!=$scope.user.data.xinmimab){
        alert("两次输入密码不一致");
        return false;
    }

     var p={};

    p.UserName=$scope.user.data.uName;
    p.SendWord=$scope.user.data.dyJiyu;
    p.RealName=$scope.user.data.dyName;
    p.TelNumber=$scope.user.data.dyTel;
    p.Password=$scope.user.data.xinmima;
    DataFactory.user_gerenxinxixiugai(p,function(result){
          if(result.Msg=="成功"){
              msg("信息修改成功");
                var rr={};
                rr.id=$scope.user.data.uId;
                rr.name=$scope.user.data.uName;
                rr.data=$scope.user.data;
                localStorage.loginuser=angular.toJson(rr);
          }else{
              msg("信息修改失败,"+result.Detail);
          }
      },function(err){
        msgerr();
      });
  };
   console.log("This is AccountCtrl.");


}).controller('ShoucangviewCtrl', function($scope,$state,DataFactory) {
    console.log($state.params.xwid);
var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.ID=$state.params.xwid;
  para.NoticeID=$state.params.xwid;


  DataFactory.gonggao_xiangqing(para,function(result){
    console.log(result);
    $scope.news=result;
  },function(err){

  });

  $scope.shoucang=function(){
      DataFactory.gonggao_shoucang(para,function(result){
          if(result.Msg=="成功"){
            msg("收藏成功");
          }else{
            msg("收藏失败："+result.Detail);
          }
      });
  };


}).controller('WodejifenCtrl', function($scope,$state,DataFactory) {
//我的积分，第一个页面
var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.ID=$state.params.xwid;

  var currentYearID=(new Date()).getFullYear();
  var currentMonth=(new Date()).getMonth()+1;
  para.YearID=(new Date()).getFullYear();
  $scope.para=para;
  $scope.monthlist=[];
  $scope.monthlistb=[];
 $scope.changeyear=function(aa){
    if(currentYearID>=$scope.para.YearID+aa){
          $scope.para.YearID=$scope.para.YearID+aa;
    }
    if(currentYearID==$scope.para.YearID){
      $scope.monthlist=[];
      for(var i=0;i<currentMonth;i++){
        $scope.monthlist.push(i+1)
      }
    }else{
      $scope.monthlist=[];
      for(var i=0;i<12;i++){
        $scope.monthlist.push(i+1)
      }
    }
    console.log($scope.monthlist);
    $scope.monthlistb=$scope.monthlist.reverse();


 };
 $scope.rwtype='zhibu';
 $scope.changeyear();


}).controller('WoderenwulistCtrl', function($scope,$state,DataFactory) {
//我的积分，列表页面
var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.YearID=$state.params.year;
  para.MonthID=$state.params.month;
  para.leixing=$state.params.leixing;
  $scope.para=para;
if(para.leixing=='wode'){
 DataFactory.myrenwuchaxun(para,function(result){
    if(result.Msg=="成功")
    {
      $scope.renwus=result;
      console.log($scope.renwus);

    }
  });
}else{
  DataFactory.zbrenwuchaxun(para,function(result){
    if(result.Msg=="成功")
    {
      $scope.renwus=result;

      console.log($scope.renwus);
    }
  });
}




}).controller('WoderenwudetailCtrl', function($scope,$state,DataFactory) {
//我的积分，详细页面

 var u=angular.fromJson(localStorage.loginuser);
  $scope.para={};//{"ImgLst":[{"ImgIllustrate":"图片说明文字", "ImgName":"aa.jpg", "ImgUrl":"字符串内容", "NoticeID":2147483647 }] };
  $scope.para.UserName=u.name;
  $scope.para.ImgLst=new Array();
  $scope.para.JFID=-1;
  var param={};
  param.kaoheid=$state.params.rwid;
  param.UserName=u.name;
  $scope.canedit=true;
  $scope.issaving=false;
  console.log("121212");
if(param.kaoheid&&param.kaoheid>0){
  console.log(222);
  $scope.para.JFID=param.kaoheid;
  $scope.akaoping=DataFactory.party_yuedukaohexiangqing(param,function(result){
      $scope.para=result.Data;
      $scope.para.Content=$scope.para.Synopsis;
      console.log("928739287");
      $scope.canedit=result.Data.IsCheck!='已审核';
  });
}
$scope.save=function(btntype){
   if($scope.issaving==true){
      return false;
    }
    $scope.issaving=true;
   $scope.para.UserName=u.name;
   console.log($scope.para);
  DataFactory.party_yuedukaohebaocun($scope.para,function(result){
    if(result.Msg=="成功"){
      msg("保存成功");
      $state.go("tab.wodejifen");
    }else{
      msg(result.Detail);
    }
    $scope.issaving=false;
  },function(err){
    msgerr();
  });


}





}).controller('ZhiburenwudetailCtrl', function($scope,$state,DataFactory) {
//我的积分，详细页面

var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.RWID=$state.params.rwid;

  DataFactory.zbrenwu_detail(para,function(result){
    if(result.Msg=="成功"){
      $scope.arenwu=result.Data;

    }
  });





}).controller('WoderenwuaddCtrl', function($scope,$state,DataFactory) {
//我的积分，任务添加

 var u=angular.fromJson(localStorage.loginuser);
  $scope.para={};//{"ImgLst":[{"ImgIllustrate":"图片说明文字", "ImgName":"aa.jpg", "ImgUrl":"字符串内容", "NoticeID":2147483647 }] };
  $scope.para.UserName=u.name;
  $scope.para.ImgLst=new Array();
  $scope.para.JFID=-1;
  var param={};
  param.kaoheid=$state.params.kaoheid;
  param.UserName=u.name;
  $scope.canedit=true;
  $scope.issaving=false;
  $scope.para.curritem={};
if(param.kaoheid&&param.kaoheid>0){
  $scope.para.JFID=param.kaoheid;
  $scope.akaoping=DataFactory.party_yuedukaohexiangqing(param,function(result){
      $scope.para.ImgLst=result.Data.ImgList;
      $scope.canedit=result.Data.IsCheck!='已审核';
  });
}
 $scope.addstate=true;
$scope.save=function(btntype){
   if($scope.issaving==true){
      return false;
    }
    $scope.issaving=true;

  DataFactory.party_yuedukaohebaocun($scope.para,function(result){
    if(result.Msg=="成功"){
      msg("保存成功");
      $state.go("tab.wodejifen");
    }else{
      msg(result.Detail);
    }
    $scope.issaving=false;
  },function(err){
    msgerr();
  });


}





}).controller('LunboviewCtrl', function($scope,$state,DataFactory) {
    console.log($state.params.xwid);
var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.ID=$state.params.xwid;



  DataFactory.index_lunbodetail(para,function(result){
    console.log(result);
    $scope.news=result;
  },function(err){

  });



}).controller('ChengnuosubmitCtrl', function($scope,$state,DataFactory,UploaderFactory,$ionicModal) {
    var id=$state.params.id;
    if(id==0){
      $scope.currentstate='chengnuo';//chenghuo 年初承诺,juzheng 年终举证 ,chakan 审核后查看
    }else {
      $scope.currentstate='juzheng';
    }

var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.CnID="-1";
  //para.CnFlag="0";
  para.WCContent="";
  para.JZContent="";
  //para.CnEndTime="2016-12-31";
  para.ImgLst=[];

  $scope.para=para;
 // $scope.para.ImgLst.push({'ImgUrl':'111.jpg','ImgIllustrate':'222','ImgName':'1'});
var parab={};
parab.UserName=u.name;
  parab.CnID=id;
  parab.CNYear=0;
  if(id>0){
  $scope.achengnuo=DataFactory.user_nianduchengnuoxiangqing(parab,function(result){
    angular.extend($scope.para,result.Data);
    console.log($scope.para);

    if(result.Data.cnFlag==2){
        $scope.currentstate='chakan';
    }else{
      $scope.currentstate='juzheng';
    }
    $scope.para.CnID=id;
  });
}else{
  $scope.achengnuo={};
}
$scope.addstate=true;
$scope.save=function(){
   if(id==0){
    $scope.para.cnShixiang=$scope.para.curritem.ImgIllustrate
    $scope.para.Content=$scope.para.curritem.ImgIllustrate
   }
   console.log($scope.para);
   if($scope.achengnuo.Data){
    $scope.para.cnShixiang=$scope.achengnuo.Data.cnShixiang;
   }
   if(($scope.para.curritem.ImgIllustrate||'')!=''&&$scope.addstate==true){
      var tmpitem={};
      tmpitem.ImgIllustrate=$scope.para.curritem.ImgIllustrate;
      tmpitem.ImgUrl="";
      tmpitem.ImgName="";
      $scope.para.ImgLst.push(tmpitem);
   }
    DataFactory.user_nianduchengnuobaocun($scope.para,function(result){
        if(result.Msg=="成功"){
          msg("保存成功");
          $state.go("tab.chengnuolist");
        }else{
          msg("保存失败："+result.Detail);
        }

  },function(err){
      msgerr();
  });
};
$scope.para.curritem={};
$scope.clkitem=function(item,index){
  $scope.addstate=false;
  $scope.para.curritem=item;
  if(!$scope.canedit){
    $scope.fangda(item,index);
  }
}

$scope.options={};
$scope.options.callback=function(response){
  var rr=angular.fromJson(response);
            log(rr);
            if(rr.length>0){
              var aimg={};
              aimg.ImgIllustrate= $scope.para.curritem.ImgIllustrate;
              aimg.ImgUrl=rr[0].ImgUrl;
              aimg.ImgName=rr[0].ImgName;
            $scope.para.curritem=aimg;
              $scope.para.ImgLst.push(aimg);
            }else{
              alert("上传图片失败!");
            }


}
  $scope.sheet=function(){
    UploaderFactory.upload($scope.options);
  }

$ionicModal.fromTemplateUrl('tupian-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
$scope.curritem={};
$scope.fangda=function(item,index){
$scope.curritem.ImgUrl=item.ImgUrl;
$scope.curritem.index=index;

  $scope.modal.show();
}
 $scope.closeModal=function(){
   $scope.modal.hide();
};
 $scope.deleteimg=function(){
  $scope.para.ImgLst.splice($scope.curritem.index,1);
  $scope.para.curritem={};
   $scope.modal.hide();

};

}).controller('ChengnuoviewCtrl', function($scope,$state,DataFactory,UploaderFactory) {
    var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.CnID=$state.params.cnId;
  para.CNYear=0;

  $scope.achengnuo=DataFactory.user_nianduchengnuoxiangqing(para);


});
