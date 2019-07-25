/*  
 * 注意：这是去除了 zepto 框架的修改版 (2016-9-13 by zy)
 *
 * @弹出提示层 ( 加载动画(load), 提示动画(tip), 成功(success), 错误(error), )  
 * @method  tipBox  
 * @description 默认配置参数   
 * @time    2014-12-19   
 * @param {Number} width -宽度  
 * @param {Number} height -高度         
 * @param {String} str -默认文字  
 * @param {Object} windowDom -载入窗口 默认当前窗口  
 * @param {Number} setTime -定时消失(毫秒) 默认为0 不消失  
 * @param {Boolean} hasMask -是否显示遮罩  
 * @param {Boolean} hasMaskWhite -显示白色遮罩   
 * @param {Boolean} clickDomCancel -点击空白取消  
 * @param {Function} callBack -回调函数 (只在开启定时消失时才生效)  
 * @param {Function} hasBtn -显示按钮  
 * @param {String} type -动画类型 (加载,成功,失败,提示)  
 * @example   
 * new TipBox();   
 * new TipBox({type:'load',setTime:1000,callBack:function(){ alert(..) }});   
*/  
function TipBox(cfg){  
    this.config = {   
        width          : 250,      
        height         : 170,                 
        str            : '正在处理',       
        windowDom      : window,   
        setTime        : 0,     
        hasMask        : true,    
        hasMaskWhite   : false,   
        clickDomCancel : false,    
        callBack       : null, 
        hasBtn         : false, 
        type           : 'success'  
    }
    if (cfg.width) this.config.width = cfg.width;
    if (cfg.height) this.config.height = cfg.height;
    if (cfg.str) this.config.str = cfg.str;
    if (cfg.windowDom) this.config.windowDom = cfg.windowDom;
    if (cfg.setTime) this.config.setTime = cfg.setTime;
    if (cfg.hasMask) this.config.hasMask = cfg.hasMask;
    if (cfg.hasMaskWhite) this.config.hasMaskWhite = cfg.hasMaskWhite;
    if (cfg.clickDomCancel) this.config.clickDomCancel = cfg.clickDomCancel;
    if (cfg.callBack) this.config.callBack = cfg.callBack;
    if (cfg.hasBtn) this.config.hasBtn = cfg.hasBtn;
    if (cfg.type) this.config.type = cfg.type;
      
    //存在就retrun  
    if(TipBox.prototype.boundingBox) return;  
      
    //初始化  
    this.render(this.config.type);    
    return this;   
};  
  
//外层box  
TipBox.prototype.boundingBox = null;  
  
//渲染  
TipBox.prototype.render = function(tipType,container){    
    this.renderUI(tipType);   
      
    //绑定事件  
    this.bindUI();   
      
    //初始化UI  
    this.syncUI();
    //this.append(container || this.config.windowDom.document.body, TipBox.prototype.boundingBox);
};

//追加子元素
TipBox.prototype.append = function (parent, html) {
    var span = document.createElement("span");
    span.innerHTML = html;
    parent.appendChild(span);
}
  
//渲染UI  
TipBox.prototype.renderUI = function(tipType){   
    this.append(this.config.windowDom.document.body, "<div id='animationTipBox'></div>");
    TipBox.prototype.boundingBox = document.getElementById("animationTipBox");
    tipType == 'load'    && this.loadRenderUI();  
    tipType == 'success' && this.successRenderUI();   
    tipType == 'error'   && this.errorRenderUI();  
    tipType == 'tip' && this.tipRenderUI();
                  
    //是否显示遮罩  
    if(this.config.hasMask){  
        this.config.hasMaskWhite ? this._mask = "<div class='mask_white'></div>" : this._mask = "<div class='mask'></div>";  
        this.append(this.config.windowDom.document.body, this._mask);
        setTimeout(function () {
            _this._mask = _this.config.hasMaskWhite ? document.querySelector(".mask_white") : document.querySelector(".mask");
        }, 1);
    }
    // 是否显示按钮
    if(this.config.hasBtn){
        this.config.height = 206;
        var __tipbox = document.getElementById("animationTipBox");
        if (__tipbox) __tipbox.style.marginTop = "103px";
        switch(this.config.type){
            case 'success':
                this.append(document.querySelector("#animationTipBox"), "<button class='okoButton'>ok</button>");
                break;
            case 'error': this.append(document.querySelector("#animationTipBox"), "<button class='okoButton redOkoButton'>ok</button>");
                break;
            case 'tip': this.append(document.querySelector("#animationTipBox"), "<button class='okoButton'>ok</button>");
                break;
            default: break;
        }
        var __btn = document.querySelector(".okoButton");
        if (__btn) {
            __btn.onclick = function () {
                _this.close();
            };
        }
    }
    //定时消失  
    _this = this;  
    !this.config.setTime && typeof this.config.callBack === "function" && (this.config.setTime = 1);      
    this.config.setTime && setTimeout( function(){ _this.close(); }, _this.config.setTime );  
};  
  
