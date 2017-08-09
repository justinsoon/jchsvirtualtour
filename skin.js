// Garden Gnome Software - Skin
// Pano2VR 5.0beta4/11987
// Filename: silhouette_v1.ggsk
// Generated Wed Aug 9 11:22:38 2017

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggLeft=-127;
		this._controller.ggTop=-55;
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container ';
		this._controller.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -127px;';
		hs+='position : absolute;';
		hs+='top : -55px;';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		this._controller.setAttribute('style',hs);
		this._controller.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		me._controller.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._controller.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller_bg=document.createElement('div');
		this._controller_bg.ggId="controller_bg";
		this._controller_bg.ggLeft=-105;
		this._controller_bg.ggTop=-41;
		this._controller_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller_bg.ggVisible=true;
		this._controller_bg.className='ggskin ggskin_rectangle ';
		this._controller_bg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='background : rgba(63,63,63,0.498039);';
		hs+='border : 0px solid #000000;';
		hs+='height : 50px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -41px;';
		hs+='visibility : inherit;';
		hs+='width : 287px;';
		this._controller_bg.setAttribute('style',hs);
		this._controller_bg.style[domTransform + 'Origin']='50% 50%';
		me._controller_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._controller_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._controller_bg.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._controller_bg);
		this._fullscreen_off=document.createElement('div');
		this._fullscreen_off__img=document.createElement('img');
		this._fullscreen_off__img.className='ggskin ggskin_svg';
		this._fullscreen_off__img.setAttribute('src',basePath + 'images/fullscreen_off.svg');
		this._fullscreen_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen_off__img['ondragstart']=function() { return false; };
		this._fullscreen_off.appendChild(this._fullscreen_off__img);
		this._fullscreen_off__imgo=document.createElement('img');
		this._fullscreen_off__imgo.className='ggskin ggskin_svg';
		this._fullscreen_off__imgo.setAttribute('src',basePath + 'images/fullscreen_off__o.svg');
		this._fullscreen_off__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._fullscreen_off__imgo['ondragstart']=function() { return false; };
		this._fullscreen_off.appendChild(this._fullscreen_off__imgo);
		this._fullscreen_off.ggId="fullscreen_off";
		this._fullscreen_off.ggLeft=64;
		this._fullscreen_off.ggTop=-32;
		this._fullscreen_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_off.ggVisible=true;
		this._fullscreen_off.className='ggskin ggskin_svg ';
		this._fullscreen_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._fullscreen_off.setAttribute('style',hs);
		this._fullscreen_off.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen_off.onclick=function () {
			me.player.exitFullscreen();
		}
		this._fullscreen_off.onmouseover=function () {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
		}
		this._fullscreen_off.onmouseout=function () {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
		}
		me._fullscreen_off.ggCurrentLogicStateVisible = -1;
		this._fullscreen_off.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._fullscreen_off.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_off.style.visibility="hidden";
					me._fullscreen_off.ggVisible=false;
				}
				else {
					me._fullscreen_off.style.visibility="inherit";
					me._fullscreen_off.ggVisible=true;
				}
			}
		}
		this._fullscreen_off.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._fullscreen_off.ggUpdateConditionResize();
		}
		this._controller.appendChild(this._fullscreen_off);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen__imgo=document.createElement('img');
		this._fullscreen__imgo.className='ggskin ggskin_svg';
		this._fullscreen__imgo.setAttribute('src',basePath + 'images/fullscreen__o.svg');
		this._fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._fullscreen__imgo['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__imgo);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggLeft=64;
		this._fullscreen.ggTop=-32;
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg ';
		this._fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function () {
			me.player.enterFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		me._fullscreen.ggCurrentLogicStateVisible = -1;
		this._fullscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._fullscreen.ggCurrentLogicStateVisible == 0) {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.ggVisible=false;
				}
				else {
					me._fullscreen.style.visibility="inherit";
					me._fullscreen.ggVisible=true;
				}
			}
		}
		this._fullscreen.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._fullscreen.ggUpdateConditionResize();
		}
		this._controller.appendChild(this._fullscreen);
		this._movemode_1=document.createElement('div');
		this._movemode_1__img=document.createElement('img');
		this._movemode_1__img.className='ggskin ggskin_svg';
		this._movemode_1__img.setAttribute('src',basePath + 'images/movemode_1.svg');
		this._movemode_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._movemode_1__img['ondragstart']=function() { return false; };
		this._movemode_1.appendChild(this._movemode_1__img);
		this._movemode_1__imgo=document.createElement('img');
		this._movemode_1__imgo.className='ggskin ggskin_svg';
		this._movemode_1__imgo.setAttribute('src',basePath + 'images/movemode_1__o.svg');
		this._movemode_1__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._movemode_1__imgo['ondragstart']=function() { return false; };
		this._movemode_1.appendChild(this._movemode_1__imgo);
		this._movemode_1.ggId="movemode_1";
		this._movemode_1.ggLeft=32;
		this._movemode_1.ggTop=-32;
		this._movemode_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode_1.ggVisible=false;
		this._movemode_1.className='ggskin ggskin_svg ';
		this._movemode_1.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._movemode_1.setAttribute('style',hs);
		this._movemode_1.style[domTransform + 'Origin']='50% 50%';
		me._movemode_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._movemode_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._movemode_1.onclick=function () {
			me.player.changeViewMode(0);
		}
		this._movemode_1.onmouseover=function () {
			me._movemode_1__img.style.visibility='hidden';
			me._movemode_1__imgo.style.visibility='inherit';
		}
		this._movemode_1.onmouseout=function () {
			me._movemode_1__img.style.visibility='inherit';
			me._movemode_1__imgo.style.visibility='hidden';
		}
		me._movemode_1.ggCurrentLogicStateVisible = -1;
		this._movemode_1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.viewMode() == 1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._movemode_1.ggCurrentLogicStateVisible == 0) {
					me._movemode_1.style.visibility="inherit";
					me._movemode_1.ggVisible=true;
				}
				else {
					me._movemode_1.style.visibility="hidden";
					me._movemode_1.ggVisible=false;
				}
			}
		}
		this._movemode_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._movemode_1);
		this._movemode_2=document.createElement('div');
		this._movemode_2__img=document.createElement('img');
		this._movemode_2__img.className='ggskin ggskin_svg';
		this._movemode_2__img.setAttribute('src',basePath + 'images/movemode_2.svg');
		this._movemode_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._movemode_2__img['ondragstart']=function() { return false; };
		this._movemode_2.appendChild(this._movemode_2__img);
		this._movemode_2__imgo=document.createElement('img');
		this._movemode_2__imgo.className='ggskin ggskin_svg';
		this._movemode_2__imgo.setAttribute('src',basePath + 'images/movemode_2__o.svg');
		this._movemode_2__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._movemode_2__imgo['ondragstart']=function() { return false; };
		this._movemode_2.appendChild(this._movemode_2__imgo);
		this._movemode_2.ggId="movemode_2";
		this._movemode_2.ggLeft=32;
		this._movemode_2.ggTop=-32;
		this._movemode_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode_2.ggVisible=false;
		this._movemode_2.className='ggskin ggskin_svg ';
		this._movemode_2.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._movemode_2.setAttribute('style',hs);
		this._movemode_2.style[domTransform + 'Origin']='50% 50%';
		me._movemode_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._movemode_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._movemode_2.onclick=function () {
			me.player.changeViewMode(1);
		}
		this._movemode_2.onmouseover=function () {
			me._movemode_2__img.style.visibility='hidden';
			me._movemode_2__imgo.style.visibility='inherit';
		}
		this._movemode_2.onmouseout=function () {
			me._movemode_2__img.style.visibility='inherit';
			me._movemode_2__imgo.style.visibility='hidden';
		}
		me._movemode_2.ggCurrentLogicStateVisible = -1;
		this._movemode_2.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.viewMode() == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._movemode_2.ggCurrentLogicStateVisible == 0) {
					me._movemode_2.style.visibility="inherit";
					me._movemode_2.ggVisible=true;
				}
				else {
					me._movemode_2.style.visibility="hidden";
					me._movemode_2.ggVisible=false;
				}
			}
		}
		this._movemode_2.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._movemode_2);
		this._info=document.createElement('div');
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info__imgo=document.createElement('img');
		this._info__imgo.className='ggskin ggskin_svg';
		this._info__imgo.setAttribute('src',basePath + 'images/info__o.svg');
		this._info__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info__imgo['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__imgo);
		this._info.ggId="info";
		this._info.ggLeft=0;
		this._info.ggTop=-32;
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg ';
		this._info.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info.onclick=function () {
			var flag=(me._userdata.style.visibility=='hidden');
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=flag?'inherit':'hidden';
			me._userdata.ggVisible=flag;
			var flag=(me._screentint.style.visibility=='hidden');
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility=flag?'inherit':'hidden';
			me._screentint.ggVisible=flag;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='hidden';
			me._controller.ggVisible=false;
		}
		this._info.onmouseover=function () {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
		}
		this._info.onmouseout=function () {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
		}
		this._info.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._info);
		this._autorotate=document.createElement('div');
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate__imgo=document.createElement('img');
		this._autorotate__imgo.className='ggskin ggskin_svg';
		this._autorotate__imgo.setAttribute('src',basePath + 'images/autorotate__o.svg');
		this._autorotate__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._autorotate__imgo['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__imgo);
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg ';
		this._autorotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate.style[domTransform + 'Origin']='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._autorotate.onclick=function () {
			me.player.startAutorotate(0.2,5,1);
		}
		this._autorotate.onmouseover=function () {
			me._autorotate__img.style.visibility='hidden';
			me._autorotate__imgo.style.visibility='inherit';
		}
		this._autorotate.onmouseout=function () {
			me._autorotate__img.style.visibility='inherit';
			me._autorotate__imgo.style.visibility='hidden';
		}
		me._autorotate.ggCurrentLogicStateVisible = -1;
		this._autorotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._autorotate.ggCurrentLogicStateVisible == 0) {
					me._autorotate.style.visibility="hidden";
					me._autorotate.ggVisible=false;
				}
				else {
					me._autorotate.style.visibility="inherit";
					me._autorotate.ggVisible=true;
				}
			}
		}
		this._autorotate.ggUpdatePosition=function () {
		}
		this._controller.appendChild(this._autorotate);
		this._autorotate_off=document.createElement('div');
		this._autorotate_off__img=document.createElement('img');
		this._autorotate_off__img.className='ggskin ggskin_svg';
		this._autorotate_off__img.setAttribute('src',basePath + 'images/autorotate_off.svg');
		this._autorotate_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._autorotate_off__img['ondragstart']=function() { return false; };
		this._autorotate_off.appendChild(this._autorotate_off__img);
		this._autorotate_off__imgo=document.createElement('img');
		this._autorotate_off__imgo.className='ggskin ggskin_svg';
		this._autorotate_off__imgo.setAttribute('src',basePath + 'images/autorotate_off__o.svg');
		this._autorotate_off__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._autorotate_off__imgo['ondragstart']=function() { return false; };
		this._autorotate_off.appendChild(this._autorotate_off__imgo);
		this._autorotate_off.ggId="autorotate_off";
		this._autorotate_off.ggLeft=-32;
		this._autorotate_off.ggTop=-32;
		this._autorotate_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate_off.ggVisible=false;
		this._autorotate_off.className='ggskin ggskin_svg ';
		this._autorotate_off.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._autorotate_off.setAttribute('style',hs);
		this._autorotate_off.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._autorotate_off.onclick=function () {
			me.player.stopAutorotate();
		}
		this._autorotate_off.onmouseover=function () {
			me._autorotate_off__img.style.visibility='hidden';
			me._autorotate_off__imgo.style.visibility='inherit';
		}
		this._autorotate_off.onmouseout=function () {
			me._autorotate_off__img.style.visibility='inherit';
			me._autorotate_off__imgo.style.visibility='hidden';
		}
		me._autorotate_off.ggCurrentLogicStateVisible = -1;
		this._autorotate_off.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._autorotate_off.ggCurrentLogicStateVisible == 0) {
					me._autorotate_off.style.visibility="inherit";
					me._autorotate_off.ggVisible=true;
				}
				else {
					me._autorotate_off.style.visibility="hidden";
					me._autorotate_off.ggVisible=false;
				}
			}
		}
		this._autorotate_off.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._autorotate_off);
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout__imgo=document.createElement('img');
		this._zoomout__imgo.className='ggskin ggskin_svg';
		this._zoomout__imgo.setAttribute('src',basePath + 'images/zoomout__o.svg');
		this._zoomout__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomout__imgo['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__imgo);
		this._zoomout.ggId="zoomout";
		this._zoomout.ggLeft=-64;
		this._zoomout.ggTop=-32;
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg ';
		this._zoomout.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseover=function () {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin__imgo=document.createElement('img');
		this._zoomin__imgo.className='ggskin ggskin_svg';
		this._zoomin__imgo.setAttribute('src',basePath + 'images/zoomin__o.svg');
		this._zoomin__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomin__imgo['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__imgo);
		this._zoomin.ggId="zoomin";
		this._zoomin.ggLeft=-96;
		this._zoomin.ggTop=-32;
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg ';
		this._zoomin.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -96px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseover=function () {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._zoomin);
		this._text_7=document.createElement('div');
		this._text_7__text=document.createElement('div');
		this._text_7.className='ggskin ggskin_textdiv';
		this._text_7.ggTextDiv=this._text_7__text;
		this._text_7.ggId="Text 7";
		this._text_7.ggLeft=99;
		this._text_7.ggTop=-29;
		this._text_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_7.ggVisible=true;
		this._text_7.className='ggskin ggskin_text ';
		this._text_7.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 99px;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		this._text_7.setAttribute('style',hs);
		this._text_7.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 66px;';
		hs+='height: 22px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._text_7__text.setAttribute('style',hs);
		this._text_7__text.innerHTML="Welcome";
		this._text_7.appendChild(this._text_7__text);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_7.onclick=function () {
			var flag=(me._text_1.style.visibility=='hidden');
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility=flag?'inherit':'hidden';
			me._text_1.ggVisible=flag;
		}
		this._text_7.onmouseover=function () {
			me._text_7.style[domTransition]='none';
			me._text_7.ggParameter.sx=1.05;me._text_7.ggParameter.sy=1.05;
			me._text_7.style[domTransform]=parameterToTransform(me._text_7.ggParameter);
		}
		this._text_7.onmouseout=function () {
			me._text_7.style[domTransition]='none';
			me._text_7.ggParameter.sx=1;me._text_7.ggParameter.sy=1;
			me._text_7.style[domTransform]=parameterToTransform(me._text_7.ggParameter);
		}
		this._text_7.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._controller.appendChild(this._text_7);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-105;
		this._loading.ggTop=-30;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function () {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=false;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.onclick=function () {
			me._close0.style[domTransition]='none';
			me._close0.style.visibility='hidden';
			me._close0.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='inherit';
			me._controller.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._video_popup_youtube.style[domTransition]='none';
			me._video_popup_youtube.style.visibility='hidden';
			me._video_popup_youtube.ggVisible=false;
			me._video_popup_vimeo.style[domTransition]='none';
			me._video_popup_vimeo.style.visibility='hidden';
			me._video_popup_vimeo.ggVisible=false;
			me._video_popup_url.style[domTransition]='none';
			me._video_popup_url.style.visibility='hidden';
			me._video_popup_url.ggVisible=false;
			me._video_popup_controls_url.style[domTransition]='none';
			me._video_popup_controls_url.style.visibility='hidden';
			me._video_popup_controls_url.ggVisible=false;
			me._video_popup_file.style[domTransition]='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
			me._video_popup_controls_file.style[domTransition]='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._screentint.ggUpdatePosition=function () {
		}
		this.divSkin.appendChild(this._screentint);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggLeft=-120;
		this._userdata.ggTop=-80;
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container ';
		this._userdata.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		this._userdata.setAttribute('style',hs);
		this._userdata.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		me._userdata.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._userdata.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle ';
		this._userdatabg.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdatabg.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabg.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdatabg);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text ';
		this._title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._title.setAttribute('style',hs);
		this._title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._title.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text ';
		this._description.ggType='text';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._description.setAttribute('style',hs);
		this._description.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 73px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._description.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._description.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text ';
		this._author.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._author.setAttribute('style',hs);
		this._author.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._author.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._author.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text ';
		this._datetime.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._datetime.setAttribute('style',hs);
		this._datetime.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._datetime.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._datetime.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text ';
		this._copyright.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		this._copyright.setAttribute('style',hs);
		this._copyright.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._copyright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._copyright.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._copyright);
		this._userdata_close=document.createElement('div');
		this._userdata_close__img=document.createElement('img');
		this._userdata_close__img.className='ggskin ggskin_svg';
		this._userdata_close__img.setAttribute('src',basePath + 'images/userdata_close.svg');
		this._userdata_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._userdata_close__img['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__img);
		this._userdata_close__imgo=document.createElement('img');
		this._userdata_close__imgo.className='ggskin ggskin_svg';
		this._userdata_close__imgo.setAttribute('src',basePath + 'images/userdata_close__o.svg');
		this._userdata_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._userdata_close__imgo['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__imgo);
		this._userdata_close.ggId="userdata_close";
		this._userdata_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_close.ggVisible=true;
		this._userdata_close.className='ggskin ggskin_svg ';
		this._userdata_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._userdata_close.setAttribute('style',hs);
		this._userdata_close.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_close.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='inherit';
			me._controller.ggVisible=true;
		}
		this._userdata_close.onmouseover=function () {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
		}
		this._userdata_close.onmouseout=function () {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
		}
		this._userdata_close.ggUpdatePosition=function () {
		}
		this._userdata.appendChild(this._userdata_close);
		this.divSkin.appendChild(this._userdata);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-150;
		this._information.ggTop=-126;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -150px;';
		hs+='position : absolute;';
		hs+='top : -126px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle ';
		this._informationbg.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		this._informationbg.setAttribute('style',hs);
		this._informationbg.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._informationbg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 243px;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 243px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._info_title);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + 'images/ht_info_close.svg');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close__imgo=document.createElement('img');
		this._ht_info_close__imgo.className='ggskin ggskin_svg';
		this._ht_info_close__imgo.setAttribute('src',basePath + 'images/ht_info_close__o.svg');
		this._ht_info_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_info_close__imgo['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__imgo);
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg ';
		this._ht_info_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function () {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='inherit';
			me._controller.ggVisible=true;
		}
		this._ht_info_close.onmouseover=function () {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function () {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function () {
		}
		this._information.appendChild(this._ht_info_close);
		this.divSkin.appendChild(this._information);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.ggUpdatePosition=function () {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._popup_image__img);
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=false;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function () {
			var parentWidth = me._popup_image.offsetWidth;
			var parentHeight = me._popup_image.offsetHeight;
			var aspectRatioDiv = me._popup_image.offsetWidth / me._popup_image.offsetHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._video_popup_file=document.createElement('div');
		this._video_popup_file.ggId="video_popup_file";
		this._video_popup_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_file.ggVisible=false;
		this._video_popup_file.className='ggskin ggskin_container ';
		this._video_popup_file.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._video_popup_file.setAttribute('style',hs);
		this._video_popup_file.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_file.ggUpdatePosition=function () {
		}
		this._loading_video_file=document.createElement('div');
		this._loading_video_file__img=document.createElement('img');
		this._loading_video_file__img.className='ggskin ggskin_svg';
		this._loading_video_file__img.setAttribute('src',basePath + 'images/loading_video_file.svg');
		this._loading_video_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_file__img['ondragstart']=function() { return false; };
		this._loading_video_file.appendChild(this._loading_video_file__img);
		this._loading_video_file.ggId="loading_video_file";
		this._loading_video_file.ggLeft=-20;
		this._loading_video_file.ggTop=-20;
		this._loading_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_file.ggVisible=true;
		this._loading_video_file.className='ggskin ggskin_svg ';
		this._loading_video_file.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_video_file.setAttribute('style',hs);
		this._loading_video_file.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_file.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_file.appendChild(this._loading_video_file);
		this.divSkin.appendChild(this._video_popup_file);
		this._video_popup_controls_file=document.createElement('div');
		this._video_popup_controls_file.ggId="video_popup_controls_file";
		this._video_popup_controls_file.ggLeft=-142;
		this._video_popup_controls_file.ggTop=-31;
		this._video_popup_controls_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_controls_file.ggVisible=false;
		this._video_popup_controls_file.className='ggskin ggskin_container ';
		this._video_popup_controls_file.ggType='container';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -142px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		this._video_popup_controls_file.setAttribute('style',hs);
		this._video_popup_controls_file.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_controls_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_controls_file.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._ht_video_play_file=document.createElement('div');
		this._ht_video_play_file__img=document.createElement('img');
		this._ht_video_play_file__img.className='ggskin ggskin_svg';
		this._ht_video_play_file__img.setAttribute('src',basePath + 'images/ht_video_play_file.svg');
		this._ht_video_play_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_play_file__img['ondragstart']=function() { return false; };
		this._ht_video_play_file.appendChild(this._ht_video_play_file__img);
		this._ht_video_play_file__imgo=document.createElement('img');
		this._ht_video_play_file__imgo.className='ggskin ggskin_svg';
		this._ht_video_play_file__imgo.setAttribute('src',basePath + 'images/ht_video_play_file__o.svg');
		this._ht_video_play_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_play_file__imgo['ondragstart']=function() { return false; };
		this._ht_video_play_file.appendChild(this._ht_video_play_file__imgo);
		this._ht_video_play_file.ggId="ht_video_play_file";
		this._ht_video_play_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_play_file.ggVisible=false;
		this._ht_video_play_file.className='ggskin ggskin_svg ';
		this._ht_video_play_file.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		this._ht_video_play_file.setAttribute('style',hs);
		this._ht_video_play_file.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_play_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_play_file.onclick=function () {
			me.player.playSound("popup_video_file","1");
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='inherit';
			me._ht_video_pause_file.ggVisible=true;
		}
		this._ht_video_play_file.onmouseover=function () {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		this._ht_video_play_file.onmouseout=function () {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		this._ht_video_play_file.ggUpdatePosition=function () {
		}
		this._video_popup_controls_file.appendChild(this._ht_video_play_file);
		this._ht_video_pause_file=document.createElement('div');
		this._ht_video_pause_file__img=document.createElement('img');
		this._ht_video_pause_file__img.className='ggskin ggskin_svg';
		this._ht_video_pause_file__img.setAttribute('src',basePath + 'images/ht_video_pause_file.svg');
		this._ht_video_pause_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_pause_file__img['ondragstart']=function() { return false; };
		this._ht_video_pause_file.appendChild(this._ht_video_pause_file__img);
		this._ht_video_pause_file__imgo=document.createElement('img');
		this._ht_video_pause_file__imgo.className='ggskin ggskin_svg';
		this._ht_video_pause_file__imgo.setAttribute('src',basePath + 'images/ht_video_pause_file__o.svg');
		this._ht_video_pause_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_pause_file__imgo['ondragstart']=function() { return false; };
		this._ht_video_pause_file.appendChild(this._ht_video_pause_file__imgo);
		this._ht_video_pause_file.ggId="ht_video_pause_file";
		this._ht_video_pause_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_pause_file.ggVisible=true;
		this._ht_video_pause_file.className='ggskin ggskin_svg ';
		this._ht_video_pause_file.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		this._ht_video_pause_file.setAttribute('style',hs);
		this._ht_video_pause_file.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_pause_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_pause_file.onclick=function () {
			me.player.pauseSound("popup_video_file");
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='inherit';
			me._ht_video_play_file.ggVisible=true;
		}
		this._ht_video_pause_file.onmouseover=function () {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		this._ht_video_pause_file.onmouseout=function () {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		this._ht_video_pause_file.ggUpdatePosition=function () {
		}
		this._video_popup_controls_file.appendChild(this._ht_video_pause_file);
		this.divSkin.appendChild(this._video_popup_controls_file);
		this._video_popup_url=document.createElement('div');
		this._video_popup_url.ggId="video_popup_url";
		this._video_popup_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_url.ggVisible=false;
		this._video_popup_url.className='ggskin ggskin_container ';
		this._video_popup_url.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._video_popup_url.setAttribute('style',hs);
		this._video_popup_url.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			return false;
		}
		me._video_popup_url.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_url.ggUpdatePosition=function () {
		}
		this._loading_video_url=document.createElement('div');
		this._loading_video_url__img=document.createElement('img');
		this._loading_video_url__img.className='ggskin ggskin_svg';
		this._loading_video_url__img.setAttribute('src',basePath + 'images/loading_video_url.svg');
		this._loading_video_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_url__img['ondragstart']=function() { return false; };
		this._loading_video_url.appendChild(this._loading_video_url__img);
		this._loading_video_url.ggId="loading_video_url";
		this._loading_video_url.ggLeft=-20;
		this._loading_video_url.ggTop=-20;
		this._loading_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_url.ggVisible=true;
		this._loading_video_url.className='ggskin ggskin_svg ';
		this._loading_video_url.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_video_url.setAttribute('style',hs);
		this._loading_video_url.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_url.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_url.appendChild(this._loading_video_url);
		this.divSkin.appendChild(this._video_popup_url);
		this._video_popup_controls_url=document.createElement('div');
		this._video_popup_controls_url.ggId="video_popup_controls_url";
		this._video_popup_controls_url.ggLeft=-142;
		this._video_popup_controls_url.ggTop=-31;
		this._video_popup_controls_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_controls_url.ggVisible=false;
		this._video_popup_controls_url.className='ggskin ggskin_container ';
		this._video_popup_controls_url.ggType='container';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -142px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		this._video_popup_controls_url.setAttribute('style',hs);
		this._video_popup_controls_url.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_url.ggIsActive=function() {
			return false;
		}
		me._video_popup_controls_url.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_controls_url.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._ht_video_play_url=document.createElement('div');
		this._ht_video_play_url__img=document.createElement('img');
		this._ht_video_play_url__img.className='ggskin ggskin_svg';
		this._ht_video_play_url__img.setAttribute('src',basePath + 'images/ht_video_play_url.svg');
		this._ht_video_play_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_play_url__img['ondragstart']=function() { return false; };
		this._ht_video_play_url.appendChild(this._ht_video_play_url__img);
		this._ht_video_play_url__imgo=document.createElement('img');
		this._ht_video_play_url__imgo.className='ggskin ggskin_svg';
		this._ht_video_play_url__imgo.setAttribute('src',basePath + 'images/ht_video_play_url__o.svg');
		this._ht_video_play_url__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_play_url__imgo['ondragstart']=function() { return false; };
		this._ht_video_play_url.appendChild(this._ht_video_play_url__imgo);
		this._ht_video_play_url.ggId="ht_video_play_url";
		this._ht_video_play_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_play_url.ggVisible=false;
		this._ht_video_play_url.className='ggskin ggskin_svg ';
		this._ht_video_play_url.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		this._ht_video_play_url.setAttribute('style',hs);
		this._ht_video_play_url.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_play_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_play_url.onclick=function () {
			me.player.playSound("popup_video_url","1");
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='inherit';
			me._ht_video_pause_url.ggVisible=true;
		}
		this._ht_video_play_url.onmouseover=function () {
			me._ht_video_play_url__img.style.visibility='hidden';
			me._ht_video_play_url__imgo.style.visibility='inherit';
		}
		this._ht_video_play_url.onmouseout=function () {
			me._ht_video_play_url__img.style.visibility='inherit';
			me._ht_video_play_url__imgo.style.visibility='hidden';
		}
		this._ht_video_play_url.ggUpdatePosition=function () {
		}
		this._video_popup_controls_url.appendChild(this._ht_video_play_url);
		this._ht_video_pause_url=document.createElement('div');
		this._ht_video_pause_url__img=document.createElement('img');
		this._ht_video_pause_url__img.className='ggskin ggskin_svg';
		this._ht_video_pause_url__img.setAttribute('src',basePath + 'images/ht_video_pause_url.svg');
		this._ht_video_pause_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_pause_url__img['ondragstart']=function() { return false; };
		this._ht_video_pause_url.appendChild(this._ht_video_pause_url__img);
		this._ht_video_pause_url__imgo=document.createElement('img');
		this._ht_video_pause_url__imgo.className='ggskin ggskin_svg';
		this._ht_video_pause_url__imgo.setAttribute('src',basePath + 'images/ht_video_pause_url__o.svg');
		this._ht_video_pause_url__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_pause_url__imgo['ondragstart']=function() { return false; };
		this._ht_video_pause_url.appendChild(this._ht_video_pause_url__imgo);
		this._ht_video_pause_url.ggId="ht_video_pause_url";
		this._ht_video_pause_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_pause_url.ggVisible=true;
		this._ht_video_pause_url.className='ggskin ggskin_svg ';
		this._ht_video_pause_url.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		this._ht_video_pause_url.setAttribute('style',hs);
		this._ht_video_pause_url.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_pause_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_pause_url.onclick=function () {
			me.player.pauseSound("popup_video_url");
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='inherit';
			me._ht_video_play_url.ggVisible=true;
		}
		this._ht_video_pause_url.onmouseover=function () {
			me._ht_video_pause_url__img.style.visibility='hidden';
			me._ht_video_pause_url__imgo.style.visibility='inherit';
		}
		this._ht_video_pause_url.onmouseout=function () {
			me._ht_video_pause_url__img.style.visibility='inherit';
			me._ht_video_pause_url__imgo.style.visibility='hidden';
		}
		this._ht_video_pause_url.ggUpdatePosition=function () {
		}
		this._video_popup_controls_url.appendChild(this._ht_video_pause_url);
		this.divSkin.appendChild(this._video_popup_controls_url);
		this._video_popup_vimeo=document.createElement('div');
		this._video_popup_vimeo.ggId="video_popup_vimeo";
		this._video_popup_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_vimeo.ggVisible=false;
		this._video_popup_vimeo.className='ggskin ggskin_container ';
		this._video_popup_vimeo.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._video_popup_vimeo.setAttribute('style',hs);
		this._video_popup_vimeo.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			return false;
		}
		me._video_popup_vimeo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_vimeo.ggUpdatePosition=function () {
		}
		this._loading_video_vimeo=document.createElement('div');
		this._loading_video_vimeo__img=document.createElement('img');
		this._loading_video_vimeo__img.className='ggskin ggskin_svg';
		this._loading_video_vimeo__img.setAttribute('src',basePath + 'images/loading_video_vimeo.svg');
		this._loading_video_vimeo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_vimeo__img['ondragstart']=function() { return false; };
		this._loading_video_vimeo.appendChild(this._loading_video_vimeo__img);
		this._loading_video_vimeo.ggId="loading_video_vimeo";
		this._loading_video_vimeo.ggLeft=-20;
		this._loading_video_vimeo.ggTop=-20;
		this._loading_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_vimeo.ggVisible=true;
		this._loading_video_vimeo.className='ggskin ggskin_svg ';
		this._loading_video_vimeo.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_video_vimeo.setAttribute('style',hs);
		this._loading_video_vimeo.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_vimeo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_vimeo.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_vimeo.appendChild(this._loading_video_vimeo);
		this.divSkin.appendChild(this._video_popup_vimeo);
		this._video_popup_youtube=document.createElement('div');
		this._video_popup_youtube.ggId="video_popup_youtube";
		this._video_popup_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_youtube.ggVisible=false;
		this._video_popup_youtube.className='ggskin ggskin_container ';
		this._video_popup_youtube.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		this._video_popup_youtube.setAttribute('style',hs);
		this._video_popup_youtube.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		me._video_popup_youtube.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_youtube.ggUpdatePosition=function () {
		}
		this._loading_video_youtube=document.createElement('div');
		this._loading_video_youtube__img=document.createElement('img');
		this._loading_video_youtube__img.className='ggskin ggskin_svg';
		this._loading_video_youtube__img.setAttribute('src',basePath + 'images/loading_video_youtube.svg');
		this._loading_video_youtube__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_youtube__img['ondragstart']=function() { return false; };
		this._loading_video_youtube.appendChild(this._loading_video_youtube__img);
		this._loading_video_youtube.ggId="loading_video_youtube";
		this._loading_video_youtube.ggLeft=-20;
		this._loading_video_youtube.ggTop=-20;
		this._loading_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_youtube.ggVisible=true;
		this._loading_video_youtube.className='ggskin ggskin_svg ';
		this._loading_video_youtube.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		this._loading_video_youtube.setAttribute('style',hs);
		this._loading_video_youtube.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_youtube.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_youtube.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_youtube.appendChild(this._loading_video_youtube);
		this.divSkin.appendChild(this._video_popup_youtube);
		this._close0=document.createElement('div');
		this._close0__img=document.createElement('img');
		this._close0__img.className='ggskin ggskin_svg';
		this._close0__img.setAttribute('src',basePath + 'images/close0.svg');
		this._close0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._close0__img['ondragstart']=function() { return false; };
		this._close0.appendChild(this._close0__img);
		this._close0__imgo=document.createElement('img');
		this._close0__imgo.className='ggskin ggskin_svg';
		this._close0__imgo.setAttribute('src',basePath + 'images/close0__o.svg');
		this._close0__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._close0__imgo['ondragstart']=function() { return false; };
		this._close0.appendChild(this._close0__imgo);
		this._close0.ggId="close";
		this._close0.ggLeft=-37;
		this._close0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close0.ggVisible=false;
		this._close0.className='ggskin ggskin_svg ';
		this._close0.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		this._close0.setAttribute('style',hs);
		this._close0.style[domTransform + 'Origin']='50% 50%';
		me._close0.ggIsActive=function() {
			return false;
		}
		me._close0.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._close0.onclick=function () {
			me._close0.style[domTransition]='none';
			me._close0.style.visibility='hidden';
			me._close0.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='inherit';
			me._controller.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._video_popup_youtube.style[domTransition]='none';
			me._video_popup_youtube.style.visibility='hidden';
			me._video_popup_youtube.ggVisible=false;
			me._video_popup_vimeo.style[domTransition]='none';
			me._video_popup_vimeo.style.visibility='hidden';
			me._video_popup_vimeo.ggVisible=false;
			me._video_popup_url.style[domTransition]='none';
			me._video_popup_url.style.visibility='hidden';
			me._video_popup_url.ggVisible=false;
			me._video_popup_controls_url.style[domTransition]='none';
			me._video_popup_controls_url.style.visibility='hidden';
			me._video_popup_controls_url.ggVisible=false;
			me._video_popup_file.style[domTransition]='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
			me._video_popup_controls_file.style[domTransition]='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
		}
		this._close0.onmouseover=function () {
			me._close0__img.style.visibility='hidden';
			me._close0__imgo.style.visibility='inherit';
		}
		this._close0.onmouseout=function () {
			me._close0__img.style.visibility='inherit';
			me._close0__imgo.style.visibility='hidden';
		}
		this._close0.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._close0);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggLeft=-228;
		this._text_1.ggTop=-143;
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=true;
		this._text_1.className='ggskin ggskin_text ';
		this._text_1.ggType='text';
		hs ='';
		hs+='height : 290px;';
		hs+='left : -232px;';
		hs+='position : absolute;';
		hs+='top : -147px;';
		hs+='visibility : inherit;';
		hs+='width : 426px;';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 426px;';
		hs+='height: 290px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.784314);';
		hs+='border: 8px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="<br\/>Welcome to the virtual tour of John Champe High School!";
		this._text_1.appendChild(this._text_1__text);
		me._text_1.ggIsActive=function() {
			return false;
		}
		me._text_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._text_1.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image ';
		this._image_1.ggType='image';
		hs ='';
		hs+='height : 172px;';
		hs+='left : 122px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='0% 0%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._image_1.ggUpdatePosition=function () {
		}
		this._text_1.appendChild(this._image_1);
		this._text_4=document.createElement('div');
		this._text_4__text=document.createElement('div');
		this._text_4.className='ggskin ggskin_textdiv';
		this._text_4.ggTextDiv=this._text_4__text;
		this._text_4.ggId="Text 4";
		this._text_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_4.ggVisible=true;
		this._text_4.className='ggskin ggskin_text ';
		this._text_4.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 138px;';
		hs+='position : absolute;';
		hs+='top : 249px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		this._text_4.setAttribute('style',hs);
		this._text_4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 149px;';
		hs+='height: 21px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.784314);';
		hs+='border: 1px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_4__text.setAttribute('style',hs);
		this._text_4__text.innerHTML="Click for Instructions";
		this._text_4.appendChild(this._text_4__text);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_4.onclick=function () {
			me._text_4.style[domTransition]='none';
			me._text_4.style.visibility='hidden';
			me._text_4.ggVisible=false;
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility='hidden';
			me._image_1.ggVisible=false;
			me._text_5.style[domTransition]='none';
			me._text_5.style.visibility='inherit';
			me._text_5.ggVisible=true;
			me._text_6.style[domTransition]='none';
			me._text_6.style.visibility='inherit';
			me._text_6.ggVisible=true;
		}
		this._text_4.onmouseover=function () {
			me._text_4.style[domTransition]='none';
			me._text_4.ggParameter.sx=1.03;me._text_4.ggParameter.sy=1.03;
			me._text_4.style[domTransform]=parameterToTransform(me._text_4.ggParameter);
		}
		this._text_4.onmouseout=function () {
			me._text_4.style[domTransition]='none';
			me._text_4.ggParameter.sx=1;me._text_4.ggParameter.sy=1;
			me._text_4.style[domTransform]=parameterToTransform(me._text_4.ggParameter);
		}
		this._text_4.ggUpdatePosition=function () {
		}
		this._text_1.appendChild(this._text_4);
		this._text_5=document.createElement('div');
		this._text_5__text=document.createElement('div');
		this._text_5.className='ggskin ggskin_textdiv';
		this._text_5.ggTextDiv=this._text_5__text;
		this._text_5.ggId="Text 5";
		this._text_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_5.ggVisible=false;
		this._text_5.className='ggskin ggskin_text ';
		this._text_5.ggType='text';
		hs ='';
		hs+='height : 170px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 381px;';
		this._text_5.setAttribute('style',hs);
		this._text_5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 381px;';
		hs+='height: 170px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_5__text.setAttribute('style',hs);
		this._text_5__text.innerHTML="Instructions:<br\/><br\/>- Click on the nodes to navigate the tour.<br\/>- Checkmarks on the nodes indicate that a panorama has already been visited.<br\/>- Imbeded pictures are scattered throughout the tour. To view, just click on one. To stop viewing, click on the picture again. In fact, there is one just behind you.<br\/>- For imbeded videos, clicking the video will toggle between play and pause.<br\/>- Click on the \"Toggle Scrollbar\" button to access all panoramas. Click on a panorama to visit it.<br\/>- Use the tool bar at the bottom of the screen to assist in navigating the tour.<br\/>    i. The (+) and (-) buttons zoom in and out (can also use scroll wheel).<br\/>   ii. The circular arrows toggle autorotate, which slowly rotates a panorama automatically.<br\/>  iii. The ( i ) button gives little tid bits of information for special panoramas. <br\/>  iv. The cross of arrows toggles viewing modes (arrow keys may also be used).<br\/>  v. The box with an arrow in it toggles fullscreen mode.<br\/> vi. Click the \"Welcome\" button to bring up this menu again. <br\/>- Please turn your volume ON, as there will be narration in the tour. <br\/>- Also, make sure to visit the Auditorium to check out our promo video. <br\/><br\/>   Thank You for virtually visiting John Champe High <br\/>\t                   School!<br\/><br\/>\t         Produced by Virtual Expeditions<br\/><br\/>                              Senior members: <br\/>\t              William Ogle, Justin Soon,<br\/>\t      Kevin Yoon, Khati Aryan, and Nafi Ahnaf<br\/>";
		this._text_5.appendChild(this._text_5__text);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_5.ggUpdatePosition=function () {
		}
		this._text_1.appendChild(this._text_5);
		this._text_6=document.createElement('div');
		this._text_6__text=document.createElement('div');
		this._text_6.className='ggskin ggskin_textdiv';
		this._text_6.ggTextDiv=this._text_6__text;
		this._text_6.ggId="Text 6";
		this._text_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_6.ggVisible=false;
		this._text_6.className='ggskin ggskin_text ';
		this._text_6.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 166px;';
		hs+='position : absolute;';
		hs+='top : 250px;';
		hs+='visibility : hidden;';
		hs+='width : 97px;';
		this._text_6.setAttribute('style',hs);
		this._text_6.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 97px;';
		hs+='height: 20px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.784314);';
		hs+='border: 1px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_6__text.setAttribute('style',hs);
		this._text_6__text.innerHTML="Return";
		this._text_6.appendChild(this._text_6__text);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_6.onclick=function () {
			me._text_6.style[domTransition]='none';
			me._text_6.style.visibility='hidden';
			me._text_6.ggVisible=false;
			me._text_5.style[domTransition]='none';
			me._text_5.style.visibility='hidden';
			me._text_5.ggVisible=false;
			me._text_4.style[domTransition]='none';
			me._text_4.style.visibility='inherit';
			me._text_4.ggVisible=true;
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility='inherit';
			me._image_1.ggVisible=true;
		}
		this._text_6.onmouseover=function () {
			me._text_6.style[domTransition]='none';
			me._text_6.ggParameter.sx=1.03;me._text_6.ggParameter.sy=1.03;
			me._text_6.style[domTransform]=parameterToTransform(me._text_6.ggParameter);
		}
		this._text_6.onmouseout=function () {
			me._text_6.style[domTransition]='none';
			me._text_6.ggParameter.sx=1;me._text_6.ggParameter.sy=1;
			me._text_6.style[domTransform]=parameterToTransform(me._text_6.ggParameter);
		}
		this._text_6.ggUpdatePosition=function () {
		}
		this._text_1.appendChild(this._text_6);
		this._close=document.createElement('div');
		this._close__img=document.createElement('img');
		this._close__img.className='ggskin ggskin_svg';
		this._close__img.setAttribute('src',basePath + 'images/close.svg');
		this._close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._close__img['ondragstart']=function() { return false; };
		this._close.appendChild(this._close__img);
		this._close__imgo=document.createElement('img');
		this._close__imgo.className='ggskin ggskin_svg';
		this._close__imgo.setAttribute('src',basePath + 'images/close__o.svg');
		this._close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._close__imgo['ondragstart']=function() { return false; };
		this._close.appendChild(this._close__imgo);
		this._close.ggId="close";
		this._close.ggLeft=9;
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=true;
		this._close.className='ggskin ggskin_svg ';
		this._close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		this._close.setAttribute('style',hs);
		this._close.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._close.onclick=function () {
			me._text_1.style[domTransition]='none';
			me._text_1.style.visibility='hidden';
			me._text_1.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='inherit';
			me._controller.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._video_popup_youtube.style[domTransition]='none';
			me._video_popup_youtube.style.visibility='hidden';
			me._video_popup_youtube.ggVisible=false;
			me._video_popup_vimeo.style[domTransition]='none';
			me._video_popup_vimeo.style.visibility='hidden';
			me._video_popup_vimeo.ggVisible=false;
			me._video_popup_url.style[domTransition]='none';
			me._video_popup_url.style.visibility='hidden';
			me._video_popup_url.ggVisible=false;
			me._video_popup_controls_url.style[domTransition]='none';
			me._video_popup_controls_url.style.visibility='hidden';
			me._video_popup_controls_url.ggVisible=false;
			me._video_popup_file.style[domTransition]='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
			me._video_popup_controls_file.style[domTransition]='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
		}
		this._close.onmouseover=function () {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
		}
		this._close.onmouseout=function () {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
		}
		this._close.ggUpdatePosition=function () {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 8 + w) + 'px';
			}
		}
		this._text_1.appendChild(this._close);
		this.divSkin.appendChild(this._text_1);
		this._scrollarea_1=document.createElement('div');
		this._scrollarea_1__content=document.createElement('div');
		this._scrollarea_1.ggContent=this._scrollarea_1__content;
		this._scrollarea_1.appendChild(this._scrollarea_1__content);
		hs ='';
		hs+='background : #8c8c8c;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._scrollarea_1__content.setAttribute('style',hs);
		this._scrollarea_1.ggId="Scrollarea 1";
		this._scrollarea_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._scrollarea_1.ggVisible=false;
		this._scrollarea_1.className='ggskin ggskin_rectangle ';
		this._scrollarea_1.ggType='rectangle';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='background : #8c8c8c;';
		hs+='border : 4px solid #000000;';
		hs+='height : 106px;';
		hs+='left : 5%;';
		hs+='overflow-x : auto;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		this._scrollarea_1.setAttribute('style',hs);
		this._scrollarea_1.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			return false;
		}
		me._scrollarea_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._scrollarea_1.onmouseover=function () {
			me.elementMouseOver['scrollarea_1']=true;
		}
		this._scrollarea_1.onmouseout=function () {
			me.elementMouseOver['scrollarea_1']=false;
		}
		this._scrollarea_1.ontouchend=function () {
			me.elementMouseOver['scrollarea_1']=false;
		}
		this._scrollarea_1.ggUpdatePosition=function () {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._cloner_1=document.createElement('div');
		this._cloner_1.ggNumRepeat = 1;
		this._cloner_1.ggWidth = 122;
		this._cloner_1.ggHeight = 84;
		this._cloner_1.ggUpdating = false;
		this._cloner_1.ggFilter = [];
		this._cloner_1.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			if (typeof filter=='object') {
				me._cloner_1.ggFilter = filter;
			} else {
				filter = me._cloner_1.ggFilter;
			};
			if (me._cloner_1.hasChildNodes() == true) {
				while (me._cloner_1.firstChild) {
					me._cloner_1.removeChild(me._cloner_1.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._cloner_1.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._cloner_1__node = document.createElement('div');
					me._cloner_1.appendChild(me._cloner_1__node);
					me._cloner_1__node.setAttribute('style','position: absolute; top: ' + (row * me._cloner_1.ggHeight) + 'px; left:' + (column * me._cloner_1.ggWidth) + 'px; height: ' + me._cloner_1.ggHeight + 'px; width: ' + me._cloner_1.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_cloner_1_Class(nodeId, me);
					me._cloner_1__node.appendChild(inst.__div);
					me._cloner_1__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._cloner_1.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._cloner_1.ggUpdating = false;
		}
		this._cloner_1.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._cloner_1.childNodes.length; i++) {
				stack.push(me._cloner_1.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._cloner_1.ggTags = [];
		this._cloner_1.ggId="Cloner 1";
		this._cloner_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cloner_1.ggVisible=true;
		this._cloner_1.className='ggskin ggskin_cloner ';
		this._cloner_1.ggType='cloner';
		hs ='';
		hs+='height : 83px;';
		hs+='left : 4px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 121px;';
		this._cloner_1.setAttribute('style',hs);
		this._cloner_1.style[domTransform + 'Origin']='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._cloner_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
					child.scrollIntoView({ behavior: 'smooth'});
				}
			}
		}
		this._cloner_1.ggUpdatePosition=function () {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._cloner_1.ggLastSize) || (me._cloner_1.ggLastSize.w!=w) || (me._cloner_1.ggLastSize.h!=h)) {
				me._cloner_1.ggLastSize={ w:w, h:h };
				me._cloner_1.ggUpdate();
			}
		}
		this._cloner_1.ggNodeChange=function () {
			me._cloner_1.ggUpdateConditionNodeChange();
		}
		this._scrollarea_1__content.appendChild(this._cloner_1);
		this.divSkin.appendChild(this._scrollarea_1);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 11px;';
		hs+='border-radius : 11px;';
		hs+='background : #000000;';
		hs+='border : 3px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : 2.9%;';
		hs+='position : absolute;';
		hs+='top : 85%;';
		hs+='visibility : inherit;';
		hs+='width : 119px;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='100% 100%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._rectangle_1.onclick=function () {
			var flag=(me._scrollarea_1.style.visibility=='hidden');
			me._scrollarea_1.style[domTransition]='none';
			me._scrollarea_1.style.visibility=flag?'inherit':'hidden';
			me._scrollarea_1.ggVisible=flag;
		}
		this._rectangle_1.onmouseover=function () {
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.ggParameter.sx=1.03;me._rectangle_1.ggParameter.sy=1.03;
			me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
		}
		this._rectangle_1.onmouseout=function () {
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.ggParameter.sx=1;me._rectangle_1.ggParameter.sy=1;
			me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
		}
		this._rectangle_1.ggUpdatePosition=function () {
		}
		this._text_2=document.createElement('div');
		this._text_2__text=document.createElement('div');
		this._text_2.className='ggskin ggskin_textdiv';
		this._text_2.ggTextDiv=this._text_2__text;
		this._text_2.ggId="Text 2";
		this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_2.ggVisible=true;
		this._text_2.className='ggskin ggskin_text ';
		this._text_2.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 114px;';
		this._text_2.setAttribute('style',hs);
		this._text_2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 114px;';
		hs+='height: 23px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_2__text.setAttribute('style',hs);
		this._text_2__text.innerHTML="Toggle Scrollbar";
		this._text_2.appendChild(this._text_2__text);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_2.ggUpdatePosition=function () {
		}
		this._rectangle_1.appendChild(this._text_2);
		this.divSkin.appendChild(this._rectangle_1);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._cloner_1.ggUpdate(me._cloner_1.ggTags);
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._cloner_1.ggNodeChange();
		me.ggHotspotCallChildFunctions('ggNodeChange');
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._movemode_1.ggUpdateConditionTimer();
		me._movemode_2.ggUpdateConditionTimer();
		me._autorotate.ggUpdateConditionTimer();
		me._autorotate_off.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._title.ggUpdateText();
		me._description.ggUpdateText();
		me._author.ggUpdateText();
		me._datetime.ggUpdateText();
		me._copyright.ggUpdateText();
		if (me.elementMouseOver['scrollarea_1']) {
			me._text_3.ggText=me.player.hotspot.title;
			me._text_3__text.innerHTML=me._text_3.ggText;
			if (me._text_3.ggUpdateText) {
				me._text_3.ggUpdateText=function() {
					var hs=me.player.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
		}
		me._cloner_1.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_node_visited=document.createElement('div');
			this._ht_node_visited__img=document.createElement('img');
			this._ht_node_visited__img.className='ggskin ggskin_svg';
			this._ht_node_visited__img.setAttribute('src',basePath + 'images/ht_node_visited.svg');
			this._ht_node_visited__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_node_visited__img['ondragstart']=function() { return false; };
			this._ht_node_visited.appendChild(this._ht_node_visited__img);
			this._ht_node_visited__imgo=document.createElement('img');
			this._ht_node_visited__imgo.className='ggskin ggskin_svg';
			this._ht_node_visited__imgo.setAttribute('src',basePath + 'images/ht_node_visited__o.svg');
			this._ht_node_visited__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_node_visited__imgo['ondragstart']=function() { return false; };
			this._ht_node_visited.appendChild(this._ht_node_visited__imgo);
			this._ht_node_visited.ggId="ht_node_visited";
			this._ht_node_visited.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_node_visited.ggVisible=false;
			this._ht_node_visited.className='ggskin ggskin_svg ';
			this._ht_node_visited.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : hidden;';
			hs+='width : 32px;';
			this._ht_node_visited.setAttribute('style',hs);
			this._ht_node_visited.style[domTransform + 'Origin']='50% 50%';
			me._ht_node_visited.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_node_visited.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_node_visited.onmouseover=function () {
				me._ht_node_visited__img.style.visibility='hidden';
				me._ht_node_visited__imgo.style.visibility='inherit';
			}
			this._ht_node_visited.onmouseout=function () {
				me._ht_node_visited__img.style.visibility='inherit';
				me._ht_node_visited__imgo.style.visibility='hidden';
			}
			me._ht_node_visited.ggCurrentLogicStateVisible = -1;
			this._ht_node_visited.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
						me._ht_node_visited.style.visibility="inherit";
						me._ht_node_visited.ggVisible=true;
					}
					else {
						me._ht_node_visited.style.visibility="hidden";
						me._ht_node_visited.ggVisible=false;
					}
				}
			}
			this._ht_node_visited.ggUpdatePosition=function () {
			}
			this._ht_node_visited.ggNodeChange=function () {
				me._ht_node_visited.ggUpdateConditionNodeChange();
			}
			this.__div.appendChild(this._ht_node_visited);
			this._ht_node_image=document.createElement('div');
			this._ht_node_image__img=document.createElement('img');
			this._ht_node_image__img.className='ggskin ggskin_svg';
			this._ht_node_image__img.setAttribute('src',basePath + 'images/ht_node_image.svg');
			this._ht_node_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_node_image__img['ondragstart']=function() { return false; };
			this._ht_node_image.appendChild(this._ht_node_image__img);
			this._ht_node_image__imgo=document.createElement('img');
			this._ht_node_image__imgo.className='ggskin ggskin_svg';
			this._ht_node_image__imgo.setAttribute('src',basePath + 'images/ht_node_image__o.svg');
			this._ht_node_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_node_image__imgo['ondragstart']=function() { return false; };
			this._ht_node_image.appendChild(this._ht_node_image__imgo);
			this._ht_node_image.ggId="ht_node_image";
			this._ht_node_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_node_image.ggVisible=true;
			this._ht_node_image.className='ggskin ggskin_svg ';
			this._ht_node_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_node_image.setAttribute('style',hs);
			this._ht_node_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_node_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_node_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_node_image.onmouseover=function () {
				me._ht_node_image__img.style.visibility='hidden';
				me._ht_node_image__imgo.style.visibility='inherit';
			}
			this._ht_node_image.onmouseout=function () {
				me._ht_node_image__img.style.visibility='inherit';
				me._ht_node_image__imgo.style.visibility='hidden';
			}
			me._ht_node_image.ggCurrentLogicStateVisible = -1;
			this._ht_node_image.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
						me._ht_node_image.style.visibility="hidden";
						me._ht_node_image.ggVisible=false;
					}
					else {
						me._ht_node_image.style.visibility="inherit";
						me._ht_node_image.ggVisible=true;
					}
				}
			}
			this._ht_node_image.ggUpdatePosition=function () {
			}
			this._ht_node_image.ggNodeChange=function () {
				me._ht_node_image.ggUpdateConditionNodeChange();
			}
			this.__div.appendChild(this._ht_node_image);
			this._hotspot_preview=document.createElement('div');
			this._hotspot_preview.ggId="hotspot_preview";
			this._hotspot_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview.ggVisible=false;
			this._hotspot_preview.className='ggskin ggskin_container ';
			this._hotspot_preview.ggType='container';
			hs ='';
			hs+='height : 100px;';
			hs+='left : -75px;';
			hs+='position : absolute;';
			hs+='top : -130px;';
			hs+='visibility : hidden;';
			hs+='width : 150px;';
			this._hotspot_preview.setAttribute('style',hs);
			this._hotspot_preview.style[domTransform + 'Origin']='50% 50%';
			me._hotspot_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspot_preview.ggCurrentLogicStateVisible = -1;
			this._hotspot_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
						me._hotspot_preview.style.visibility="inherit";
						me._hotspot_preview.ggVisible=true;
					}
					else {
						me._hotspot_preview.style.visibility="hidden";
						me._hotspot_preview.ggVisible=false;
					}
				}
			}
			this._hotspot_preview.ggUpdatePosition=function () {
			}
			this._preview_picture_frame_=document.createElement('div');
			this._preview_picture_frame_.ggId="preview_picture_frame ";
			this._preview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_.ggVisible=true;
			this._preview_picture_frame_.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.666667);';
			hs+='border : 0px solid #000000;';
			hs+='height : 100px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 150px;';
			this._preview_picture_frame_.setAttribute('style',hs);
			this._preview_picture_frame_.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_picture_frame_);
			this._preview_nodeimage=document.createElement('div');
			this._preview_nodeimage__img=document.createElement('img');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
			this._preview_nodeimage.ggNodeId=nodeId;
			this._preview_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img['ondragstart']=function() { return false; };
			this._preview_nodeimage.appendChild(this._preview_nodeimage__img);
			this._preview_nodeimage.ggId="Preview NodeImage";
			this._preview_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage.ggVisible=true;
			this._preview_nodeimage.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._preview_nodeimage.setAttribute('style',hs);
			this._preview_nodeimage.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._preview_nodeimage);
			this._tooltip=document.createElement('div');
			this._tooltip__text=document.createElement('div');
			this._tooltip.className='ggskin ggskin_textdiv';
			this._tooltip.ggTextDiv=this._tooltip__text;
			this._tooltip.ggId="tooltip";
			this._tooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip.ggVisible=true;
			this._tooltip.className='ggskin ggskin_text ';
			this._tooltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 4px;';
			hs+='position : absolute;';
			hs+='top : 76px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			this._tooltip.setAttribute('style',hs);
			this._tooltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 140px;';
			hs+='height: 20px;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip__text.setAttribute('style',hs);
			this._tooltip__text.innerHTML=me.hotspot.title;
			this._tooltip.appendChild(this._tooltip__text);
			me._tooltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._tooltip);
			this._checkmark_tick0=document.createElement('div');
			this._checkmark_tick0__img=document.createElement('img');
			this._checkmark_tick0__img.className='ggskin ggskin_svg';
			this._checkmark_tick0__img.setAttribute('src',basePath + 'images/checkmark_tick0.svg');
			this._checkmark_tick0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._checkmark_tick0__img['ondragstart']=function() { return false; };
			this._checkmark_tick0.appendChild(this._checkmark_tick0__img);
			this._checkmark_tick0.ggId="checkmark_tick";
			this._checkmark_tick0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._checkmark_tick0.ggVisible=false;
			this._checkmark_tick0.className='ggskin ggskin_svg ';
			this._checkmark_tick0.ggType='svg';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 123px;';
			hs+='position : absolute;';
			hs+='top : 7px;';
			hs+='visibility : hidden;';
			hs+='width : 20px;';
			this._checkmark_tick0.setAttribute('style',hs);
			this._checkmark_tick0.style[domTransform + 'Origin']='50% 50%';
			me._checkmark_tick0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._checkmark_tick0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._checkmark_tick0.ggCurrentLogicStateVisible = -1;
			this._checkmark_tick0.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._checkmark_tick0.ggElementNodeId()) == true) || 
					(me._checkmark_tick0.ggIsActive() == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
						me._checkmark_tick0.style.visibility="inherit";
						me._checkmark_tick0.ggVisible=true;
					}
					else {
						me._checkmark_tick0.style.visibility="hidden";
						me._checkmark_tick0.ggVisible=false;
					}
				}
			}
			this._checkmark_tick0.ggUpdatePosition=function () {
			}
			this._hotspot_preview.appendChild(this._checkmark_tick0);
			this.__div.appendChild(this._hotspot_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspot_preview.ggUpdateConditionTimer();
				me._checkmark_tick0.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_url_image=document.createElement('div');
			this._ht_url_image__img=document.createElement('img');
			this._ht_url_image__img.className='ggskin ggskin_svg';
			this._ht_url_image__img.setAttribute('src',basePath + 'images/ht_url_image.svg');
			this._ht_url_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_url_image__img['ondragstart']=function() { return false; };
			this._ht_url_image.appendChild(this._ht_url_image__img);
			this._ht_url_image__imgo=document.createElement('img');
			this._ht_url_image__imgo.className='ggskin ggskin_svg';
			this._ht_url_image__imgo.setAttribute('src',basePath + 'images/ht_url_image__o.svg');
			this._ht_url_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_url_image__imgo['ondragstart']=function() { return false; };
			this._ht_url_image.appendChild(this._ht_url_image__imgo);
			this._ht_url_image.ggId="ht_url_image";
			this._ht_url_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_url_image.ggVisible=true;
			this._ht_url_image.className='ggskin ggskin_svg ';
			this._ht_url_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -14px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_url_image.setAttribute('style',hs);
			this._ht_url_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_url_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_url_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_url_image.onmouseover=function () {
				me._ht_url_image__img.style.visibility='hidden';
				me._ht_url_image__imgo.style.visibility='inherit';
			}
			this._ht_url_image.onmouseout=function () {
				me._ht_url_image__img.style.visibility='inherit';
				me._ht_url_image__imgo.style.visibility='hidden';
			}
			this._ht_url_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_url_image);
			this._tt_ht_url=document.createElement('div');
			this._tt_ht_url__text=document.createElement('div');
			this._tt_ht_url.className='ggskin ggskin_textdiv';
			this._tt_ht_url.ggTextDiv=this._tt_ht_url__text;
			this._tt_ht_url.ggId="tt_ht_url";
			this._tt_ht_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_url.ggVisible=false;
			this._tt_ht_url.className='ggskin ggskin_text ';
			this._tt_ht_url.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			this._tt_ht_url.setAttribute('style',hs);
			this._tt_ht_url.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_url__text.setAttribute('style',hs);
			this._tt_ht_url__text.innerHTML=me.hotspot.title;
			this._tt_ht_url.appendChild(this._tt_ht_url__text);
			me._tt_ht_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_url.ggCurrentLogicStateVisible = -1;
			this._tt_ht_url.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_url.style.visibility="inherit";
						me._tt_ht_url.ggVisible=true;
					}
					else {
						me._tt_ht_url.style.visibility="hidden";
						me._tt_ht_url.ggVisible=false;
					}
				}
			}
			this._tt_ht_url.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_url);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_url.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility='inherit';
				me.skin._screentint.ggVisible=true;
				me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				me.skin._info_title__text.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="<b>"+me.hotspot.title+"<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._info_text_body.ggText=me.hotspot.description;
				me.skin._info_text_body__text.innerHTML=me.skin._info_text_body.ggText;
				if (me.skin._info_text_body.ggUpdateText) {
					me.skin._info_text_body.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				me.skin._information.style[domTransition]='none';
				me.skin._information.style.visibility='inherit';
				me.skin._information.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image__imgo=document.createElement('img');
			this._ht_info_image__imgo.className='ggskin ggskin_svg';
			this._ht_info_image__imgo.setAttribute('src',basePath + 'images/ht_info_image__o.svg');
			this._ht_info_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_info_image__imgo['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__imgo);
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg ';
			this._ht_info_image.ggType='svg';
			hs ='';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_info_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_image.onmouseover=function () {
				me._ht_info_image__img.style.visibility='hidden';
				me._ht_info_image__imgo.style.visibility='inherit';
			}
			this._ht_info_image.onmouseout=function () {
				me._ht_info_image__img.style.visibility='inherit';
				me._ht_info_image__imgo.style.visibility='hidden';
			}
			this._ht_info_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_info_image);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=false;
			this._tt_information.className='ggskin ggskin_text ';
			this._tt_information.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information__text.innerHTML=me.hotspot.title;
			this._tt_information.appendChild(this._tt_information__text);
			me._tt_information.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_information.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_information.ggCurrentLogicStateVisible = -1;
			this._tt_information.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_information.ggCurrentLogicStateVisible == 0) {
						me._tt_information.style.visibility="inherit";
						me._tt_information.ggVisible=true;
					}
					else {
						me._tt_information.style.visibility="hidden";
						me._tt_information.ggVisible=false;
					}
				}
			}
			this._tt_information.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_information);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_information.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility='inherit';
				me.skin._screentint.ggVisible=true;
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility='inherit';
				me.skin._close0.ggVisible=true;
				me.skin._popup_image.ggText="$r"+me.hotspot.url;
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				me.skin._popup_image.style[domTransition]='none';
				me.skin._popup_image.style.visibility='inherit';
				me.skin._popup_image.ggVisible=true;
				me.skin._image_popup.style[domTransition]='none';
				me.skin._image_popup.style.visibility='inherit';
				me.skin._image_popup.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_image_image=document.createElement('div');
			this._ht_image_image__img=document.createElement('img');
			this._ht_image_image__img.className='ggskin ggskin_svg';
			this._ht_image_image__img.setAttribute('src',basePath + 'images/ht_image_image.svg');
			this._ht_image_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_image_image__img['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__img);
			this._ht_image_image__imgo=document.createElement('img');
			this._ht_image_image__imgo.className='ggskin ggskin_svg';
			this._ht_image_image__imgo.setAttribute('src',basePath + 'images/ht_image_image__o.svg');
			this._ht_image_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_image_image__imgo['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__imgo);
			this._ht_image_image.ggId="ht_image_image";
			this._ht_image_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_image_image.ggVisible=true;
			this._ht_image_image.className='ggskin ggskin_svg ';
			this._ht_image_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_image_image.setAttribute('style',hs);
			this._ht_image_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_image_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_image_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_image_image.onmouseover=function () {
				me._ht_image_image__img.style.visibility='hidden';
				me._ht_image_image__imgo.style.visibility='inherit';
			}
			this._ht_image_image.onmouseout=function () {
				me._ht_image_image__img.style.visibility='inherit';
				me._ht_image_image__imgo.style.visibility='hidden';
			}
			this._ht_image_image.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_image_image);
			this._tt_ht_image=document.createElement('div');
			this._tt_ht_image__text=document.createElement('div');
			this._tt_ht_image.className='ggskin ggskin_textdiv';
			this._tt_ht_image.ggTextDiv=this._tt_ht_image__text;
			this._tt_ht_image.ggId="tt_ht_image";
			this._tt_ht_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_image.ggVisible=false;
			this._tt_ht_image.className='ggskin ggskin_text ';
			this._tt_ht_image.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			this._tt_ht_image.setAttribute('style',hs);
			this._tt_ht_image.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_image__text.setAttribute('style',hs);
			this._tt_ht_image__text.innerHTML=me.hotspot.title;
			this._tt_ht_image.appendChild(this._tt_ht_image__text);
			me._tt_ht_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_image.ggCurrentLogicStateVisible = -1;
			this._tt_ht_image.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_image.style.visibility="inherit";
						me._tt_ht_image.ggVisible=true;
					}
					else {
						me._tt_ht_image.style.visibility="hidden";
						me._tt_ht_image.ggVisible=false;
					}
				}
			}
			this._tt_ht_image.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_image);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_image.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_file') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_file";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility='inherit';
				me.skin._screentint.ggVisible=true;
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility='inherit';
				me.skin._close0.ggVisible=true;
				me.skin._video_popup_controls_file.style[domTransition]='none';
				me.skin._video_popup_controls_file.style.visibility='inherit';
				me.skin._video_popup_controls_file.ggVisible=true;
				me.skin._video_popup_file.style[domTransition]='none';
				me.skin._video_popup_file.style.visibility='inherit';
				me.skin._video_popup_file.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_video_video_file=document.createElement('div');
			this._ht_video_video_file__img=document.createElement('img');
			this._ht_video_video_file__img.className='ggskin ggskin_svg';
			this._ht_video_video_file__img.setAttribute('src',basePath + 'images/ht_video_video_file.svg');
			this._ht_video_video_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_file__img['ondragstart']=function() { return false; };
			this._ht_video_video_file.appendChild(this._ht_video_video_file__img);
			this._ht_video_video_file__imgo=document.createElement('img');
			this._ht_video_video_file__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_file__imgo.setAttribute('src',basePath + 'images/ht_video_video_file__o.svg');
			this._ht_video_video_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_file__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_file.appendChild(this._ht_video_video_file__imgo);
			this._ht_video_video_file.ggId="ht_video_video_file";
			this._ht_video_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_file.ggVisible=true;
			this._ht_video_video_file.className='ggskin ggskin_svg ';
			this._ht_video_video_file.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_video_video_file.setAttribute('style',hs);
			this._ht_video_video_file.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_file.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_file.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_file.onmouseover=function () {
				me._ht_video_video_file__img.style.visibility='hidden';
				me._ht_video_video_file__imgo.style.visibility='inherit';
			}
			this._ht_video_video_file.onmouseout=function () {
				me._ht_video_video_file__img.style.visibility='inherit';
				me._ht_video_video_file__imgo.style.visibility='hidden';
			}
			this._ht_video_video_file.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_video_video_file);
			this._tt_ht_video_file=document.createElement('div');
			this._tt_ht_video_file__text=document.createElement('div');
			this._tt_ht_video_file.className='ggskin ggskin_textdiv';
			this._tt_ht_video_file.ggTextDiv=this._tt_ht_video_file__text;
			this._tt_ht_video_file.ggId="tt_ht_video_file";
			this._tt_ht_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_file.ggVisible=false;
			this._tt_ht_video_file.className='ggskin ggskin_text ';
			this._tt_ht_video_file.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			this._tt_ht_video_file.setAttribute('style',hs);
			this._tt_ht_video_file.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_file__text.setAttribute('style',hs);
			this._tt_ht_video_file__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_file.appendChild(this._tt_ht_video_file__text);
			me._tt_ht_video_file.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_file.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_file.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_file.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_file.style.visibility="inherit";
						me._tt_ht_video_file.ggVisible=true;
					}
					else {
						me._tt_ht_video_file.style.visibility="hidden";
						me._tt_ht_video_file.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_file.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_file);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_file.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility='inherit';
				me.skin._screentint.ggVisible=true;
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility='inherit';
				me.skin._close0.ggVisible=true;
				me.skin._video_popup_controls_url.style[domTransition]='none';
				me.skin._video_popup_controls_url.style.visibility='inherit';
				me.skin._video_popup_controls_url.ggVisible=true;
				me.skin._video_popup_url.style[domTransition]='none';
				me.skin._video_popup_url.style.visibility='inherit';
				me.skin._video_popup_url.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_video_video_url=document.createElement('div');
			this._ht_video_video_url__img=document.createElement('img');
			this._ht_video_video_url__img.className='ggskin ggskin_svg';
			this._ht_video_video_url__img.setAttribute('src',basePath + 'images/ht_video_video_url.svg');
			this._ht_video_video_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_url__img['ondragstart']=function() { return false; };
			this._ht_video_video_url.appendChild(this._ht_video_video_url__img);
			this._ht_video_video_url__imgo=document.createElement('img');
			this._ht_video_video_url__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_url__imgo.setAttribute('src',basePath + 'images/ht_video_video_url__o.svg');
			this._ht_video_video_url__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_url__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_url.appendChild(this._ht_video_video_url__imgo);
			this._ht_video_video_url.ggId="ht_video_video_url";
			this._ht_video_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_url.ggVisible=true;
			this._ht_video_video_url.className='ggskin ggskin_svg ';
			this._ht_video_video_url.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_video_video_url.setAttribute('style',hs);
			this._ht_video_video_url.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_url.onmouseover=function () {
				me._ht_video_video_url__img.style.visibility='hidden';
				me._ht_video_video_url__imgo.style.visibility='inherit';
			}
			this._ht_video_video_url.onmouseout=function () {
				me._ht_video_video_url__img.style.visibility='inherit';
				me._ht_video_video_url__imgo.style.visibility='hidden';
			}
			this._ht_video_video_url.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_video_video_url);
			this._tt_ht_video_url=document.createElement('div');
			this._tt_ht_video_url__text=document.createElement('div');
			this._tt_ht_video_url.className='ggskin ggskin_textdiv';
			this._tt_ht_video_url.ggTextDiv=this._tt_ht_video_url__text;
			this._tt_ht_video_url.ggId="tt_ht_video_url";
			this._tt_ht_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_url.ggVisible=false;
			this._tt_ht_video_url.className='ggskin ggskin_text ';
			this._tt_ht_video_url.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			this._tt_ht_video_url.setAttribute('style',hs);
			this._tt_ht_video_url.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_url__text.setAttribute('style',hs);
			this._tt_ht_video_url__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_url.appendChild(this._tt_ht_video_url__text);
			me._tt_ht_video_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_url.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_url.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_video_url.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_url.style.visibility="inherit";
						me._tt_ht_video_url.ggVisible=true;
					}
					else {
						me._tt_ht_video_url.style.visibility="hidden";
						me._tt_ht_video_url.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_url.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_url);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_url.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_vimeo') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_vimeo";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility='inherit';
				me.skin._screentint.ggVisible=true;
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility='inherit';
				me.skin._close0.ggVisible=true;
				me.skin._video_popup_vimeo.style[domTransition]='none';
				me.skin._video_popup_vimeo.style.visibility='inherit';
				me.skin._video_popup_vimeo.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_video_video_vimeo=document.createElement('div');
			this._ht_video_video_vimeo__img=document.createElement('img');
			this._ht_video_video_vimeo__img.className='ggskin ggskin_svg';
			this._ht_video_video_vimeo__img.setAttribute('src',basePath + 'images/ht_video_video_vimeo.svg');
			this._ht_video_video_vimeo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_vimeo__img['ondragstart']=function() { return false; };
			this._ht_video_video_vimeo.appendChild(this._ht_video_video_vimeo__img);
			this._ht_video_video_vimeo__imgo=document.createElement('img');
			this._ht_video_video_vimeo__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_vimeo__imgo.setAttribute('src',basePath + 'images/ht_video_video_vimeo__o.svg');
			this._ht_video_video_vimeo__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_vimeo__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_vimeo.appendChild(this._ht_video_video_vimeo__imgo);
			this._ht_video_video_vimeo.ggId="ht_video_video_vimeo";
			this._ht_video_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_vimeo.ggVisible=true;
			this._ht_video_video_vimeo.className='ggskin ggskin_svg ';
			this._ht_video_video_vimeo.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_video_video_vimeo.setAttribute('style',hs);
			this._ht_video_video_vimeo.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_vimeo.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_vimeo.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_vimeo.onmouseover=function () {
				me._ht_video_video_vimeo__img.style.visibility='hidden';
				me._ht_video_video_vimeo__imgo.style.visibility='inherit';
			}
			this._ht_video_video_vimeo.onmouseout=function () {
				me._ht_video_video_vimeo__img.style.visibility='inherit';
				me._ht_video_video_vimeo__imgo.style.visibility='hidden';
			}
			this._ht_video_video_vimeo.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_video_video_vimeo);
			this._tt_ht_video_vimeo=document.createElement('div');
			this._tt_ht_video_vimeo__text=document.createElement('div');
			this._tt_ht_video_vimeo.className='ggskin ggskin_textdiv';
			this._tt_ht_video_vimeo.ggTextDiv=this._tt_ht_video_vimeo__text;
			this._tt_ht_video_vimeo.ggId="tt_ht_video_vimeo";
			this._tt_ht_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_vimeo.ggVisible=false;
			this._tt_ht_video_vimeo.className='ggskin ggskin_text ';
			this._tt_ht_video_vimeo.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			this._tt_ht_video_vimeo.setAttribute('style',hs);
			this._tt_ht_video_vimeo.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_vimeo__text.setAttribute('style',hs);
			this._tt_ht_video_vimeo__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_vimeo.appendChild(this._tt_ht_video_vimeo__text);
			me._tt_ht_video_vimeo.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_vimeo.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_vimeo.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_vimeo.style.visibility="inherit";
						me._tt_ht_video_vimeo.ggVisible=true;
					}
					else {
						me._tt_ht_video_vimeo.style.visibility="hidden";
						me._tt_ht_video_vimeo.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_vimeo.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_vimeo);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_vimeo.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_youtube";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function () {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility='inherit';
				me.skin._screentint.ggVisible=true;
				me.skin._close0.style[domTransition]='none';
				me.skin._close0.style.visibility='inherit';
				me.skin._close0.ggVisible=true;
				me.skin._video_popup_youtube.style[domTransition]='none';
				me.skin._video_popup_youtube.style.visibility='inherit';
				me.skin._video_popup_youtube.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function () {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function () {
			}
			this._ht_video_video_youtube=document.createElement('div');
			this._ht_video_video_youtube__img=document.createElement('img');
			this._ht_video_video_youtube__img.className='ggskin ggskin_svg';
			this._ht_video_video_youtube__img.setAttribute('src',basePath + 'images/ht_video_video_youtube.svg');
			this._ht_video_video_youtube__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_youtube__img['ondragstart']=function() { return false; };
			this._ht_video_video_youtube.appendChild(this._ht_video_video_youtube__img);
			this._ht_video_video_youtube__imgo=document.createElement('img');
			this._ht_video_video_youtube__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_youtube__imgo.setAttribute('src',basePath + 'images/ht_video_video_youtube__o.svg');
			this._ht_video_video_youtube__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_youtube__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_youtube.appendChild(this._ht_video_video_youtube__imgo);
			this._ht_video_video_youtube.ggId="ht_video_video_youtube";
			this._ht_video_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_youtube.ggVisible=true;
			this._ht_video_video_youtube.className='ggskin ggskin_svg ';
			this._ht_video_video_youtube.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			this._ht_video_video_youtube.setAttribute('style',hs);
			this._ht_video_video_youtube.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_youtube.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_youtube.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_youtube.onmouseover=function () {
				me._ht_video_video_youtube__img.style.visibility='hidden';
				me._ht_video_video_youtube__imgo.style.visibility='inherit';
			}
			this._ht_video_video_youtube.onmouseout=function () {
				me._ht_video_video_youtube__img.style.visibility='inherit';
				me._ht_video_video_youtube__imgo.style.visibility='hidden';
			}
			this._ht_video_video_youtube.ggUpdatePosition=function () {
			}
			this.__div.appendChild(this._ht_video_video_youtube);
			this._tt_ht_video_youtube=document.createElement('div');
			this._tt_ht_video_youtube__text=document.createElement('div');
			this._tt_ht_video_youtube.className='ggskin ggskin_textdiv';
			this._tt_ht_video_youtube.ggTextDiv=this._tt_ht_video_youtube__text;
			this._tt_ht_video_youtube.ggId="tt_ht_video_youtube";
			this._tt_ht_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_youtube.ggVisible=false;
			this._tt_ht_video_youtube.className='ggskin ggskin_text ';
			this._tt_ht_video_youtube.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			this._tt_ht_video_youtube.setAttribute('style',hs);
			this._tt_ht_video_youtube.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_youtube__text.setAttribute('style',hs);
			this._tt_ht_video_youtube__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_youtube.appendChild(this._tt_ht_video_youtube__text);
			me._tt_ht_video_youtube.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_youtube.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_youtube.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_youtube.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
					if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_youtube.style.visibility="inherit";
						me._tt_ht_video_youtube.ggVisible=true;
					}
					else {
						me._tt_ht_video_youtube.style.visibility="hidden";
						me._tt_ht_video_youtube.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_youtube.ggUpdatePosition=function () {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_youtube);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_youtube.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinCloner_cloner_1_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 122px; height: 84px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._nodeimage_1=document.createElement('div');
		this._nodeimage_1__img=document.createElement('img');
		this._nodeimage_1__img.className='ggskin ggskin_nodeimage';
		this._nodeimage_1__img.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".jpg");
		this._nodeimage_1.ggNodeId=nodeId;
		this._nodeimage_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._nodeimage_1__img.className='ggskin ggskin_nodeimage';
		this._nodeimage_1__img['ondragstart']=function() { return false; };
		this._nodeimage_1.appendChild(this._nodeimage_1__img);
		this._nodeimage_1.ggId="NodeImage 1";
		this._nodeimage_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nodeimage_1.ggVisible=true;
		this._nodeimage_1.className='ggskin ggskin_nodeimage ';
		this._nodeimage_1.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 85.7143%;';
		hs+='left : 4.92%;';
		hs+='position : absolute;';
		hs+='top : 8.33%;';
		hs+='visibility : inherit;';
		hs+='width : 88.5246%;';
		this._nodeimage_1.setAttribute('style',hs);
		this._nodeimage_1.style[domTransform + 'Origin']='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._nodeimage_1.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._nodeimage_1.onclick=function () {
			me.player.openNext("{"+me.ggNodeId+"}","");
		}
		this._nodeimage_1.onmouseover=function () {
			me._text_3.style[domTransition]='none';
			me._text_3.style.visibility='inherit';
			me._text_3.ggVisible=true;
			me._text_3.ggText=me.ggUserdata.title;
			me._text_3__text.innerHTML=me._text_3.ggText;
			if (me._text_3.ggUpdateText) {
				me._text_3.ggUpdateText=function() {
					var hs=me.ggUserdata.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
		}
		this._nodeimage_1.onmouseout=function () {
			me._text_3.style[domTransition]='none';
			me._text_3.style.visibility='hidden';
			me._text_3.ggVisible=false;
		}
		this._nodeimage_1.ggUpdatePosition=function () {
		}
		this._text_3=document.createElement('div');
		this._text_3__text=document.createElement('div');
		this._text_3.className='ggskin ggskin_textdiv';
		this._text_3.ggTextDiv=this._text_3__text;
		this._text_3.ggId="Text 3";
		this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_3.ggVisible=false;
		this._text_3.className='ggskin ggskin_text ';
		this._text_3.ggType='text';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		this._text_3.setAttribute('style',hs);
		this._text_3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 109px;';
		hs+='height: 22px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.294118);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._text_3__text.setAttribute('style',hs);
		this._text_3__text.innerHTML="";
		this._text_3.appendChild(this._text_3__text);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._text_3.ggUpdatePosition=function () {
		}
		this._nodeimage_1.appendChild(this._text_3);
		this._checkmark_tick=document.createElement('div');
		this._checkmark_tick__img=document.createElement('img');
		this._checkmark_tick__img.className='ggskin ggskin_svg';
		this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.svg');
		this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkmark_tick__img['ondragstart']=function() { return false; };
		this._checkmark_tick.appendChild(this._checkmark_tick__img);
		this._checkmark_tick.ggId="checkmark_tick";
		this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkmark_tick.ggVisible=false;
		this._checkmark_tick.className='ggskin ggskin_svg ';
		this._checkmark_tick.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		this._checkmark_tick.setAttribute('style',hs);
		this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkmark_tick.ggCurrentLogicStateVisible = -1;
		this._checkmark_tick.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility="inherit";
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		this._checkmark_tick.ggUpdatePosition=function () {
		}
		this._nodeimage_1.appendChild(this._checkmark_tick);
		this.__div.appendChild(this._nodeimage_1);
	};
	this.addSkin();
};