(this.webpackJsonprecorder=this.webpackJsonprecorder||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/spiral.65541a20.png"},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(11),n(12),n(5));n(2),n(14);var i=function(){var e=n(15),t=n(2),a=new e({bitRate:128});return r.a.createElement("div",null,r.a.createElement("button",{id:"rec",onClick:function(){document.querySelector("#rec").classList.add("flashing"),a.start().then((function(){})).catch((function(e){console.error(e)}))}},"Start"),r.a.createElement("button",{id:"stop",onClick:function(){document.querySelector("#rec").classList.remove("flashing"),a.stop().getMp3().then((function(e){var n=Object(l.a)(e,2),a=n[0],r=n[1],o=new File(a,"voice-recording.mp3",{type:r.type,lastModified:Date.now()});t.saveAs(o)}))}},r.a.createElement("p",null,"Stop")))},s=n(4),u=n.n(s);var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null," Indigital Voice Recorder"),r.a.createElement("p",null,"Press the start button when you're ready to start recording"),r.a.createElement("br",null),r.a.createElement(i,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d680c43e.chunk.js.map