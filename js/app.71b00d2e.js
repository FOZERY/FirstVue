(function(){"use strict";var t={9077:function(t,n,o){var e=o(9242),r=o(3396);const s={class:"app"};function i(t,n,o,e,i,u){const a=(0,r.up)("post-form"),c=(0,r.up)("post-list");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(a,{onCreate:u.createPost},null,8,["onCreate"]),(0,r.Wm)(c,{posts:i.posts},null,8,["posts"])])}o(560);const u=t=>((0,r.dD)("data-v-7f881ab2"),t=t(),(0,r.Cn)(),t),a=u((()=>(0,r._)("h4",null,"Создание поста",-1)));function c(t,n,o,s,i,u){const c=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:n[3]||(n[3]=(0,e.iM)((()=>{}),["prevent"]))},[a,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>i.post.title=t),class:"input",type:"text",placeholder:"Название"},null,512),[[e.nr,i.post.title]]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>i.post.body=t),class:"input",type:"text",placeholder:"Описание"},null,512),[[e.nr,i.post.body]]),(0,r.Wm)(c,{style:{"align-self":"flex-end","margin-top":"15px"},onClick:n[2]||(n[2]=t=>u.createPost())},{default:(0,r.w5)((()=>[(0,r.Uk)(" Создать")])),_:1})],32)}var l={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}},p=o(89);const d=(0,p.Z)(l,[["render",c],["__scopeId","data-v-7f881ab2"]]);var f=d;const v=(0,r._)("h3",null,"Список пользователей",-1);function b(t,n,o,e,s,i){const u=(0,r.up)("post-item");return(0,r.wg)(),(0,r.iD)("div",null,[v,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.posts,(t=>((0,r.wg)(),(0,r.j4)(u,{post:t},null,8,["post"])))),256))])}var m=o(7139);const h=t=>((0,r.dD)("data-v-2ce87dcc"),t=t(),(0,r.Cn)(),t),y={class:"post"},w=h((()=>(0,r._)("strong",null,"Название:",-1))),_=h((()=>(0,r._)("strong",null,"Описание:",-1))),g={class:"post__btns"};function O(t,n,o,e,s,i){const u=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",null,[w,(0,r.Uk)(" "+(0,m.zw)(o.post.title),1)]),(0,r._)("div",null,[_,(0,r.Uk)(" "+(0,m.zw)(o.post.body),1)]),(0,r._)("div",g,[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Удалить")])),_:1})])])}var k={props:{post:{type:Object,required:!0}}};const x=(0,p.Z)(k,[["render",O],["__scopeId","data-v-2ce87dcc"]]);var D=x,P={props:{posts:{type:Array,required:!0}},components:{PostItem:D}};const j=(0,p.Z)(P,[["render",b]]);var C=j,U={components:{PostList:C,PostForm:f},data(){return{posts:[{id:1,title:"JavaScript",body:"Описание поста"},{id:2,title:"JavaScript 2",body:"Описание поста 2"},{id:3,title:"JavaScript 3",body:"Описание поста 3"}]}},methods:{createPost(t){this.posts.push(t)}}};const I=(0,p.Z)(U,[["render",i]]);var W=I;const Z={class:"btn"};function S(t,n,o,e,s,i){return(0,r.wg)(),(0,r.iD)("button",Z,[(0,r.WI)(t.$slots,"default",{},void 0,!0)])}var J={name:"my-button"};const q=(0,p.Z)(J,[["render",S],["__scopeId","data-v-0b613ac4"]]);var z=q,E=[z];const F=(0,e.ri)(W);E.forEach((t=>{F.component(t.name,t)})),F.mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,s){if(!e){var i=1/0;for(l=0;l<t.length;l++){e=t[l][0],r=t[l][1],s=t[l][2];for(var u=!0,a=0;a<e.length;a++)(!1&s||i>=s)&&Object.keys(o.O).every((function(t){return o.O[t](e[a])}))?e.splice(a--,1):(u=!1,s<i&&(i=s));if(u){t.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[e,r,s]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,s,i=e[0],u=e[1],a=e[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(a)var l=a(o)}for(n&&n(e);c<i.length;c++)s=i[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(l)},e=self["webpackChunklab17"]=self["webpackChunklab17"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(9077)}));e=o.O(e)})();
//# sourceMappingURL=app.71b00d2e.js.map