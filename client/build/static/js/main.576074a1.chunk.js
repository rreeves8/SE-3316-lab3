(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,s){},29:function(e,t,s){},31:function(e,t,s){},50:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(23),r=s.n(c),i=(s(29),s(1)),l=s.n(i),o=s(10),h=s(5),u=s(6),j=s(7),d=s(4),b=s(9),O=s(8),x=(s(31),s(24)),g=s.n(x).a.create({baseURL:"http://localhost:2000"}),v=(s(50),s(0)),p=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;Object(u.a)(this,s);return(n=t.call(this)).state={logInType:"",handleClick:e.handleClick,credentials:{usr:"",password:""}},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(j.a)(s,[{key:"loginselector",value:function(e){"guest"===e?this.state.handleClick("guest"):this.setState({logInType:e})}},{key:"logIn",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.credentials.usr),console.log(this.state.credentials.password),e.next=4,g.post("/api/login",Object(o.a)({},this.state.credentials)).then((function(e){"good"===e.data&&s.state.handleClick("admin"),"invalid"===e.data&&console.log("bad entry")}),(function(e){console.log(t)}));case 4:t=e.sent;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t,s=this.state;t="password"===e.target.type?{usr:this.state.credentials.usr,password:e.target.value}:{usr:e.target.value,password:this.state.credentials.password},this.setState({logInType:s.logInType,handleClick:s.handleClick,credentials:t})}},{key:"render",value:function(){var e=this;return""===this.state.logInType?(console.log("returning LOGIN selector"),Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("h1",{children:" Log In Type "}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)("button",{className:"logins",onClick:function(){return e.loginselector("admin")},children:"Admin"}),Object(v.jsx)("button",{className:"logins",onClick:function(){return e.loginselector("guest")},children:"Guest"})]})]})):"admin"===this.state.logInType?Object(v.jsxs)("div",{class:"container",children:[Object(v.jsx)("h1",{children:" Log In Type "}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("ul",{children:[Object(v.jsx)("label",{children:"Username : "}),Object(v.jsx)("input",{value:this.state.credentials.usr,onChange:this.handleChange,type:"text",placeholder:"Enter Username",name:"username"})]}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("label",{children:"Password : "}),Object(v.jsx)("input",{value:this.state.credentials.password,onChange:this.handleChange,type:"password",placeholder:"Enter Password",name:"password"})]}),Object(v.jsx)("button",{className:"entry",onClick:function(){return e.logIn()},children:"LogIn"})]})]}):void 0}}]),s}(n.Component),f=p,y=(s(22),s.p+"static/media/checkMark.49993c05.jpg"),m=s.p+"static/media/emptyBox.e5eb5ca1.jpg",k=s.p+"static/media/none.03db8fbb.jpg",C=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;Object(u.a)(this,s),(n=t.call(this,e)).onClick=function(e,t){var s=n.state.CheckBox;s[e]=t,n.setState({CheckBox:s})},n.handleKeyPress=function(e){n.setState({name:e.target.value})};var a=e.availability,c=[];console.log(a);for(var r="slot_",i=1;i<=10;i++){1==a[r+i]&&(c[i-1]=!0),0==a[r+i]&&(c[i-1]=!1)}return n.state={CheckBox:Array.from(Array(10),(function(){return!1})),availability:c,badEntry:"",submitted:!1,name:""},n.sendNewentry=n.sendNewentry.bind(Object(d.a)(n)),n.NewEntrySend=n.NewEntrySend.bind(Object(d.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(d.a)(n)),n}return Object(j.a)(s,[{key:"sendNewentry",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var s,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t){e.next=6;break}return console.log(this.state),t.unshift(this.state.name),e.next=5,g.post("/api/newTimeSlot",Object(o.a)({},t)).then((function(e){var t=e.data.code;console.log(t),""!==t?n.setState({badEntry:t}):n.setState({submitted:!0})}),(function(e){console.log(s)}));case 5:s=e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"NewEntrySend",value:function(){console.log("Clicked submit");for(var e=[],t=0;t<10;t++)this.state.CheckBox[t]&&(e[t]=1),this.state.CheckBox[t]||(e[t]=0);console.log(e),this.sendNewentry(e)}},{key:"render",value:function(){var e=this,t=[];if(this.state.submitted){if(this.state.submitted){for(var s=0;s<10;s++)t[s]=Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:k,alt:"Empty Box"})});t[11]=Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"message",children:" Submitted!"})})}}else{for(var n=function(s){e.state.availability[s]?e.state.CheckBox[s]?t[s]=Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:y,alt:"CheckedBox",onClick:function(){e.onClick(s,!1)}})}):t[s]=Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:m,alt:"Empty Box",onClick:function(){e.onClick(s,!0)}})}):t[s]=Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:k,alt:"Empty Box"})})},a=0;a<10;a++)n(a);""!==this.state.badEntry?t[11]=Object(v.jsx)("li",{children:Object(v.jsxs)("a",{className:"message",children:[" ",this.state.badEntry]})}):t[11]=Object(v.jsx)("li",{children:Object(v.jsx)("button",{className:"submit",onClick:function(){e.NewEntrySend()},children:"Submit"})})}return Object(v.jsxs)("ul",{children:[Object(v.jsx)("input",{value:this.state.name,onChange:this.handleKeyPress,type:"name",placeholder:"Enter Name"}),t]})}}]),s}(n.Component),w=C;function N(e){console.log(e.users);var t=e.users,s=[];s[0]=Object(v.jsx)("li",{children:Object(v.jsxs)("a",{className:"message",children:[" ",t.usrName]})});for(var n="slot_",a=1;a<=10;a++)"1"==t[n+a]&&(s[a]=Object(v.jsxs)("li",{children:[" ",Object(v.jsx)("img",{src:y,alt:"CheckedBox"})]})),"0"==t[n+a]&&(s[a]=Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:m,alt:"Empty Box"})}));return s[12]=Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"spaceFill"})}),console.log(s),Object(v.jsx)("ul",{className:"shift",children:s})}var U=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(){var e;return Object(u.a)(this,s),(e=t.call(this)).getAvailable=Object(h.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetching available"),t.prev=1,t.next=4,g.get("/api/availability");case 4:s=t.sent,console.log(s),console.log(s.data),e.setState({availability:s.data[0]}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),e.state={availability:null,otherUsers:null},e.getAvailable=e.getAvailable.bind(Object(d.a)(e)),e}return Object(j.a)(s,[{key:"getOtherUsers",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching other users"),e.prev=1,e.next=4,g.get("/api/getOtherUsers");case 4:t=e.sent,console.log(t),console.log(t.data),this.setState({otherUsers:t.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(null===this.state.availability&&this.getAvailable(),null===this.state.otherUsers&&this.getOtherUsers(),null!==this.state.availability&&null!==this.state.otherUsers){for(var e=[],t=0;t<this.state.otherUsers.length;t++)e[t]=Object(v.jsx)(N,{users:this.state.otherUsers[t]});return Object(v.jsxs)("div",{children:[e,Object(v.jsx)(w,{availability:this.state.availability})]})}return Object(v.jsx)("div",{})}}]),s}(n.Component),B=U;function S(e){var t=[];t[0]=Object(v.jsx)("li",{children:Object(v.jsx)("a",{children:" Name "})});for(var s=1;s<=10;s++)t[s]=Object(v.jsx)("li",{children:Object(v.jsxs)("a",{children:[" Slot ",s," "]})});return Object(v.jsxs)("ul",{children:[" ",t," "]})}var E=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).onClick=function(e,t){var s=n.state.CheckBox;s[e]=t,n.setState({CheckBox:s})},n.state={CheckBox:Array.from(Array(10),(function(){return!1})),set:!1,badEntry:""},n.changeAvailability=n.changeAvailability.bind(Object(d.a)(n)),n}return Object(j.a)(s,[{key:"changeAvailability",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,s,n,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],s=0;s<this.state.CheckBox.length;s++)!0===this.state.CheckBox[s]?t[s]=1:t[s]=0;return console.log("changing to :"+t),e.next=5,g.post("/api/setAvailable",Object(o.a)({},t)).then((function(e){var t=e.data.code;console.log(t),""!==t?a.setState({badEntry:t}):a.setState({set:!0})}),(function(e){console.log(n)}));case 5:n=e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=this,t=[],s=function(s){e.state.CheckBox[s]?t[s]=Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:y,alt:"CheckedBox",onClick:function(){e.onClick(s,!1)}})}):t[s]=Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:m,alt:"Empty Box",onClick:function(){e.onClick(s,!0)}})})},n=0;n<10;n++)s(n);return this.state.set||(t[11]=Object(v.jsx)("li",{children:Object(v.jsx)("button",{className:"submit",onClick:function(){e.changeAvailability()},children:"Change"})})),this.state.set&&(t[11]=Object(v.jsx)("li",{children:Object(v.jsxs)("a",{children:[" ",this.state.badEntry," "]})})),t.unshift(Object(v.jsx)("li",{children:Object(v.jsx)("a",{className:"message",children:" Change availability "})})),Object(v.jsx)("ul",{children:t})}}]),s}(n.Component),A=function(e){Object(b.a)(s,e);var t=Object(O.a)(s);function s(){var e;return Object(u.a)(this,s),(e=t.call(this)).logInClick=function(t){e.setState({userType:t})},e.state={userType:"",otherUsers:null},e.getOtherUsers=e.getOtherUsers.bind(Object(d.a)(e)),e}return Object(j.a)(s,[{key:"getOtherUsers",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching other users"),e.prev=1,e.next=4,g.get("/api/getOtherUsers");case 4:t=e.sent,console.log(t),console.log(t.data),this.setState({otherUsers:t.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(""===this.state.userType)return Object(v.jsx)(f,{handleClick:this.logInClick});if("guest"===this.state.userType)return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:" Doodle App"}),Object(v.jsx)("div",{className:"tableContainer",children:Object(v.jsxs)("nav",{children:[Object(v.jsx)(S,{}),Object(v.jsx)(B,{})]})})]});if("admin"===this.state.userType&&(console.log("Logged into admin"),null===this.state.otherUsers&&this.getOtherUsers(),null!==this.state.otherUsers)){for(var e=[],t=0;t<this.state.otherUsers.length;t++)e[t]=Object(v.jsx)(N,{users:this.state.otherUsers[t]});return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:" Doodle App"}),Object(v.jsx)("div",{className:"tableContainer",children:Object(v.jsxs)("nav",{children:[Object(v.jsx)(S,{}),e,Object(v.jsx)(E,{})]})})]})}return Object(v.jsx)("div",{children:"loading"})}}]),s}(n.Component),I=A;r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.576074a1.chunk.js.map