TipBox.prototype.bindUI = function(){  
    _this = this;
    //点击空白立即取消  
    if(this.config.clickDomCancel && this._mask)
    {
        setTimeout(function () {
            _this._mask = _this.config.hasMaskWhite ? document.querySelector(".mask_white") : document.querySelector(".mask");
            _this._mask.onclick = function () {
                _this.close();
            };
        }, 1);
    }
};  
TipBox.prototype.syncUI = function () {
    TipBox.prototype.boundingBox.style.width = this.config.width + 'px';
    TipBox.prototype.boundingBox.style.height = this.config.height + 'px';
    TipBox.prototype.boundingBox.style.marginLeft = "-" + (this.config.width / 2) + 'px';
    TipBox.prototype.boundingBox.style.marginTop = "-" + (this.config.height / 2) + 'px';
};  
  
//提示效果UI  
TipBox.prototype.tipRenderUI = function(){  
    var tip = "<div class='tip'>";  
        tip +="     <div class='icon'>i</div>";  
        tip +="     <div class='dec_txt'>"+this.config.str+"</div>";  
        tip += "</div>";  
    this.append(TipBox.prototype.boundingBox, tip);
};  
  
//成功效果UI  
TipBox.prototype.successRenderUI = function(){  
    var suc = "<div class='success'>";  
        suc +=" <div class='icon'>";  
        suc +=      "<div class='line_short'></div>";  
        suc +=      "<div class='line_long'></div>  ";        
        suc +=  "</div>";  
        suc +=" <div class='dec_txt'>"+this.config.str+"</div>";  
        suc += "</div>";
    this.append(TipBox.prototype.boundingBox, suc);
};  
  
//错误效果UI  
TipBox.prototype.errorRenderUI = function(){  
    var err  = "<div class='lose'>";  
        err +=  "   <div class='icon'>";  
        err +=  "       <div class='icon_box'>";  
        err +=  "           <div class='line_left'></div>";  
        err +=  "           <div class='line_right'></div>";  
        err +=  "       </div>";  
        err +=  "   </div>";  
        err +=  "<div class='dec_txt'>"+this.config.str+"</div>";  
        err += "</div>";
    this.append(TipBox.prototype.boundingBox, err);
};  
  
//加载动画load UI  
TipBox.prototype.loadRenderUI = function(){  
    var load = "<div class='load'>";  
        load += "<div class='icon_box'>";  
    for(var i = 1; i < 4; i++ ){  
        load += "<div class='cirBox"+i+"'>";  
        load +=     "<div class='cir1'></div>";  
        load +=     "<div class='cir2'></div>";  
        load +=     "<div class='cir3'></div>";  
        load +=     "<div class='cir4'></div>";  
        load += "</div>";  
    }  
    load += "</div>";  
    load += "</div>";  
    load += "<div class='dec_txt'>"+this.config.str+"</div>";  
    this.append(TipBox.prototype.boundingBox, load);
};  
  
//关闭  
TipBox.prototype.close = function () {
    this.destroy();  
    this.config.setTime && typeof this.config.callBack === "function" && this.config.callBack();                  
};  
  
//销毁
TipBox.prototype.destroy = function () {
    if (this._mask) {
        this._mask.parentNode.removeChild(this._mask);
        this._mask = null;
    }
    if (TipBox.prototype.boundingBox) {
        TipBox.prototype.boundingBox.parentNode.removeChild(TipBox.prototype.boundingBox);
        TipBox.prototype.boundingBox = null;
    }
};  