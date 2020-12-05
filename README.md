# 第一天学习

1. 什么是mvc

   m：俗称model，所称为数据模块都放在这里

   v：既view，视图层主要是ui部分

   c：控制层，主要是控制数据显示到显示层

2. 建立客户端的目录

   res：用户的ui的资源部分

   resources：存放预知的地方

   script：存放代码的地方

   scenes：存放场景的地方

   其中script文件下面在分成game游戏逻辑模块，mangers所有的管理模块。

3. 首先在mangers文件创建一个game_mgr.js文件这个文件是整个manager管理类的初始化的地方，然后在用game_app.js继承game_mgr这个单利类。

   下方是game_mgr.js

   ```javascript
   cc.Class({
       extends: cc.Component,
   
       properties: {
           
       },
   
       // LIFE-CYCLE CALLBACKS:
   
       onLoad () {
           cc.log("init game framework ... ...")
   
           cc.log("init game framework sucess!!");
       },
   
       start () {
   
       },
   
       // update (dt) {},
   });
   ```

   然后下面是在mangers文件下建造一个game_app.js文件，代码如下

   ```javascript
   const game_mgr = require("game_mgr");
   
   var game_app = cc.Class({
       extends: game_mgr,
   		//单利模式
       static:{
           Instance:null,
       },
   
       properties: {
       },
   
       // LIFE-CYCLE CALLBACKS:
   
       onLoad () {
           cc.log(game_app.Instance);
           if(game_app.Instance  === null || game_app.Instance ===undefined){
               game_app.Instance = this;
           }
           else{
               cc.error("game_app has");
               this.destroy();
               return;
           }
           game_mgr.prototype.onLoad.call(this);//调用父类的操作
       },
   
       start () {
   
       },
       // update (dt) {},
   });
   ```

   