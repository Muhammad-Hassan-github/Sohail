(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a.p+"static/media/preloder.4c459c53.gif"},268:function(e,t,a){e.exports=a(404)},279:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),l=a(129),i=a.n(l),u=a(242),s=a(71),m=a(72),d=a(76),f=a(73),p=a(77),b=a(15),E=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"navFlex1"},c.a.createElement(b.b,{to:"/"},c.a.createElement("span",{className:"logo"},"Bank"))),c.a.createElement("div",{className:"navFlex2"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(b.b,{to:"/"},"Dashboard")),c.a.createElement("li",null,c.a.createElement(b.b,{to:"/accounts"},"Accounts")),c.a.createElement("li",null,c.a.createElement(b.b,{to:"/transactions"},"Transactions"))))))}}]),t}(n.Component),O=(a(279),a(245)),h=a.n(O),g=a(246),j=a.n(g),v=a(124),y=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"cardHeader"},c.a.createElement("div",{className:"flex1"},c.a.createElement(h.a,null),c.a.createElement("h3",{style:{margin:"4px 0 0 0"},className:"accoutsTitle"},"Accounts")),c.a.createElement("div",{className:"flex2"},c.a.createElement(b.b,{to:"/addAccount"},c.a.createElement(v.a,{size:"small",variant:"contained",color:"primary",startIcon:c.a.createElement(j.a,null)},"Add Account")),c.a.createElement(b.b,{to:"/accounts"},c.a.createElement(v.a,{size:"small",variant:"contained",color:"primary"},"View All")))),c.a.createElement("div",{style:{borderTop:"1px solid rgb(238, 204, 238)",margin:"20px 15px"}}),c.a.createElement("div",{className:"cardCenter"},c.a.createElement(b.b,{to:"/accounts",className:"links"},c.a.createElement("h1",null,this.props.length)),c.a.createElement(b.b,{to:"/accounts",className:"links"},c.a.createElement("h3",null,"Accounts"))))}}]),t}(n.Component),w=a(248),D=a.n(w),N=a(16),A=a(291),C=function(e){var t={amount:e.amount,name:e.name,type:e.type,time:(new Date).toString().slice(4,21),discription:"Initial Deposit"};return function(e){A.post("/createPerson",{data:t}).then(function(t){e({type:"ADD_ITEM",payload:t.data});var a={amount:t.data.amount,time:t.data.time,account_ID:t.data._id,type:"Deposit",discription:t.data.discription};A.post("/createTransaction",{data:a}).then(function(t){e({type:"ADD_TRANSACTION",payload:t.data})}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}},T=function(e){return function(t){A.post("/createTransaction",{data:e}).then(function(e){t({type:"ADD_TRANSACTION",payload:e.data})}).catch(function(e){console.log(e)}),"Withdraw"==e.type?(t({type:"WITHDRAW",payload:e}),A.post("/withdraw",{_ID:e.account_ID,amount:e.amount}).then(function(e){}).catch(function(e){console.log(e)})):(t({type:"DEPOSIT",payload:e}),A.post("/deposit",{_ID:e.account_ID,amount:e.amount}).then(function(e){}).catch(function(e){console.log(e)}))}},R=function(e){return function(t){A.post("/deletePerson",{data:e}).then(function(a){t({type:"DELETE_ACCOUNT",payload:e}),t({type:"DELETE_TRANSACTION",payload:e})}).catch(function(e){console.log(e)})}},S=function(e){return function(t){A.post("/updatePerson",{data:e.data}).then(function(a){t({type:"UPDATE_ACCOUNT",payload:e.updatedData})}).catch(function(e){console.log(e)})}},k=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(function(e){A.post("/debits").then(function(t){e({type:"DEBITS",payload:t.data})}).catch(function(e){console.log(e)}),A.post("/credits").then(function(t){e({type:"CREDITS",payload:t.data})}).catch(function(e){console.log(e)})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"cardHeader"},c.a.createElement("div",{className:"flex1"},c.a.createElement(D.a,null),c.a.createElement("h3",{style:{margin:"4px 0 0 0"}},"Transactions")),c.a.createElement("div",{className:"flex2"},c.a.createElement(b.b,{to:"/transactions"},c.a.createElement(v.a,{size:"small",variant:"contained",color:"primary"},"View All")))),c.a.createElement("div",{style:{borderTop:"1px solid rgb(238, 204, 238)",margin:"20px 15px"}}),c.a.createElement("div",{className:"cardCenter"},c.a.createElement(b.b,{to:"/transactions",className:"links"},c.a.createElement("h1",null,this.props.length)),c.a.createElement(b.b,{to:"/transactions",className:"links"},c.a.createElement("h3",null,"Transactions"))),c.a.createElement("div",{className:"DC"},c.a.createElement("div",{className:"credits"},c.a.createElement("span",null,"Credits Rs: ",this.props.state.credit)),c.a.createElement("div",{className:"debits"},c.a.createElement("span",null,"Debits Rs: ",this.props.state.debit))))}}]),t}(n.Component),I=Object(N.b)(function(e){return{state:e.debitCredit}})(k),_=a(39),x=a(61),W=a(239),P=a(437),F=a(200),L=a(48),U=a.n(L);function M(){var e=Object(N.c)(),t=Object(F.f)(),a=c.a.useState(!1),n=Object(x.a)(a,2),r=n[0],o=n[1],l=c.a.useState({account_ID:t.location.hash.replace("#",""),amount:"",discription:"No Description",time:(new Date).toString().slice(4,21),type:"Deposit"}),i=Object(x.a)(l,2),u=i[0],s=i[1],m=function(){o(!1)};return c.a.createElement("div",null,c.a.createElement(v.a,{size:"normal",variant:"contained",color:"primary",onClick:function(){o(!0)}},"Deposit"),c.a.createElement(P.a,{open:r,onClose:m,"aria-labelledby":"form-dialog-title"},c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"formHeader"},c.a.createElement("h2",null,"Deposit into account")),c.a.createElement("div",{className:"formContent"},c.a.createElement(W.a,{type:"number",id:"outlined-textarea",label:"Deposit",placeholder:"Enter Ammount for Deposit",variant:"outlined",fullWidth:!0,onChange:function(e){s(Object(_.a)({},u,{amount:e.target.value}))}}),c.a.createElement("br",null),c.a.createElement(W.a,{type:"text",id:"outlined-textarea",label:"Description (optional)",placeholder:"Enter Description",variant:"outlined",fullWidth:!0,onChange:function(e){s(Object(_.a)({},u,{discription:e.target.value}))}}),c.a.createElement("div",{className:"formButton"},c.a.createElement(v.a,{onClick:function(){""==u.amount?U()("Warning","Enter Amount For Deposit"):(e(T(u)),o(!1))},variant:"contained",color:"primary"},"Deposit"),c.a.createElement(v.a,{onClick:m,variant:"contained",color:"primary"},"Cancel"))))))}function B(){var e=Object(N.c)(),t=Object(F.f)(),a=Object(N.d)(function(e){return e.accountsDetails}).find(function(e){return e._id===t.location.hash.replace("#","")}).amount,n=c.a.useState({account_ID:t.location.hash.replace("#",""),amount:"",discription:"No Discription",time:(new Date).toString().slice(4,21),type:"Withdraw"}),r=Object(x.a)(n,2),o=r[0],l=r[1],i=c.a.useState(!1),u=Object(x.a)(i,2),s=u[0],m=u[1],d=function(){m(!1)};return c.a.createElement("div",null,c.a.createElement(v.a,{size:"normal",variant:"contained",color:"primary",onClick:function(){m(!0)}},"Withdraw"),c.a.createElement(P.a,{open:s,onClose:d,"aria-labelledby":"form-dialog-title"},c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"formHeader"},c.a.createElement("h2",null,"Withdraw From Account ")),c.a.createElement("div",{className:"formContent"},c.a.createElement(W.a,{type:"number",id:"outlined-textarea",label:" Maximaum Rs: ".concat(a),placeholder:"Enter Ammount for withdraw",variant:"outlined",fullWidth:!0,onChange:function(e){l(Object(_.a)({},o,{amount:e.target.value})),e.target.value>a&&U()("Warning","Maximum Amount for withdraw ".concat(a))}}),c.a.createElement("br",null),c.a.createElement(W.a,{type:"text",id:"outlined-textarea",label:"Description (optional)",placeholder:"Enter Description",variant:"outlined",fullWidth:!0,onChange:function(e){l(Object(_.a)({},o,{discription:e.target.value}))}}),c.a.createElement("div",{className:"formButton"},c.a.createElement(v.a,{onClick:function(){o.amount>a?U()("Warning","Maximum Amount For withdraw ".concat(a)):""==o.amount?U()("Warning","Enter Amount For Withdraw"):(e(T(o)),m(!1))},variant:"contained",color:"primary"},"Withdraw"),c.a.createElement(v.a,{onClick:d,variant:"contained",color:"primary"},"Cancel"))))))}function z(){var e=Object(F.f)(),t=(Object(N.d)(function(e){return e.accountsDetails[0]}),Object(N.c)()),a=c.a.useState({name:"",type:"",amount:"",discription:"Initial Deposit",time:(new Date).toString().slice(4,21)}),n=Object(x.a)(a,2),r=n[0],o=n[1];return c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"formHeader"},c.a.createElement("h2",null,"Enter Account Details Blow")),c.a.createElement("div",{className:"formContent"},c.a.createElement(W.a,{id:"outlined-textarea",label:"Full Name",placeholder:"Enter Full Name",multiline:!0,variant:"outlined",fullWidth:!0,onChange:function(e){o(Object(_.a)({},r,{name:e.target.value}))}}),c.a.createElement(W.a,{id:"outlined-select-currency-native",select:!0,fullWidth:!0,label:"Select Type",value:r.type,onChange:function(e){o(Object(_.a)({},r,{type:e.target.value}))},SelectProps:{native:!0},variant:"outlined"},[{value:"Not Selected",label:"Account Type"},{value:"current",label:"Current"},{value:"saving",label:"Saving"}].map(function(e){return c.a.createElement("option",{key:e.value,value:e.value},e.label)})),c.a.createElement(W.a,{type:"number",id:"outlined-textarea",label:"Initially Deposit in Rs",placeholder:"Enter Initially Deposit in Rs",variant:"outlined",fullWidth:!0,onChange:function(e){o(Object(_.a)({},r,{amount:e.target.value}))}}),c.a.createElement("div",{className:"formButton"},c.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(){""==r.name?U()("Warning!","Please Enter Account Name"):""==r.type?U()("Warning!","Please Select Account Type"):""==r.amount?U()("Warning!","Please Enter Initial Deposit Amount"):(U()("Success!","Account Seccessfully Created","success"),t(C(r)),setTimeout(function(){e.push("/accounts")},2e3))}},"Save Account"),c.a.createElement(b.b,{to:"/accounts"},c.a.createElement(v.a,{variant:"contained",color:"primary"},"View All")))))}var H=a(6),V=a(433),G=a(202),J=a(203),X=a(160),$=a(434),q=a(201),K=a(126),Q=Object(H.a)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(X.a),Y=Object(H.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(q.a);function Z(e,t){return{name:e,protein:t}}var ee=Object(V.a)({table:{minWidth:700}});function te(){var e=Object(F.f)(),t=ee(),a=Object(N.d)(function(e){return e.usersReducer}),n=e.location.hash.replace("#",""),r={},o=[];return 1==a.initialState?console.log("wait"):r=a.find(function(e){return e._id===n}),o=r=={}?[]:[Z("Transaction ID",r._id),Z("Registerd At",r.time),Z("Account ID",r.account_ID),Z("Type",r.type),Z("Amount",r.amount),Z("Description",r.discription)],c.a.createElement("div",{className:"details"},c.a.createElement($.a,{component:K.a},c.a.createElement("div",{className:"TableTitle"},c.a.createElement("span",null,"Account Details")),c.a.createElement(G.a,{className:t.table,"aria-label":"customized table"},c.a.createElement(J.a,null,o.map(function(e){return c.a.createElement(Y,{key:e.name},c.a.createElement(Q,{component:"th",scope:"row",align:"left",className:"row1"},e.name),c.a.createElement(Q,{align:"left",className:"row1"},e.protein))})))))}var ae=Object(H.a)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(X.a),ne=Object(H.a)(function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(q.a);function ce(e,t){return{name:e,protein:t}}var re=Object(V.a)({table:{minWidth:700}});function oe(){var e=Object(F.f)(),t=re(),a=e.location.hash.replace("#",""),n=Object(N.d)(function(e){return e.accountsDetails}).find(function(e){return e._id===a}),r=[ce("Account #",n._id),ce("Full Name",n.name),ce("Registerd At",n.time),ce("Account Type",n.type),ce("Current Balance",n.amount)];return c.a.createElement("div",{className:"details"},c.a.createElement($.a,{component:K.a},c.a.createElement("div",{className:"TableTitle"},c.a.createElement("span",null,"Account Details")),c.a.createElement(G.a,{className:t.table,"aria-label":"customized table"},c.a.createElement(J.a,null,r.map(function(e){return c.a.createElement(ne,{key:e.name},c.a.createElement(ae,{component:"th",scope:"row",align:"left",className:"row1"},e.name),c.a.createElement(ae,{align:"left",className:"row1"},e.protein))}))),c.a.createElement("div",{className:"TableTitle",style:{background:"white"}},c.a.createElement(B,null),c.a.createElement(M,null))))}function le(){Object(N.c)();var e=Object(N.d)(function(e){return e.accountsDetails}),t=Object(N.d)(function(e){return e.usersReducer});return c.a.createElement("div",null,c.a.createElement("div",{class:"flex"},c.a.createElement(y,{length:e.length}),c.a.createElement(I,{length:t.length})))}var ie=a(204),ue=a.n(ie),se=a(159),me=a.n(se),de=a(178),fe=a.n(de),pe=a(188),be=a.n(pe),Ee=a(179),Oe=a.n(Ee),he=a(186),ge=a.n(he),je=a(149),ve=a.n(je),ye=a(148),we=a.n(ye),De=a(180),Ne=a.n(De),Ae=a(181),Ce=a.n(Ae),Te=a(183),Re=a.n(Te),Se=a(184),ke=a.n(Se),Ie=a(185),_e=a.n(Ie),xe=a(189),We=a.n(xe),Pe=a(182),Fe=a.n(Pe),Le=a(187),Ue=a.n(Le),Me=a(190),Be=a.n(Me),ze={Add:Object(n.forwardRef)(function(e,t){return c.a.createElement(fe.a,Object.assign({},e,{ref:t}))}),Check:Object(n.forwardRef)(function(e,t){return c.a.createElement(Oe.a,Object.assign({},e,{ref:t}))}),Clear:Object(n.forwardRef)(function(e,t){return c.a.createElement(we.a,Object.assign({},e,{ref:t}))}),Delete:Object(n.forwardRef)(function(e,t){return c.a.createElement(Ne.a,Object.assign({},e,{ref:t}))}),DetailPanel:Object(n.forwardRef)(function(e,t){return c.a.createElement(ve.a,Object.assign({},e,{ref:t}))}),Edit:Object(n.forwardRef)(function(e,t){return c.a.createElement(Ce.a,Object.assign({},e,{ref:t}))}),Export:Object(n.forwardRef)(function(e,t){return c.a.createElement(Fe.a,Object.assign({},e,{ref:t}))}),Filter:Object(n.forwardRef)(function(e,t){return c.a.createElement(Re.a,Object.assign({},e,{ref:t}))}),FirstPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(ke.a,Object.assign({},e,{ref:t}))}),LastPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(_e.a,Object.assign({},e,{ref:t}))}),NextPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(ve.a,Object.assign({},e,{ref:t}))}),PreviousPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(ge.a,Object.assign({},e,{ref:t}))}),ResetSearch:Object(n.forwardRef)(function(e,t){return c.a.createElement(we.a,Object.assign({},e,{ref:t}))}),Search:Object(n.forwardRef)(function(e,t){return c.a.createElement(Ue.a,Object.assign({},e,{ref:t}))}),SortArrow:Object(n.forwardRef)(function(e,t){return c.a.createElement(be.a,Object.assign({},e,{ref:t}))}),ThirdStateCheck:Object(n.forwardRef)(function(e,t){return c.a.createElement(We.a,Object.assign({},e,{ref:t}))}),ViewColumn:Object(n.forwardRef)(function(e,t){return c.a.createElement(Be.a,Object.assign({},e,{ref:t}))})};function He(){var e=Object(F.f)(),t=(Object(N.c)(),Object(N.d)(function(e){return e.usersReducer}));return!0===t.initialState?c.a.createElement("div",{className:"preloader"},c.a.createElement("img",{src:me.a,alt:"loading"})):c.a.createElement("div",{className:"transaction"},c.a.createElement(ue.a,{icons:ze,onRowClick:function(t){return e.push("transaction/#"+t.target.innerText)},title:"TRANSACTIONS",columns:[{title:"Transaction ID",field:"_id",editable:"never",cellStyle:{color:"blue"}},{title:"Time",field:"time",disableClick:!0},{title:"Account ID",field:"account_ID",editable:"never",disableClick:!0},{title:"Type",field:"type",type:"numeric",disableClick:!0},{title:"Amount",field:"amount",type:"numeric",disableClick:!0}],data:t,options:{sorting:!0}}))}var Ve=a(66),Ge={Add:Object(n.forwardRef)(function(e,t){return c.a.createElement(fe.a,Object.assign({},e,{ref:t}))}),Check:Object(n.forwardRef)(function(e,t){return c.a.createElement(Oe.a,Object.assign({},e,{ref:t}))}),Clear:Object(n.forwardRef)(function(e,t){return c.a.createElement(we.a,Object.assign({},e,{ref:t}))}),Delete:Object(n.forwardRef)(function(e,t){return c.a.createElement(Ne.a,Object.assign({},e,{ref:t}))}),DetailPanel:Object(n.forwardRef)(function(e,t){return c.a.createElement(ve.a,Object.assign({},e,{ref:t}))}),Edit:Object(n.forwardRef)(function(e,t){return c.a.createElement(Ce.a,Object.assign({},e,{ref:t}))}),Export:Object(n.forwardRef)(function(e,t){return c.a.createElement(Fe.a,Object.assign({},e,{ref:t}))}),Filter:Object(n.forwardRef)(function(e,t){return c.a.createElement(Re.a,Object.assign({},e,{ref:t}))}),FirstPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(ke.a,Object.assign({},e,{ref:t}))}),LastPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(_e.a,Object.assign({},e,{ref:t}))}),NextPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(ve.a,Object.assign({},e,{ref:t}))}),PreviousPage:Object(n.forwardRef)(function(e,t){return c.a.createElement(ge.a,Object.assign({},e,{ref:t}))}),ResetSearch:Object(n.forwardRef)(function(e,t){return c.a.createElement(we.a,Object.assign({},e,{ref:t}))}),Search:Object(n.forwardRef)(function(e,t){return c.a.createElement(Ue.a,Object.assign({},e,{ref:t}))}),SortArrow:Object(n.forwardRef)(function(e,t){return c.a.createElement(be.a,Object.assign({},e,{ref:t}))}),ThirdStateCheck:Object(n.forwardRef)(function(e,t){return c.a.createElement(We.a,Object.assign({},e,{ref:t}))}),ViewColumn:Object(n.forwardRef)(function(e,t){return c.a.createElement(Be.a,Object.assign({},e,{ref:t}))})};function Je(){var e=Object(F.f)(),t=Object(N.d)(function(e){return e.accountsDetails}),a=Object(N.c)(),n=c.a.useState({columns:[{title:"Account ID",field:"_id",editable:"never",cellStyle:{color:"blue"},detailPanelColumnAlignment:"right"},{title:"Full Name",field:"name",disableClick:!0},{title:"Registerd At",field:"time",editable:"never",disableClick:!0},{title:"Type",field:"type",disableClick:!0,lookup:{current:"Current",saving:"Saving"}},{title:"Amount",field:"amount",type:"numeric",disableClick:!0}],data:1==t.state?[]:t}),r=Object(x.a)(n,2),o=r[0],l=r[1];return console.log("account"),c.a.createElement("div",{className:"account"},c.a.createElement(ue.a,{onRowClick:function(t){return""==t.target.innerText?"":e.push("user/#"+t.target.innerText)},icons:Ge,title:"ACCOUNTS",columns:o.columns,data:o.data,editable:{onRowUpdate:function(e,t){return new Promise(function(n){setTimeout(function(){n(),t&&l(function(n){var c=Object(Ve.a)(n.data);return c[c.indexOf(t)]=e,a(S({updatedData:c,data:e})),Object(_.a)({},n,{data:c})})},600)})},onRowDelete:function(e){return new Promise(function(t){a(R(e)),setTimeout(function(){t(),l(function(t){var a=Object(Ve.a)(t.data);return a.splice(a.indexOf(e),1),Object(_.a)({},t,{data:a})})},600)})}}}))}var Xe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("componentWillMount.js"),e.next=3,this.props.dispatch(function(e){A.get("/getAllAccounts").then(function(t){e({type:"GET_ALLACCOUNTS",payload:t.data})}).catch(function(e){console.log(e)}),A.get("/getAllTransactions").then(function(t){e({type:"GET_ALLTRANSACTIONS",payload:t.data})}).catch(function(e){console.log(e)})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.setState({loading:!1})}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate"),this.state.loading="ok"}},{key:"render",value:function(){return console.log("app.js"),"ok"!=this.state.loading?c.a.createElement("div",{className:"preloader"},c.a.createElement("img",{src:me.a,alt:"loading"})):c.a.createElement(b.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement("section",null,c.a.createElement(F.c,null,c.a.createElement(F.a,{path:"/transactions",component:He}),c.a.createElement(F.a,{path:"/user",component:oe}),c.a.createElement(F.a,{path:"/transaction",component:te}),c.a.createElement(F.a,{path:"/accounts",component:Je}),c.a.createElement(F.a,{path:"/addAccount",component:z}),c.a.createElement(F.a,{exact:!0,path:"/",component:le}),c.a.createElement(F.a,{path:"/",component:le})))))}}]),t}(n.Component),$e=Object(N.b)(function(e){return{state1:e.accountsDetails,state2:e.usersReducer}})(Xe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=a(35),Ke=a(255),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialState:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return Object(Ve.a)(e).concat([t.payload]);case"GET_ALLACCOUNTS":return t.payload;case"updateAccount":return[t.payload];case"DELETE_ACCOUNT":return e.filter(function(e){return e!==t.payload});case"UPDATE_ACCOUNT":return t.payload;case"WITHDRAW":return(a=e.find(function(e){return e._id===t.payload.account_ID})).amount=parseInt(a.amount)-parseInt(t.payload.amount),Object(Ve.a)(e);case"DEPOSIT":var a;return(a=e.find(function(e){return e._id===t.payload.account_ID})).amount=parseInt(a.amount)+parseInt(t.payload.amount),Object(Ve.a)(e);default:return e}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialState:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TRANSACTION":return Object(Ve.a)(e).concat([t.payload]);case"GET_ALLTRANSACTIONS":return t.payload;case"DELETE_TRANSACTION":return e.filter(function(e){return e.account_ID!==t.payload._id});default:return e}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debit:"",credit:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEBITS":var a=0;return t.payload.map(function(e,t){a+=e.amount}),Object(_.a)({},e,{debit:a});case"CREDITS":var n=0;return t.payload.map(function(e,t){n+=e.amount}),Object(_.a)({},e,{credit:n});default:return e}},et=Object(qe.c)({accountsDetails:Qe,usersReducer:Ye,debitCredit:Ze}),tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qe.d,at=Object(qe.e)(et,tt(Object(qe.a)(Ke.a)));o.a.render(c.a.createElement(N.a,{store:at}," ",c.a.createElement($e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[268,2,1]]]);
//# sourceMappingURL=main.a156396f.chunk.js.map