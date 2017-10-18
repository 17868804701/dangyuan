app.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
       .state('tab.party', {
    url: '/party',
    views: {
      'tab-party': {
        templateUrl: 'templates/party.html',
        controller: 'PartyCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.scoredetails', {
    url: '/scoredetails/:type',
    views: {
      'tab-party': {
        templateUrl: 'templates/scoredetails.html',
        controller: 'ScoredetailsCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.myjifenb', {
    url: '/myjifenb/:dyid/:nianfen',
    cache:false,
    views: {
      'tab-dwjifen': {
        templateUrl: 'templates/myjifenb.html',
        controller: 'MyjifenCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.scoresubmit', {
    url: '/scoresubmit/:kaoheid/:num',
    views: {
      'tab-party': {
        templateUrl: 'templates/scoresubmit.html',
        controller: 'ScoresubmitCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.scoreview', {
    url: '/scoreview/:kaoheid',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/scoreview.html',
        controller: 'ScoreviewCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.jianglidetails', {
    url: '/jianglidetails',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/jianglidetails.html',
        controller: 'JianglidetailsCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.jianglisubmit', {
    url: '/jianglisubmit/:id',
    views: {
      'tab-party': {
        templateUrl: 'templates/jianglisubmit.html',
        controller: 'JianglisubmitCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.jiangliview', {
    url: '/jiangliview/:id',
    views: {
      'tab-party': {
        templateUrl: 'templates/jiangliview.html',
        controller: 'JiangliviewCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.renwudetails', {
    url: '/renwudetails',
    views: {
      'tab-account': {
        templateUrl: 'templates/renwudetails.html',
        controller: 'RenwudetailsCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.renwusubmit', {
    url: '/renwusubmit/:renwuid',
    views: {
      'tab-account': {
        templateUrl: 'templates/renwusubmit.html',
        controller: 'RenwusubmitCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.paiming', {
    url: '/paiming',
    views: {
      'tab-party': {
        templateUrl: 'templates/paiming.html',
        controller: 'PaimingCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  })
  .state('tab.partyview', {
    url: '/partyview/:id',
    views: {
      'tab-party': {
        templateUrl: 'templates/partyview.html',
        controller: 'PartyviewCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.dianping', {
    url: '/dianping',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/dianping.html',
        controller: 'DianpingCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.partywodejifen', {
    url: '/partywodejifen/:num',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/partywodejifen.html',
        controller: 'PartyWodejifenCtrl'
      }
    }
  }).state('tab.partywoderenwulist', {
    url: '/partywoderenwulist/:year/:month/:leixing/:num',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/partywoderenwulist.html',
        controller: 'PartyWoderenwulistCtrl'
      }
    }
  }).state('tab.partywoderenwudetail', {
    url: '/partywoderenwudetail/:rwid',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/partywoderenwudetail.html',
        controller: 'PartyWoderenwudetailCtrl'
      }
    }
  }).state('tab.partywoderenwusubmit', {
    url: '/partywoderenwusubmit/:rwid',
    cache:false,
    views: {
      'tab-party': {
        templateUrl: 'templates/partywoderenwusubmit.html',
        controller: 'PartywoderenwusubmitCtrl'
      }
    }
  }).state('tab.dianpingsubmit', {
    url: '/dianpingsubmit/:id/:year/:month/:dpid',
    views: {
      'tab-party': {
        templateUrl: 'templates/dianpingsubmit.html',
        controller: 'DianpingSubmitCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.banqian', {
    url: '/banqian',
    views: {
      'tab-party': {
        templateUrl: 'templates/banqian.html',
        controller: 'BanqianCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.banqianlist', {
    url: '/banqianlist',
    views: {
      'tab-party': {
        templateUrl: 'templates/banqianlist.html',
        controller: 'BanqianlistCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.xinwenlist', {
    url: '/xinwenlist',
    views: {
      'tab-party': {
        templateUrl: 'templates/xinwenlist.html',
        controller: 'XinwenlistCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  });

});

angular.module('starter.partycontrollers', [])
.controller('PartyCtrl', function($scope,$state,DataFactory) {
  var u=angular.fromJson(localStorage.loginuser);
  $scope.ShowScoredetails=function(){
    var params="view";
      $state.go("tab.scoredetails",params);
  };
  var fenshupara={};
fenshupara.UserName=u.name;

  fenshupara.Password="";
  $scope.myfenshu=DataFactory.party_wodefenshu(fenshupara);

}).controller('ScoredetailsCtrl', function($scope,$state,DataFactory,$ionicLoading) {
  var u=angular.fromJson(localStorage.loginuser);
  var para={};
  para.Password='';
  para.UserName=u.name;
  para.YearID=(new Date()).getFullYear();
  $scope.para=para;
  $scope.mypara={};
  $scope.mypara.type=$state.params.type;

  $scope.jifenliebiao={};
  $ionicLoading.show({
            template: '数据加载中...'
          });
  DataFactory.party_yuedukaoping(para,function(result){
    console.log(result);
    if(result.Msg=="成功"){
        $scope.jifenliebiao=result;
        $ionicLoading.hide();
    }else{
      msg("获取消息失败，请与管理员联系!");
      $ionicLoading.hide();
    }
  },function(err){

      $ionicLoading.hide();
        msgerr();
  });

  $scope.ShowScoresubmit=function(){
      $state.go("tab.scoresubmit",{"kaoheid":"0"});
  };
  $scope.changeyear=function(aa){
        $scope.para.YearID=$scope.para.YearID+aa;
        $scope.jifenliebiao=DataFactory.party_yuedukaoping(para);
     };

}).controller('ScoresubmitCtrl', function($scope,$state,UploaderFactory,DataFactory,$ionicModal) {
  $scope.hide = $state.params.num;
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
if(param.kaoheid&&param.kaoheid>0){
  $scope.para.JFID=param.kaoheid;
  $scope.akaoping=DataFactory.party_yuedukaohexiangqing(param,function(result){
      $scope.para=result.Data;
      $scope.para.ImgLst=result.Data.ImgList;
      $scope.para.Content=$scope.para.Synopsis;
      $scope.canedit=result.Data.IsCheck!='已审核';
  });
}
$scope.addstate=true;
  $scope.save=function(btntype){
    if($scope.issaving==true){
      return false;
    }
    $scope.issaving=true;

    if(($scope.para.curritem.ImgIllustrate||'')!=''&&$scope.addstate==true){
      var tmpitem={};
      tmpitem.ImgIllustrate=$scope.para.curritem.ImgIllustrate;
      tmpitem.ImgUrl="";
      tmpitem.ImgName="";
      $scope.para.ImgLst.push(tmpitem);
   }
    $scope.para.UserName=u.name;
     DataFactory.party_yuedukaohebaocun($scope.para,function(result){
    if(result.Msg=="成功"){
      msg("保存成功");
      document.location.href="#/tab/partywodejifen/1";
      // $state.go("tab.partywodejifen/1");
    }else{
      msg(result.Detail);
    }
    $scope.issaving=false;
  },function(err){
    msgerr();
  });

  };
$scope.para.curritem={};
$scope.clkitem=function(item,index){
  $scope.addstate=false;
  $scope.para.curritem=item;
  $scope.curritem.index=index;
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
};





            $scope.sheet=function(){
              UploaderFactory.upload($scope.options);

            };


$ionicModal.fromTemplateUrl('tupian-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
$scope.curritem={};
$scope.fangda=function(item,index){
$scope.curritem.ImgUrl=item;
//$scope.curritem.index=$scope.curritem.index||index;

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


}).controller('ScoreviewCtrl', function($scope,$state,DataFactory,$ionicNavBarDelegate) {
   var u=angular.fromJson(localStorage.loginuser);
  $scope.ShowScoresubmit=function(){
      $state.go("tab.scoresubmit",{"kaoheid":"0"});
  };
  var param={};
  param.kaoheid=$state.params.kaoheid;
  param.UserName=u.name;
  // $scope.akaoping={};
  // $scope.akaoping.Data={};
  // $scope.akaoping.Data.Year="123";

  $scope.akaoping=DataFactory.party_yuedukaohexiangqing(param,function(result){
    $ionicNavBarDelegate.showBar(true);
  });



}).controller('JianglidetailsCtrl', function($scope,$state,DataFactory,$ionicLoading) {
  var u=angular.fromJson(localStorage.loginuser);
  var para={};
  para.Password='';
  para.UserName=u.name;
  para.YearID=(new Date()).getFullYear();
  $scope.para=para;
  $scope.jianglidata={};
   $ionicLoading.show({
            template: '数据加载中...'
          });
  DataFactory.party_jianglijifen(para,function(result){
    console.log(result);
    if(result.Msg=="成功"){
      $scope.jianglidata=result;
      $ionicLoading.hide();
    }else{
      $ionicLoading.hide();
      msg("数据加载失败!");
    }
  },function(err){
    $ionicLoading.hide();
    msgerr();
  });
  $scope.ShowScoredetails=function(){
      var params="view";
      $state.go("");
  };
    $scope.changeyear=function(aa){
        $scope.para.YearID=$scope.para.YearID+aa;
        $scope.jianglidata=DataFactory.party_jianglijifen($scope.para);

     };
}).controller('JianglisubmitCtrl', function($scope,$state,DataFactory,UploaderFactory,$ionicModal) {
  $scope.ShowScoresubmit=function(){
      $state.go("tab.scoresubmit",{"kaoheid":"0"});
  };
     var u=angular.fromJson(localStorage.loginuser);
      var id=$state.params.id;
  var para={};
  para.ID=id;
  para.UserName=u.name;
  $scope.canedit=true;
   $scope.jiangli={};
  $scope.jiangli.UserName=u.name;
  $scope.jiangli.JfType=0;
  $scope.jiangli.ImgLst=new Array();
  if(para.ID&&para.ID>0){
    $scope.data=DataFactory.party_jianglijifenmingxi(para,function(result){
        $scope.canedit=result.Data.jfFlag!=1;
        $scope.jiangli.Idea=result.Data.jfJianjie;
        $scope.jiangli.ImgLst=result.Data.ImgList;
        $scope.jiangli.JFID=result.Data.jlfId;
    });
  }


  $scope.save=function(btntype){
    if(!$scope.jiangli.Idea){
        msg("请填写奖励情况说明");
        return false;
    }

     DataFactory.party_jianglijifenbaocun($scope.jiangli,function(result){

    if(result.Msg=="成功"){
      msg("保存成功");
      $state.go("tab.jianglidetails");
    }else{
      msg(result.Detail||result.Msg);
    }
  },function(err){
      msgerr();
  });

  };

  $scope.options={};
  $scope.options.callback=function(response){
      var rr=angular.fromJson(response);
            log(rr);

            if(rr.length>0){
              //可以多图上传
              $scope.jiangli.ImgLst=$scope.jiangli.ImgLst.concat(rr);

            }else{
              alert("上传图片失败!");
            }
  }
  $scope.sheet=function(){
      UploaderFactory.upload($scope.options);
  };
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
  $scope.jiangli.ImgLst.splice($scope.curritem.index,1);
   $scope.modal.hide();
};


}).controller('JiangliviewCtrl', function($scope,$state,DataFactory) {
  var u=angular.fromJson(localStorage.loginuser);
  $scope.ShowScoresubmit=function(){
      $state.go("tab.scoresubmit",{"kaoheid":"0"});
  };
  var id=$state.params.id;
  var para={};
  para.ID=id;
  para.UserName=u.name;
  $scope.data=DataFactory.party_jianglijifenmingxi(para);

}).controller('RenwudetailsCtrl', function($scope,$state,DataFactory,$ionicLoading) {
   var u=angular.fromJson(localStorage.loginuser);
     $scope.para={};
     $scope.para.YearID=(new Date()).getFullYear();
     $scope.para.UserName=u.name;

       var shoucangpara={};
  shoucangpara.UserName=u.name;
  shoucangpara.YearID=$scope.para.YearID;
   $ionicLoading.show({
            template: '数据加载中...'
          });
    //user_shequrenwuchaxun
  DataFactory.user_shequrenwuchaxun(shoucangpara,function(result){
    $scope.shequrenwu=result;



    var isHaveGetState = false;
    $scope.show = false;
    var nohave = [];
    var have = [];
    for(var i = 0;i<result.Data.length;i++){
       if(result.Data[i].IsGet===1){
         isHaveGetState = true;
       }
    }
    console.log(result.Data.length+'*****************************hahahahahhaha*******************************')
    for(var i = 0;i<result.Data.length;i++){
      if (isHaveGetState){
        if (result.Data[i].IsGet===1){
          have.push(result.Data[i]);
          $scope.show = true
        }
      }
    }
    console.log(have)
    console.log(nohave)
    $scope.have = have;
    console.log(result.Data.length+'*****************************hahahahahhaha*******************************')
    $ionicLoading.hide();
  },function(err){
$ionicLoading.hide();
  });

     $scope.save=function(item,event){

       $scope.para.TaskID=item.rwId;
         DataFactory.user_renwulingqu($scope.para,function(result){
            if(result.Msg==="成功"){
            msg("领取成功");
            item.IsGet=1;
              document.location.href="#/tab/account/";
            }else{
              msg("您已领取过该任务");
            }
         },function(err){
            msgerr();
         });
         console.log("111"+event);
        event.stopPropagation();
         return false;
     };
     $scope.changeyear=function(aa){
        $scope.para.YearID=$scope.para.YearID+aa;
        shoucangpara.YearID=$scope.para.YearID;
        $scope.shequrenwu=DataFactory.user_shequrenwuchaxun(shoucangpara);

     };
     $scope.renwuxiangqing=function(item){
        if(item.IsGet!=1){
          msg("您未领取该任务");
          return false;
        }
        var param={};
        param.renwuid=item.rwId;
        $state.go("tab.renwusubmit",param);
     }

}).controller('PaimingCtrl', function($scope,$state,DataFactory,$ionicLoading) {
     var u=angular.fromJson(localStorage.loginuser);
     $scope.para={};
     $scope.para.UserName=u.name;
     $scope.para.YearID=(new Date()).getFullYear();
      $ionicLoading.show({
            template: '数据加载中...'
          });
     $scope.mypaiming=DataFactory.party_wodezhibupaiming($scope.para,function(result){
      $ionicLoading.hide();
     },function(err){
      $ionicLoading.hide();
     });
      $scope.changeyear=function(aa){
        $scope.para.YearID=$scope.para.YearID+aa;
        $scope.mypaiming=DataFactory.party_wodezhibupaiming($scope.para);

     };


}).controller('DianpingCtrl', function($scope,$state,DataFactory,$ionicLoading) {
  var u=angular.fromJson(localStorage.loginuser);
     $scope.para={};
     $scope.para.UserName=u.name;
     $scope.para.YearID=(new Date()).getFullYear();
     $scope.para.MonthID=(new Date()).getMonth()+1;
     $scope.mydate={};
     $scope.mydate.YearID=(new Date()).getFullYear();
     $scope.mydate.MonthID=(new Date()).getMonth()+1;

     $scope.para.IsSelf=false;

    $scope.para2={};
     $scope.para2.UserName=u.name;
     $scope.para2.YearID=(new Date()).getFullYear();
     $scope.para2.MonthID=(new Date()).getMonth()+1;
     $scope.para2.IsSelf=true;
    $scope.para3={};
        $scope.para3.UserName=u.name;
        $scope.para3.Password='';


     $scope.dianpingliebiao=DataFactory.party_dangyuandianpingliebiao($scope.para);
      $ionicLoading.show({
            template: '数据加载中...'
          });
     $scope.dianpingliebiao2=DataFactory.party_dangyuandianpingliebiao($scope.para2,function(result){
        $ionicLoading.hide();
     },function(err){
        $ionicLoading.hide();
     });
     $scope.dianpingliebiao3=DataFactory.party_danfyuanbeiyaoqingliebiao($scope.para3);
$scope.yaoqing=function(item){
  console.log(item);
  if(item.isDianping==true){
      $state.go("tab.dianpingsubmit",{'id':item.BCommentPersonID,'dpid':item.dpId,'year':$scope.para.YearID,'month':$scope.para.MonthID});
  }else{
    var tmppara={};
    tmppara.UserName=u.name;
    tmppara.CommentPersonID=item.BCommentPersonID;
    DataFactory.party_dangyuanyaoqing(tmppara,function(result){
         if(result.Msg=="成功"){
             msg("邀请成功");
         }else{
             msg(result.Detail);
         }
    });
  }
};
      $scope.changeyear=function(aa){
        $scope.para.MonthID=$scope.para.MonthID+aa;

        if($scope.para.MonthID==13){
          $scope.para.MonthID=1;
          $scope.para.YearID=$scope.para.YearID+1;
        }
        if($scope.para.MonthID==0){
         $scope.para.MonthID=12;
          $scope.para.YearID=$scope.para.YearID-1;
        }
        $scope.para2.MonthID=$scope.para.MonthID;
        $scope.para2.YearID=$scope.para.YearID;

        $scope.dianpingliebiao=DataFactory.party_dangyuandianpingliebiao($scope.para);
        $scope.dianpingliebiao2=DataFactory.party_dangyuandianpingliebiao($scope.para2);
        $scope.dianpingliebiao3=DataFactory.party_danfyuanbeiyaoqingliebiao($scope.para3);

     };

}).controller('BanqianCtrl', function($scope,$state,$ionicModal,DataFactory,UploaderFactory) {
  var u=angular.fromJson(localStorage.loginuser);
     $scope.para={};
     $scope.para.UserName=u.name;
     $scope.para.Password='';
     $scope.options={};
     $scope.options.callback=function(response){
       var rr=angular.fromJson(response);
            log(rr);

            if(rr.length>0){
              $scope.para.ImgLst=rr;
            }else{
              alert("上传图片失败!");
            }
     };
      $scope.sheet=function(){
      UploaderFactory.upload($scope.options);
  };


    $scope.zhibulist=DataFactory.getzhibulist($scope.para);
    $scope.save=function(){

      //  if(!$scope.para.ChangeOutZBID){
      //    msg("请选择转出党支部");
      //    return false;
      // }

      if(!$scope.para.ChangeIntoZBID){
         msg("请选择转入党支部");
         return false;
      }



      DataFactory.party_jifenbanqian($scope.para,function(result){
          if(result.Msg=="成功"){
            msg("您的积分迁转申请已提交成功，请静待审核!");
            $state.go("tab.party");
          }else{
            msg("搬迁失败");
          }
      },function(err){
        msgerr();
      });
    };
$ionicModal.fromTemplateUrl('tupian-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modalb = modal;
      });
    $ionicModal.fromTemplateUrl('fenleichaxun-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.inout='';
 $scope.openModal=function(type){
  $scope.inout=type;
     $scope.modal.show();
 };
 $scope.closeModal=function(){
   $scope.modal.hide();
   $scope.modalb.hide();
};
$scope.queding=function(){
  log($scope.para);
  $scope.moredata=true;
  $scope.flag=false;
  $scope.closeModal();


};

$scope.sele=function(dw,zb){

  if($scope.inout=='in'){
$scope.para.indw=dw;
  $scope.para.inzb=zb;
     $scope.para.ChangeIntoDWID=dw.dwId;
      $scope.para.ChangeIntoZBID=zb.zbId;

  }else{
    $scope.para.outdw=dw;
  $scope.para.outzb=zb;
      $scope.para.ChangeOutDWID=dw.dwId;
      $scope.para.ChangeOutZBID=zb.zbId;
  }
}

$scope.curritem={};
$scope.fangda=function(item,index){
$scope.curritem.ImgUrl=item.ImgUrl;
$scope.curritem.index=index;

  $scope.modalb.show();
}
$scope.deleteimg=function(){
  $scope.para.ImgLst.splice($scope.curritem.index,1);
   $scope.modalb.hide();
};


}).controller('PartyviewCtrl', function($scope,$state,DataFactory,$ionicHistory) {
  console.log("22dd:"+$ionicHistory);
   var u=angular.fromJson(localStorage.loginuser);
    var id=$state.params.id;
    var param={};
    param.DyID=id;
    param.UserName=u.name;

    $scope.goback=function(){
      $ionicHistory.goBack(-1);
    };

    $scope.param=param;
    $scope.currentuser={};
    $scope.currentuser.nianfen=(new Date()).getFullYear();


    $scope.adangyuan=DataFactory.party_xiangxiqingkuang(param,function(result){
        var fenshupara={};
        $scope.currentuser=result.Data;
        $scope.currentuser.nianfen=(new Date()).getFullYear();
        fenshupara.UserName=result.Data.uName;
        fenshupara.Password="";
        $scope.myfenshu=DataFactory.party_wodefenshu(fenshupara);
    });
    console.log($state);


}).controller('DianpingSubmitCtrl', function($scope,$state,DataFactory) {
    var u=angular.fromJson(localStorage.loginuser);
    var id=$state.params.id;
    var year=$state.params.year;
    $scope.years=$state.params.year;
  $scope.months=$state.params.month;
    var month=$state.params.month;
    var dpid=$state.params.dpid;

    var param={};
    param.dyId=id;
    param.UserName=u.name;
    $scope.param=param;
 var param2={};
    param2.DyID=id;
    param2.UserName=u.name;
    $scope.adangyuan=DataFactory.party_xiangxiqingkuang(param2);

var dppara={};
dppara.UserName=u.name;
dppara.DPID=dpid;
$scope.adianping={};
$scope.adianping.Data={};
$scope.adianping.Data.dpYear=(new Date()).getFullYear();
$scope.adianping.Data.dpMonth=(new Date()).getMonth()+1;
$scope.dppara={};
$scope.dppara.DPID=dpid;
$scope.dppara.UserName=u.name;

$scope.dplistpara={};
$scope.dplistpara.id=id;
$scope.dplistpara.year=year;
$scope.dplistpara.month=month;
$scope.para2={};
     $scope.para2.UserName=u.name;
     $scope.para2.YearID=(new Date()).getFullYear();
     $scope.para2.MonthID=(new Date()).getMonth()+1;
     $scope.para2.IsSelf=true;

$scope.canshow=(id==u.id);

$scope.dianpinglist=DataFactory.DianPingDetailList($scope.dplistpara);

    $scope.adianping=DataFactory.party_dianpingdetail($scope.dppara);
$scope.dianpingliebiao2=DataFactory.party_dangyuandianpingliebiao($scope.para2,function(result){
  console.log(result.Data);
});
    $scope.save=function(){
        var savepara={};
        savepara.BCommentPersonID=id;
        savepara.CommentPersonID=u.id;
        savepara.UserName=u.name;
        savepara.dpContent=param.Content;
        savepara.dpID=dpid;
        DataFactory.party_dangyuandianping(savepara,function(result){
          if(result.Msg=="成功"){
            msg("点评成功");
            $state.go("tab.dianping");
          }else{
            msg(result.Detail);
          }
        },function(){
            msgerr();
        });
    };



}).controller('XinwenlistCtrl', function($scope,$state,$ionicLoading,DataFactory) {
  var u=angular.fromJson(localStorage.loginuser);
  var para={};
  para.Password='';
  para.UserName=u.name;
   $ionicLoading.show({
            template: '数据加载中...'
          });
  DataFactory.gonggao_liebiao(para,function(result){
    $scope.gonggaolist=result;
    $ionicLoading.hide();
  },function(){
    $ionicLoading.hide();
  });
  $scope.ShowScoredetails=function(){
      $state.go("");
  };

}).controller('RenwusubmitCtrl', function($scope,$state,DataFactory,UploaderFactory,$ionicModal) {
  var nowday=new Date();
  var d1=new Date(nowday.getFullYear(),nowday.getMonth(),nowday.getDate());
  var d2=new Date(nowday.getFullYear(),11,31);
  var d3=(d2-d1)/(1000*60*60*24);

  $scope.mydate={};
  $scope.mydate.d=d3;
  var u=angular.fromJson(localStorage.loginuser);
  var para={};
  para.ID=$state.params.renwuid;
  para.UserName=u.name;
  $scope.mypara={};
  $scope.mypara.ImgLst=new Array();
  $scope.mypara.TaskID=$state.params.renwuid;
  $scope.mypara.UserName=u.name;
  $scope.options={};
  $scope.options.callback=function(response){
          var rr=angular.fromJson(response);
            log(rr);

            if(rr.length>0){
              var aimg={};
              aimg.ImgUrl=rr[0].ImgUrl;
              aimg.ImgName=rr[0].ImgName;
              $scope.mypara.curritem=aimg;
              $scope.mypara.ImgLst.push(aimg);
            }else{
              alert("上传图片失败!");
            }
};
  $scope.sheet=function(){
      UploaderFactory.upload($scope.options);
  };
  DataFactory.party_shequrenwudetail(para,function(result){
    $scope.shequrenwu=result;
    $scope.mypara.JZContent=result.Data.JzContent;
    $scope.mypara.ImgLst=result.Data.ImgLst;
    console.log($scope.mypara);
  });
  $scope.ShowScoredetails=function(){
      $state.go("");
  };
  $scope.save=function(){


    DataFactory.party_shequrenwujuzheng($scope.mypara,function(result){
        if(result.Msg=="成功"){
          msg("提交成功");
        }else{
          msg("提交失败:"+result.Detail);
        }
    },function(err){
      msgerr();
    });

  };

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
  $scope.mypara.ImgLst.splice($scope.curritem.index,1);
   $scope.modal.hide();
};

}).controller('BanqianlistCtrl', function($scope,$state,$ionicLoading,DataFactory) {
   var u=angular.fromJson(localStorage.loginuser);
  var para={};
  para.Password='';
  para.UserName=u.name;
  para.YearID=(new Date()).getFullYear();
  $scope.para=para;
  $scope.jianglidata={};
   $ionicLoading.show({
            template: '数据加载中...'
          });


  DataFactory.party_jifenbanqianliebiao(para,function(result){

    $scope.banqianliebiao=result;
    $ionicLoading.hide();
  },function(){
    $ionicLoading.hide();
  });
  $scope.ShowScoredetails=function(){
      $state.go("");
  };
     $scope.changeyear=function(aa){
        $scope.para.YearID=$scope.para.YearID+aa;
        $scope.jianglidata=DataFactory.party_jianglijifen($scope.para);

     };

}).controller('PartyWodejifenCtrl', function($scope,$state,DataFactory) {
//我的积分，第一个页面
console.log(DataFactory.GetVersion({}));
var u=angular.fromJson(localStorage.loginuser);
  var para={};
  $scope.hide=$state.params.num;
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


}).controller('PartyWoderenwulistCtrl', function($scope,$state,DataFactory) {
  $scope.hide =$state.params.num;
var u=angular.fromJson(localStorage.loginuser);
  var para={};
  para.UserName=u.name;
  para.YearID=$state.params.year;
  para.MonthID=$state.params.month;
  para.leixing=$state.params.leixing;
  $scope.type = $state.params.leixing
  $scope.para=para;
if(para.leixing=='wode'){
 DataFactory.myrenwuchaxun(para,function(result){
    if(result.Msg=="成功")
    {
      $scope.renwus=result;

    }
  });
}else{
  DataFactory.zbrenwuchaxun(para,function(result){
    if(result.Msg=="成功")
    {
      $scope.renwus=result;

    }
  });
}




}).controller('PartyWoderenwudetailCtrl', function($scope,$state,DataFactory) {
//我的积分，详细页面
  $scope.hide=$state.params.num;
var jsrenwu={
"id":1,
"jfrenwu":"任务内容"
};
var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.RWID=$state.params.rwid;

  DataFactory.zbrenwu_detail(para,function(result){
    if(result.Msg=="成功"){
      $scope.arenwu=result.Data;
      $scope.arenwu=jsrenwu;
    }
  });





}).controller('PartywoderenwusubmitCtrl', function($scope,$state,DataFactory,$ionicModal,UploaderFactory) {
//我的积分，详细页面

var u=angular.fromJson(localStorage.loginuser);
  var para={};

  para.UserName=u.name;
  para.RWID=$state.params.rwid;
$scope.canedit=true;
  DataFactory.zbrenwu_detail(para,function(result){
    if(result.Msg=="成功"){
      $scope.arenwu=result.Data;
     $scope.para=result.Data;
      $scope.canedit=result.Data.IsCheck!='已审核';
    }
  });


$scope.save=function(btntype){
    if($scope.issaving==true){
      return false;
    }
    $scope.issaving=true;

    if(($scope.para.curritem.ImgIllustrate||'')!=''&&$scope.addstate==true){
      var tmpitem={};
      tmpitem.ImgIllustrate=$scope.para.curritem.ImgIllustrate;
      tmpitem.ImgUrl="";
      tmpitem.ImgName="";
      $scope.para.ImgLst.push(tmpitem);
   }
    $scope.para.RWID=$scope.para.id;
    $scope.para.UserName=u.name;
     DataFactory.party_zbrenwujuzheng($scope.para,function(result){
    if(result.Msg=="成功"){
      msg("保存成功");
      $state.go("tab.partywodejifen");
    }else{
      msg(result.Detail);
    }
    $scope.issaving=false;
  },function(err){
    msgerr();
  });

  };
  $scope.para={};
$scope.para.curritem={};
$scope.clkitem=function(item,index){
  $scope.addstate=false;
  $scope.para.curritem=item;
  $scope.curritem.index=index;
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
};





            $scope.sheet=function(){
              UploaderFactory.upload($scope.options);

            };


$ionicModal.fromTemplateUrl('tupian-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
$scope.curritem={};
$scope.fangda=function(item,index){
$scope.curritem.ImgUrl=item;
//$scope.curritem.index=$scope.curritem.index||index;

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


});
