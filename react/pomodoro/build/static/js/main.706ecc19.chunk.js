(window.webpackJsonppomodoro=window.webpackJsonppomodoro||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(4),a=n.n(o),i=(n(17),n(1)),s=function(e){return c.a.createElement("div",{className:"setting-container"},e.increaseButton,e.settingValue,c.a.createElement("p",{id:e.description.toLowerCase()+"-label"},e.description),e.decreaseButton)},u=n(6),l=n(5),E={secondsLeft:1500,started:!1,isBreak:!1,sessionLength:25,breakLength:5,switching:!1,reset:0};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=Object(l.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=function(t,n,r,c){var o;return e[t]>=60&&2===c(1,1)||e[t]<=1&&0===c(1,1)?e:f({},e,(o={},Object(u.a)(o,t,c(e[t],1)),Object(u.a)(o,"secondsLeft",c(e.secondsLeft,60)),o))};switch(t.type){case"INCREMENT_SESSION":return n("sessionLength",0,1,function(e,t){return e+t});case"DECREMENT_SESSION":return n("sessionLength",0,1,function(e,t){return e-t});case"INCREMENT_BREAK":return n("breakLength",1,0,function(e,t){return e+t});case"DECREMENT_BREAK":return n("breakLength",1,0,function(e,t){return e-t});case"START_STOP":return f({},e,{started:!e.started});case"SECOND_PASSED":var r=f({},e,{isBreak:!e.isBreak,firstTime:!1,secondsLeft:60*e[e.isBreak?"sessionLength":"breakLength"]}),c=e.secondsLeft-(e.started?1:0);return c<0?r:f({},e,{switching:0===c,secondsLeft:c});case"RESET":return f({},E,{reset:e.reset+1});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=function(e){return c.a.createElement("input",{id:e.id,className:"setting-button",type:"button",value:e.value,onClick:e.action})},p=function(e,t,n){return Object(i.b)(function(n){return{value:e,id:t}},{action:n})(m)},O=p("+","session-increment",function(){return{type:"INCREMENT_SESSION"}}),g=p("-","session-decrement",function(){return{type:"DECREMENT_SESSION"}}),S=p("+","break-increment",function(){return{type:"INCREMENT_BREAK"}}),h=p("-","break-decrement",function(){return{type:"DECREMENT_BREAK"}}),w=function(e){return c.a.createElement("div",{id:e.id},e.count)},v=Object(i.b)(function(e){return{id:"session-length",count:e.sessionLength}})(w),y=Object(i.b)(function(e){return{id:"break-length",count:e.breakLength}})(w),k=Object(i.b)(function(e){return{secondsLeft:e.secondsLeft,started:e.started}},{secondPassed:function(){return{type:"SECOND_PASSED"}}})(function(e){Object(r.useEffect)(function(){var t=setTimeout(e.secondPassed,1e3);return function(){return clearTimeout(t)}});var t=function(e){return(1===e.toString().length?"0":"")+e},n=Math.floor(e.secondsLeft/60);return c.a.createElement("div",{id:"time-left"},t(n)+":"+t(e.secondsLeft-60*n))}),_=Object(i.b)(function(e){return{started:e.started}},{startStop:function(){return{type:"START_STOP"}}})(function(e){return c.a.createElement("input",{id:"start_stop",type:"button",onClick:e.startStop,value:e.started?"Stop":"Start"})}),N=Object(i.b)(function(e){return{isBreak:e.isBreak}})(function(e){return c.a.createElement("div",{id:"timer-label"},e.isBreak?"Break":"Session")}),T=Object(i.b)(null,{reset:function(){return{type:"RESET"}}})(function(e){return c.a.createElement("input",{id:"reset",type:"button",onClick:e.reset,value:"Reset"})}),j=Object(i.b)(function(e){return{switching:e.switching,reset:e.reset}},null)(function(e){return Object(r.useEffect)(function(){var t=document.getElementById("beep");e.switching?t.play():(t.pause(),t.currentTime=0)}),c.a.createElement("audio",{id:"beep"},c.a.createElement("source",{src:"../beep.mp3",type:"audio/mp3"}))}),L=function(){return c.a.createElement("div",{id:"global-container"},c.a.createElement(s,{increaseButton:c.a.createElement(O,null),decreaseButton:c.a.createElement(g,null),settingValue:c.a.createElement(v,null),description:"Session"}),c.a.createElement(s,{increaseButton:c.a.createElement(S,null),decreaseButton:c.a.createElement(h,null),settingValue:c.a.createElement(y,null),description:"Break"}),c.a.createElement(k,null),c.a.createElement(N,null),c.a.createElement(_,null),c.a.createElement(T,null),c.a.createElement(j,null))},B=function(){return c.a.createElement(i.a,{store:b},c.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.706ecc19.chunk.js.map