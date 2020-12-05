const game_mgr = require("game_mgr");

var game_app = cc.Class({
    extends: game_mgr,

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
