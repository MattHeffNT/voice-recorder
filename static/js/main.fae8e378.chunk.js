(this.webpackJsonprecorder=this.webpackJsonprecorder||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/spiral.65541a20.png"},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(11),n(12),n(13),n(5));n(2),n(15);var l=function(){var e=n(16),t=n(2),a=new e({bitRate:128});return o.a.createElement("div",null,o.a.createElement("button",{id:"rec",onClick:function(){document.querySelector("#rec").classList.add("flashing"),a.start().then((function(){})).catch((function(e){console.error(e)}))}},"Start"),o.a.createElement("button",{id:"stop",onClick:function(){document.querySelector("#rec").classList.remove("flashing"),a.stop().getMp3().then((function(e){var n=Object(i.a)(e,2),a=n[0],o=n[1],r=new File(a,"voice-recording.mp3",{type:o.type,lastModified:Date.now()});t.saveAs(r)}))}},o.a.createElement("p",null,"Stop")))},s=n(4),u=n.n(s);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",null," Indigital Voice Recorder"),o.a.createElement("p",null,"Press the start button when you're ready to start recording"),o.a.createElement("br",null),o.a.createElement(l,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.fae8e378.chunk.js.map