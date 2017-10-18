app.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider.state('tab.index', {
    url: '/index',
    cache:false,
    views: {
      'tab-index': {
        templateUrl: 'templates/tab-index.html',
        controller: 'IndexCtrl'
      }
    }
  }).state('tab.zhibupaihang', {
    url: '/zhibupaihang',
    cache:false,
    views: {
      'tab-dwdangyuan': {
        templateUrl: 'templates/zhibupaihang.html',
        controller: 'ZhibupaihangCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.huodong', {
    url: '/huodong',
    cache:false,
    views: {
      'tab-huodong': {
        templateUrl: 'templates/huodong.html',
        controller: 'HuodongCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.huodonglist', {
    url: '/huodonglist/:id',
    cache:false,
    views: {
      'tab-huodong': {
        templateUrl: 'templates/huodonglist.html',
        controller: 'HuodonglistCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.huodongdetail', {
    url: '/huodongdetail/:hdid/:id',
    cache:false,
    views: {
      'tab-huodong': {
        templateUrl: 'templates/huodongdetail.html',
        controller: 'HuodongdetailCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.jifenpaihang', {
    url: '/jifenpaihang/:showtype',
    cache:false,
    views: {
      'tab-dwjifen': {
        templateUrl: 'templates/zhibupaihang.html',
        controller: 'ZhibupaihangCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.myjifen', {
    url: '/myjifen/:dyid/:nianfen',
    cache:false,
    views: {
      'tab-dwjifen': {
        templateUrl: 'templates/myjifen.html',
        controller: 'MyjifenCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('tab.zhibuindex', {
    url: '/zhibuindex',
    cache:false,
    views: {
      'tab-dwindex': {
        templateUrl: 'templates/zhibuindex.html',
        controller: 'ZhibuindexCtrl'
      }
    }
  }).state('tab.xiugaimimab', {
    url: '/xiugaimimab',
    cache:false,
    views: {
      'tab-dwindex': {
        templateUrl: 'templates/xiugaimimab.html',
        controller: 'XiugaimimabCtrl'
      }
    }
  }).state('tab.mypartyview', {
    url: '/mypartyview/:id',
    cache:false,
    views: {
      'tab-dwindex': {
        templateUrl: 'templates/mypartyview.html',
        controller: 'MyPartyviewCtrl',
        resolve:{auth:function(UserFactory){return UserFactory.islogined()}}
      }
    }
  }).state('login', {
    url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    }
  )

});

angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope,$state,GonggaoFactory,$timeout,DataFactory,$rootScope, $ionicSlideBoxDelegate) {
  var u=angular.fromJson(localStorage.loginuser);
 $scope.zhibupara={};
$scope.zhibupara.UserName=u.name;
$scope.zhibupara.YearID=(new Date()).getFullYear();
$scope.mypaiming=DataFactory.party_wodezhibupaiming($scope.zhibupara,function(result){
  _zhiburenyuan=result.Data;
});
  $scope.imgserver="";
  $scope.gonggaos=GonggaoFactory.all();
  $scope.paihangdata={};

  var para={};
  para.UserName=u.name;

  para.Password="";
  DataFactory.index_paihang(para,function(result){
    console.log(result);
    if(result.Msg=="成功"){
      $scope.paihangdata=result;
    }else{
      msg("加载排行榜失败!请与管理员联系");
    }
  },function(err){
    msgerr();
  });
var fenshupara={};
fenshupara.UserName=u.name;

  fenshupara.Password="";
  $scope.myfenshu=DataFactory.party_wodefenshu(fenshupara);
  $scope.lunbo=DataFactory.index_lunbo(fenshupara,function(result){
       $ionicSlideBoxDelegate.update();
  });
   
   $scope.change=function(){
    if($ionicSlideBoxDelegate.currentIndex()>=($scope.lunbo.Data.length-1)){
      
      $timeout(function(){
          $ionicSlideBoxDelegate.slide(0);
      },3000);
    }
   };
  $scope.cursel={};
  $scope.cursel.index=0;
  // $interval(function(){
  //           if($scope.cursel.index>=$scope.gonggaos.length-1){
  //                $scope.cursel.index=0;
  //           }else{
  //             $scope.cursel.index++;
  //           }
  //       },3000);

 
})
.controller('LoginCtrl', function($scope,$state,DataFactory,jpushService) {
   var u=angular.fromJson(localStorage.loginuser||'{"data":"{}"}');
   console.log("uuu");
   console.log(u);
   u=u||{};
  $scope.imgdata=emotionPicData;
  $scope.jiaose={};
  $scope.jiaose.show=false;
$scope.auser={};
$scope.jiaose.type=u.data.uType||0;
if($scope.jiaose.type==1){
  $scope.jiaose.seljiaose='党员';
}else if($scope.jiaose.type==3){
  $scope.jiaose.seljiaose='支部';
}else if($scope.jiaose.type==4){
  $scope.jiaose.seljiaose='党委';
}else if($scope.jiaose.type==5){
  $scope.jiaose.seljiaose='组织部';
}
    $scope.auser.UserName=u.name;
    $scope.auser.Password=u.password;
    $scope.dologin=function(){
        if($scope.auser.UserName==""){
            msg("请输入用户名");
            return false;
        }
        if($scope.auser.Password==""){
           msg("请输入密码");
            return false;
        }
        var para={};
        para.UserName=$scope.auser.UserName;
        para.Password=$scope.auser.Password;
        DataFactory.user_login(para,function(result){
            if(result.Msg=="成功"){
                 var rr={};
                rr.id=result.Data.uId;
                rr.name=result.Data.uName;
                rr.password=$scope.auser.Password;
                rr.data=result.Data;
                localStorage.loginuser=angular.toJson(rr);
                 if(result.Data.uType!=$scope.jiaose.type){
                  msg("用户角色选择错误");
                  return false;
                }
                jpushService.getRegistrationID(function(regmsg){
                   
                      //alert(regmsg);
                      var regdata={};
                      regdata.UserName=rr.name;
                      regdata.Tag="";
                      regdata.RegistrationID=regmsg;
                      DataFactory.SetRegistrationID(regdata);
                   
                });
        if(result.Data.uType>=3){
                document.location.href="#/tab/zhibuindex";
                 // $state.go("tab.zhibuindex",{},{reload:true});
                  console.log("9090");

                }else{
                  document.location.href="#/tab/index";
                 // $state.go("tab.index",{},{reload:true});
                }

            }else{
              msg(result.Detail);
            }
        },function(err){
            msgerr();
        });
       
    };
     
     console.log("This is LoginCtrl");
})

.controller('ChatsCtrl', function($scope, Chats,DataFactory) {
  $scope.showhide=false;
  $scope.showhidebiaoqing=function(){
    $scope.showhide=!$scope.showhide;
  };
  $scope.biaoqing=function(key){
    $scope.showhide=false;
    $scope.send_content=$scope.send_content+key;
  };
  $scope.imgdata=emotionPicData;
  $scope.message={};
  $scope.message.name="支部消息";
  $scope.message.initok=false;
 var u=angular.fromJson(localStorage.loginuser);

   $scope.para={};
     $scope.para.UserName=u.name;
     $scope.para.YearID=(new Date()).getFullYear();
 
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);

}).controller('ZhibupaihangCtrl', function($scope, $stateParams, DataFactory,$ionicActionSheet,$ionicModal) {
  $scope.showtype=$stateParams.showtype;
   var u=angular.fromJson(localStorage.loginuser);
     $scope.para={};
     $scope.para.UserName=u.name;
     $scope.para.YearID=(new Date()).getFullYear();
     $scope.mypaiming=DataFactory.party_wodezhibupaiming($scope.para);

      $scope.changeyear=function(aa){
        $scope.para.YearID=$scope.para.YearID+aa;
        $scope.mypaiming=DataFactory.party_wodezhibupaiming($scope.para);

     };
    $scope.sousuo=function(){

      $scope.mypaiming=DataFactory.party_wodezhibupaiming($scope.para,function(result){
        if(result.Data.Count==0){
          msg("无此人信息");
        }
      });
    };
     $scope.zhibulist=DataFactory.getzhibulist($scope.para);

    $ionicModal.fromTemplateUrl('fenleichaxun-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $ionicModal.fromTemplateUrl('gaojichaxun-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modalb = modal;
      });
      $ionicModal.fromTemplateUrl('xuanzedangwei-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modalc = modal;
      });


      $scope.inout='';
 $scope.openModal=function(type){
  $scope.inout=type;
     $scope.modal.show();
 };
 $scope.closeModal=function(){
   $scope.modal.hide();
};
$scope.openModalb=function(type){
  $scope.inout=type;
     $scope.modalb.show();
 };
 $scope.closeModalb=function(){
   $scope.modalb.hide();
};
$scope.openModalc=function(type){
  $scope.inout=type;
     $scope.modalc.show();
 };
 $scope.closeModalc=function(){
   $scope.modalc.hide();
};
$scope.queding=function(){
  log($scope.para);
  $scope.moredata=true;
  $scope.flag=false;
  $scope.closeModal();
};
$scope.quedingb=function(){
  log($scope.para);
  $scope.sousuo();
  $scope.closeModalb();
};
$scope.quedingc=function(){
  log($scope.para);
 alert('22');
  $scope.closeModalc();
};
$scope.quanbuc=function(){
  alert('11');
  $scope.outzb.dwName='全部';
  $scope.para.DangWeiID='-1';
}
$scope.seldwc=function(dw){
$scope.outzb.dwName=dw.dwName;
$scope.para.DangWeiID=dw.dwId;
 // $scope.sousuo();
  $scope.closeModalc();
};
var xuelipara={};
xuelipara.UserName=u.name;
xuelipara.Password="";
xuelipara.UserType=u.uType;

$scope.xuelilist=new Array();
$scope.xuelilist.push({text:"全部",value:"-1"});
DataFactory.GetXueliList(xuelipara,function(result){
  if(result.Msg=="成功"){
      for(var i=0;i<result.Data.length;i++){
        var tt={};
        tt.text=result.Data[i].xlName;
        tt.value=result.Data[i].xlId;
        $scope.xuelilist.push(tt);
      }
  }
});
$scope.outzb={};
$scope.sele=function(dw,zb){
      $scope.para.ZhiBuID=zb.zbId;
      $scope.outzb.zbName=zb.zbName;
  $scope.sousuo();
}
$scope.quanbu=function(){
  $scope.para.ZhiBuID='-1';
  $scope.para.DangWeiID='-1';
  $scope.outzb.zbName='全部';
   $scope.sousuo();
}
$scope.changetxt=function(type,text,value){
  if(type=="性别"){
    $scope.outzb.xingbie=text;
    $scope.para.Sex=value;
    if(value=="-1"){
        delete $scope.para.Sex;
    }else{
      $scope.para.Sex=value;
    }
  }
  if(type=="党龄"){
    $scope.outzb.dangling=text;
    if(value=="-1"){
        delete $scope.para.dAge;
    }else{
      $scope.para.dAge=value;
    }

   
  }
  if(type=="年龄"){
    $scope.outzb.nianling=text;
    $scope.para.Age=value;
  }
  if(type=="学历"){
    $scope.outzb.xueli=text;
    if(value=="-1"){
        delete $scope.para.XueLiID;
    }else{
      $scope.para.XueLiID=value;
    }
  }
}
$scope.opensheet=function(type){
  var buttons=[];
  if(type=="性别"){
      buttons.push({text:'全部',value:'-1'});
      buttons.push({text:'男',value:'1'});
      buttons.push({text:'女',value:'0'});
  }
  if(type=='党龄'){
    buttons.push({text:'全部',value:'-1'});
      buttons.push({text:'5年以上',value:'5'});
      buttons.push({text:'10年以上',value:'10'});
      buttons.push({text:'15年以上',value:'15'});
      buttons.push({text:'20年以上',value:'20'});
      buttons.push({text:'25年以上',value:'25'});
      buttons.push({text:'30年以上',value:'30'});
      buttons.push({text:'35年以上',value:'35'});
      buttons.push({text:'40年以上',value:'40'});
      buttons.push({text:'45年以上',value:'45'});
      buttons.push({text:'50年以上',value:'50'});
      buttons.push({text:'55年以上',value:'55'});
      buttons.push({text:'60年以上',value:'60'});
  }
  if(type=="年龄"){
    buttons.push({text:'全部',value:''});
      
      buttons.push({text:'20-25岁',value:'20-25'});
      buttons.push({text:'26-30岁',value:'26-30'});
      buttons.push({text:'30-35岁',value:'30-35'});
      buttons.push({text:'36-40岁',value:'36-40'});
      buttons.push({text:'40-45岁',value:'40-45'});
      buttons.push({text:'46-50岁',value:'46-50'});
      buttons.push({text:'50-55岁',value:'50-55'});
      buttons.push({text:'56-60岁',value:'56-60'});
      buttons.push({text:'60-65岁',value:'60-65'});
      buttons.push({text:'66-70岁',value:'66-70'});
      buttons.push({text:'70-75岁',value:'70-75'});
      buttons.push({text:'76-80岁',value:'76-80'});
      buttons.push({text:'80岁以上',value:'80以上'});
  }
  if(type=='学历'){
    buttons=$scope.xuelilist;
  }

  var hideSheet = $ionicActionSheet.show({
                      buttons: buttons,
                        titleText: '请选择要执行的操作',
                        cancelText: '取消',
                        cancel: function() {
                             // add cancel code..
                        },
                      buttonClicked: function(index) {
                        $scope.changetxt(type,buttons[index].text,buttons[index].value);
                      return true;
                      }
                  });
}

}).controller('MyPartyviewCtrl', function($scope,$state, $stateParams, DataFactory) {

console.log("MyPartyviewCtrl");
      var u=angular.fromJson(localStorage.loginuser);
    var id=$state.params.id;
    var param={};
    param.DyID=id;
    param.UserName=u.name;
    $scope.param=param;

    $scope.adangyuan=DataFactory.party_xiangxiqingkuang(param);

}).controller('ZhibuindexCtrl', function($scope,$state, $stateParams, DataFactory) {
console.log("zhibuindex11");
      var u=angular.fromJson(localStorage.loginuser);
    var id=$state.params.id;
    var param={};
    param.DyID=id;
    param.UserName=u.name;
    param.Password='';
    $scope.param=param;
    $scope.gaishu=DataFactory.party_getindexcontent(param);
  $scope.logoutbb=function(){
      // localStorage.loginuser='{}';
       var logoutpara={};
        logoutpara.UserName=u.name;
        logoutpara.Password='';
       DataFactory.user_logout(logoutpara);

      $state.go("login");
  };
  $scope.xiugaimimab=function(){
    state.go("tab.xiugaimimab");
  };

}).controller('XiugaimimabCtrl', function($scope,$state, $stateParams, DataFactory,UploaderFactory) {
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

}).controller('MyjifenCtrl', function($scope,$state, $stateParams, DataFactory) {
    //$stateParams.dyid;
  var u=angular.fromJson(localStorage.loginuser);
    var id=$stateParams.dyid;
    var param={};
    param.DyID=id;
    param.UserName=u.name;
    $scope.param=param;
    $scope.currentuser={};
    $scope.currentuser.nianfen=$stateParams.nianfen;
    console.log($stateParams.nianfen);

    DataFactory.party_xiangxiqingkuang(param,function(result){
        var fenshupara={};
        $scope.currentuser=result.Data;
        $scope.currentuser.nianfen=$stateParams.nianfen;
        fenshupara.UserName=result.Data.uName;
        fenshupara.Password="";
        $scope.myfenshu=DataFactory.party_wodefenshu(fenshupara);
    });

   // $scope.adangyuan=DataFactory.party_xiangxiqingkuang(param);

}).controller('HuodongCtrl', function($scope,$state, $stateParams, DataFactory) {
    //$stateParams.dyid;
  var u=angular.fromJson(localStorage.loginuser);
    var id=$stateParams.dyid;
    var param={};
    param.DyID=id;
    param.UserName=u.name;
    $scope.param=param;
    $scope.currentuser={};
    
    $scope.huodong=huodong;



    
}).controller('HuodonglistCtrl', function($scope,$state, $stateParams, DataFactory) {
  var u=angular.fromJson(localStorage.loginuser);
    var id=$stateParams.id;
    var param={};
    param.DyID=id;
    param.UserName=u.name;
    $scope.param=param;
    $scope.huodong=huodong;
    $scope.currenthuodong=$scope.huodong.Data[id];
    $scope.huodonglist=new Array();
    $scope.liangxueyizuo=function(type){
      var p1={};
      p1.Type=type;
      p1.UserName=u.name;
      DataFactory.GetThemeLearnList(p1,function(result){
          if(result.Msg=="成功"){
            for(var i=0;i<result.Data.length;i++){
               var tmp={};
               tmp.hdTitle=result.Data[i].ztxxtitle;
               tmp.hdTime=result.Data[i].ztxxaddtime;
               tmp.hdid=id;
               tmp.detailid=result.Data[i].id;
               $scope.huodonglist.push(tmp);
            }
          }else{
            msg(result.Detail);
          }
      });
    };
    $scope.butishu=function(type){
      var p1={};
      p1.Type=type;
      p1.UserName=u.name;
      DataFactory.GetPartyBuildingList(p1,function(result){
          if(result.Msg=="成功"){
            for(var i=0;i<result.Data.length;i++){
               var tmp={};
               tmp.hdTitle=result.Data[i].title;
               tmp.hdTime=result.Data[i].addtime;
               tmp.hdid=id;
               tmp.detailid=result.Data[i].id;
               $scope.huodonglist.push(tmp);
            }
          }else{
            msg(result.Detail);
          }
      });

    };
    $scope.xiaoshubao=function(){
      var p1={};
      p1.YearID=$scope.param.YearID;
      p1.MonthID=$scope.param.MonthID;
      p1.UserName=u.name;
      DataFactory.GetSatchelList(p1,function(result){
          if(result.Msg=="成功"){
            for(var i=0;i<result.Data.length;i++){
               var tmp={};
               tmp.hdTitle=result.Data[i].title;
               tmp.hdTime=result.Data[i].addtime;
               tmp.hdid=id;
               tmp.detailid=result.Data[i].id;
               $scope.huodonglist.push(tmp);
            }
          }else{
            msg(result.Detail);
          }
      });      
    };
    $scope.chuangjianhuodong=function(){
      var p1={};
      p1.Password="";
      p1.UserName=u.name;
      DataFactory.GetCreateActivityList(p1,function(result){
          if(result.Msg=="成功"){
            for(var i=0;i<result.Data.length;i++){
               var tmp={};
               tmp.hdTitle=result.Data[i].title;
               tmp.hdTime=result.Data[i].addtime;
               tmp.hdid=id;
               tmp.detailid=result.Data[i].id;
               $scope.huodonglist.push(tmp);
            }
          }else{
            msg(result.Detail);
          }
      });      

    };
    $scope.zhuiganchaoyue=function(){
      var p1={};
      p1.Password="";
      p1.UserName=u.name;
      DataFactory.GetChaseAfterList(p1,function(result){
          if(result.Msg=="成功"){
            for(var i=0;i<result.Data.length;i++){
               var tmp={};
               tmp.hdTitle=result.Data[i].title;
               tmp.hdTime=result.Data[i].addtime;
               tmp.hdid=id;
               tmp.detailid=result.Data[i].id;
               $scope.huodonglist.push(tmp);
            }
          }else{
            msg(result.Detail);
          }
      });      
    };
    if(id==0){
      $scope.liangxueyizuo(0);
    }else if(id==1){
      $scope.liangxueyizuo(1);
    }else if(id==2){
      $scope.butishu(1);
    }else if(id==3){
      $scope.xiaoshubao();
    }else if(id==4){
      $scope.butishu(2);
    }else if(id==5){
      $scope.chuangjianhuodong();
    }else if(id==6){
      $scope.zhuiganchaoyue();
    }

    
}).controller('HuodongdetailCtrl', function($scope,$state, $stateParams, DataFactory) {
  var u=angular.fromJson(localStorage.loginuser);
    var id=$stateParams.id;
    var hdid=$stateParams.hdid;
    var param={};
    param.DyID=id;
    param.UserName=u.name;
    $scope.param=param;
    $scope.param.hdid=hdid;
    $scope.currentuser={};
    $scope.currentuser.nianfen=$stateParams.nianfen;
    console.log($stateParams.nianfen);
$scope.huodong=huodong;
    $scope.currenthuodong=$scope.huodong.Data[id];
    $scope.huodongdetail={};
    $scope.liangxueyizuo=function(type,detailid){
      var p1={};
      p1.ID=detailid;
      p1.UserName=u.name;
      DataFactory.GetThemeLearnDetail(p1,function(result){
          if(result.Msg=="成功"){
            $scope.huodongdetail.title=result.Data.ztxxtitle;
            $scope.huodongdetail.content=result.Data.ztxxcounts;
            $scope.huodongdetail.addtime=result.Data.ztxxaddtime;
            $scope.huodongdetail.haslist=true;
            $scope.huodongdetail.ztxxHyList=result.Data.ztxxHyList;
          }else{
            msg(result.Detail);
          }
      });
    };
    $scope.butishu=function(type,detailid){
      var p1={};
      p1.ID=detailid;
      p1.UserName=u.name;
      DataFactory.GetPartyBuildingDetail(p1,function(result){
          if(result.Msg=="成功"){
            $scope.huodongdetail.title=result.Data.title;
            $scope.huodongdetail.content=result.Data.counts;
            $scope.huodongdetail.addtime=result.Data.addtime;
            $scope.huodongdetail.haslist=false;
            
          }else{
            msg(result.Detail);
          }
      });

    };
    $scope.xiaoshubao=function(detailid){
        var p1={};
        p1.ID=detailid;
        p1.UserName=u.name;
        DataFactory.GetSatchelDetail(p1,function(result){
            if(result.Msg=="成功"){
              $scope.huodongdetail.title=result.Data.title;
              $scope.huodongdetail.content=result.Data.counts;
              $scope.huodongdetail.addtime=result.Data.addtime;
              $scope.huodongdetail.haslist=false;
              
            }else{
              msg(result.Detail);
            }
        });

    };
    $scope.chuangjianhuodong=function(detailid){
      var p1={};
      p1.ID=detailid;
      p1.UserName=u.name;
      DataFactory.GetCreateActivityDetail(p1,function(result){
          if(result.Msg=="成功"){
              $scope.huodongdetail.title=result.Data.title;
              $scope.huodongdetail.content=result.Data.counts;
              $scope.huodongdetail.addtime=result.Data.addtime;
              $scope.huodongdetail.haslist=false;
              
            }else{
              msg(result.Detail);
            }
      });      

    };
    $scope.zhuiganchaoyue=function(detailid){
      var p1={};
      p1.ID=detailid;
      p1.UserName=u.name;
      DataFactory.GetChaseAfterDetail(p1,function(result){
          if(result.Msg=="成功"){
              $scope.huodongdetail.title=result.Data.title;
              $scope.huodongdetail.content=result.Data.counts;
              $scope.huodongdetail.addtime=result.Data.addtime;
              $scope.huodongdetail.haslist=false;
              
            }else{
              msg(result.Detail);
            }
      });      
    };
    if(hdid==0){
      $scope.liangxueyizuo(0,id);
    }else if(hdid==1){
      $scope.liangxueyizuo(1,id);
    }else if(hdid==2){
      $scope.butishu(0,id);
    }else if(hdid==3){
      $scope.xiaoshubao(id);
    }else if(hdid==4){
      $scope.butishu(1,id);
    }else if(hdid==5){
      $scope.chuangjianhuodong(id);
    }else if(hdid==6){
      $scope.zhuiganchaoyue(id);
    }
    
})

;
