webpackJsonp([1,0],[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var s=o(32),n=i(s);o(78);var a=o(77),c=i(a),r=o(13),d=i(r),l=o(112),u=i(l),p=o(113),f=i(p),v=o(109),m=i(v),h=o(106),b=i(h),_=o(107),w=i(_),g=o(110),x=i(g),y=o(111),S=i(y),k=o(108),T=i(k),M=o(105),$=i(M),E=o(100),j=i(E),O=o(102),C=i(O),I=o(79),B=i(I),L=o(14),R=i(L);window.FastClick=c.default,d.default.use(u.default),d.default.use(f.default),window.Swiper=B.default,(0,n.default)(R.default).forEach(function(e){return d.default.filter(e,R.default[e])});var D=d.default.extend({}),P=new f.default;P.map({"/":{component:m.default,subRoutes:{"/":{component:j.default},"/theme/:id":{name:"theme",component:C.default},"/author/:id":{name:"author",component:$.default}}},"/detail/:id":{name:"detail",component:w.default},"/comments":{component:b.default},"/recommenders":{component:x.default},"/section":{component:S.default},"/editors":{component:T.default}}),P.start(D,"#app")},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var s=o(13),n=i(s),a="http://localhost:9000";e.exports=function(e){n.default.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8;"},n.default.http.options.emulateJSON=!0,n.default.http.jsonp(a+e.url,{params:e.data||{}}).then(function(t){var o=t.data;e.callback(o)},function(e){})}},,,,,,function(e,t,o){var i,s,n={};o(72),i=o(16),s=o(92),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(75),i=o(19),s=o(95),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},,,,,,function(e,t){"use strict";t.replaceUrl=function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},t.subStr=function(e,t){return e?t<0?e.substr(e.length+t):e.substr(0,t):""},t.formatTime=function(e,t){if(!e)return"";var o=parseInt(e);10===o.toString().length&&(o*=1e3),!t&&(t="yyyy-MM-dd");var i=new Date(o),s={"M+":i.getMonth()+1,"d+":i.getDate(),"h+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds(),"q+":Math.floor((i.getMonth()+3)/3),S:i.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(i.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in s)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?s[n]:("00"+s[n]).substr((""+s[n]).length)));return t},t.toK=function(e){if(e>999){var t=e/1e3+"";return t.substring(0,t.length-2)+"K"}return e},t.dateTime=function(e){var t="yyyyMMdd",o=new Date,i={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),S:o.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(o.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in i)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));var n=e.slice(0,4),a=e.slice(4,6),c=e.slice(6,8),r=[n,a,c],d=r.join("/"),l=new Date(d).getDay(),u=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][l],p=r.join("");return p===t?"今日热闻":a+"月"+c+"日 "+u},t.formatPhone=function(e){return"number"==typeof e&&(e=e.toString()),e.substr(0,3)+"****"+e.substr(7,11)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["item"],data:function(){return{}},attached:function(){},methods:{}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title"],data:function(){return{}},attached:function(){},methods:{goBack:function(){window.history.back()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["content"],data:function(){return{msg:"hello vue"}},attached:function(){},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["popularity","comments","showShare"],data:function(){return{collection:!1}},ready:function(){},methods:{goBack:function(){window.history.back()},share:function(){document.body.style.overflow="hidden",this.showShare=!this.showShare},showCollection:function(){this.collection=!this.collection}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["item"],data:function(){return{id:this.item.id}},attached:function(){},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s),a=o(104),c=i(a),r=o(8),d=i(r);t.default={components:{slider:c.default,listComp:d.default},data:function(){return{topStories:[],allStories:[],date:"",loading:!1,dateArr:[],titleTip:""}},ready:function(){this.getLatest()},route:{data:function(e){var t=this;"detail"===e.from.name?t.$nextTick(function(){window.document.body.scrollTop=window.sessionStorage.scrollTop}):window.document.body.scrollTop=0,window.addEventListener("scroll",t.getScrollList,!1),window.addEventListener("touchmove",t.whatsTitle,!1),e.next()},deactivate:function(e){var t=this;window.removeEventListener("scroll",t.getScrollList,!1),window.removeEventListener("touchmove",t.whatsTitle,!1),window.sessionStorage.scrollTop=window.document.body.scrollTop,e.next()}},methods:{getLatest:function(){var e=this;e.loading=!0,(0,n.default)({url:"/news-at/api/4/news/latest",method:"GET",callback:function(t){e.$set("topStories",t.top_stories),e.$set("allStories",e.allStories.concat(t)),e.$set("date",t.date),e.dateArr.push(e.date),e.loading=!1}})},getNews:function(){var e=this;e.loading=!0,(0,n.default)({url:"/news-at/api/4/news/before/"+e.date,method:"GET",callback:function(t){e.$set("allStories",e.allStories.concat(t)),e.$set("date",t.date),e.dateArr.push(e.date),e.loading=!1}})},getScrollList:function(){var e=this;window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getNews()},replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},whatsTitle:function(){for(var e=this.dateArr,t=0,o=e.length;t<o;t++){var i=document.querySelector(".s-"+e[t]).getBoundingClientRect().top;i<500&&i>100&&(this.titleTip=e[t-1],this.$dispatch("changeTile",this.titleTip)),i<100&&i>-400&&(this.titleTip=e[t],this.$dispatch("changeTile",this.titleTip))}}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["showSidebar","title","iconDisplay","tip"],data:function(){return{nightStyle:!1}},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},showBar:function(){window.document.body.className="scroll-stop",window.document.querySelector("html").className="scroll-stop",this.showSidebar=!this.showSidebar},changeMode:function(){this.nightStyle?window.document.getElementById("app").className="":window.document.getElementById("app").className="night-style",this.nightStyle=!this.nightStyle}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(9),n=i(s),a=o(1),c=i(a),r=o(8),d=i(r);t.default={components:{listComp:d.default},data:function(){return{editors:[],allStories:[],loading:!1,background:"",description:"",name:"",image_source:"",id:""}},ready:function(){this.getTheme()},route:{data:function(e){var t=this;"detail"===e.from.name?t.$nextTick(function(){window.document.body.scrollTop=window.sessionStorage.scrollTop}):(t.getTheme(),window.document.body.scrollTop=0),window.addEventListener("scroll",t.getScrollTheme,!1),e.next()},deactivate:function(e){var t=this;window.removeEventListener("scroll",t.getScrollTheme,!1),window.sessionStorage.scrollTop=window.document.body.scrollTop,window.sessionStorage.editors=(0,n.default)(t.editors),e.next()}},methods:{getTheme:function(){var e=this;e.loading=!0,(0,c.default)({url:"/news-at/api/4/theme/"+e.$route.params.id,method:"GET",callback:function(t){e.$set("allStories",t.stories),e.$set("background",t.background),e.$set("editors",t.editors),e.$set("description",t.description),e.$set("name",t.name),e.$set("image_source",t.image_source),e.$set("id",e.allStories[e.allStories.length-1].id),e.loading=!1}})},getThemeBefore:function(){var e=this;e.loading=!0,(0,c.default)({url:"/news-at/api/4/theme/"+e.$route.params.id+"/before/"+e.id,method:"GET",callback:function(t){e.$set("allStories",e.allStories.concat(t.stories)),e.$set("id",e.allStories[e.allStories.length-1].id),e.loading=!1}})},getScrollTheme:function(){var e=this;window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getThemeBefore()},replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s);t.default={props:["showSidebar","tip"],data:function(){return{list:[]}},ready:function(){this.getList()},methods:{getList:function(){var e=this;(0,n.default)({url:"/news-at/api/4/themes",method:"GET",callback:function(t){e.$set("list",t.others)}})},hiddenBar:function(){window.document.body.className="",window.document.querySelector("html").className="",this.showSidebar=!this.showSidebar,this.tip=null}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["top_stories"],data:function(){return{}},ready:function(){new window.Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,spaceBetween:0,centeredSlides:!0,autoplay:4e3,autoplayDisableOnInteraction:!1,observer:!0,lazyLoading:!0,resistanceRatio:0})},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t){"use strict"},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(97),n=i(s),a=o(1),c=i(a);t.default={components:{commentsComp:n.default},data:function(){return{longComments:[],shortComments:[],detailId:"",extra:{},showReply:!1,loading:!1,id:""}},attached:function(){},route:{activate:function(e){var t=this;t.detailId=window.sessionStorage.detailId,t.extra=JSON.parse(window.sessionStorage.extra),t.getLongComments(),t.$nextTick(function(){window.document.body.scrollTop=0}),window.addEventListener("scroll",t.getScrollData,!1),e.next()},deactivate:function(e){var t=this;this.shortComments=[],this.longComments=[],window.removeEventListener("scroll",t.getScrollData,!1),e.next()}},methods:{goBack:function(){window.history.back()},getLongComments:function(){var e=this;e.loading=!0,(0,c.default)({url:"/news-at/api/4/story/"+e.detailId+"/long-comments",method:"GET",callback:function(t){e.$set("longComments",t.comments),e.loading=!1}})},getShortComments:function(){var e=this;e.loading=!0,window.document.getElementById("short-comments-top").scrollTop=0,(0,c.default)({url:"/news-at/api/4/story/"+e.detailId+"/short-comments",method:"GET",callback:function(t){e.$set("shortComments",t.comments),e.$set("id",e.shortComments[e.shortComments.length-1].id),e.loading=!1}})},getScrollData:function(){var e=this;window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getShortCommentsNext()},getShortCommentsNext:function(){var e=this;e.loading=!0,(0,c.default)({url:"/news-at/api/4/story/"+e.detailId+"/short-comments/before/"+e.id,method:"GET",callback:function(t){e.$set("shortComments",e.shortComments.concat(t.comments)),e.$set("id",e.shortComments[e.shortComments.length-1].id),e.loading=!1}})},show:function(){document.body.style.overflow="hidden",this.showReply=!this.showReply},hidden:function(){document.body.style.overflow="auto",this.showReply=!this.showReply}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(9),n=i(s),a=o(1),c=i(a),r=o(98),d=i(r),l=o(99),u=i(l);t.default={components:{detailContent:d.default,detailHeader:u.default},data:function(){return{body:"",image:"",title:"",imageSource:"",section:{},thumbnail:"",extra:{},showShare:!1,recommenders:[],shareUrl:""}},ready:function(){},route:{activate:function(e){var t=this;"/"===e.from.path?(window.sessionStorage.sectionScrollTop=0,window.sessionStorage.ifSectionReq=!0):window.sessionStorage.ifSectionReq=!1,t.getDetails(),t.getExtra(),t.$nextTick(function(){window.document.body.scrollTop=0}),e.next()},deactivate:function(e){var t=this;window.sessionStorage.detailId=t.$route.params.id,window.sessionStorage.extra=(0,n.default)(t.extra),window.sessionStorage.sectionId=(0,n.default)(t.section.id),t.init(),e.next()}},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},getDetails:function(){var e=this;e.loading=!0,(0,c.default)({url:"/news-at/api/4/news/"+e.$route.params.id,method:"GET",callback:function(t){e.$set("body",t.body),e.$set("image",t.image),e.$set("title",t.title),e.$set("imageSource",t.image_source),t.recommenders&&e.$set("recommenders",t.recommenders),t.section&&(e.$set("section",t.section),e.$set("thumbnail",t.section.thumbnail)),t.body||e.$set("shareUrl",t.share_url),e.loading=!1}})},init:function(){var e=this;e.body="",e.image="",e.title="",e.imageSource="",e.section="",e.thumbnail="",e.extra={popularity:"···",comments:"···"},e.recommenders=[],e.replaceUrl=""},getExtra:function(){var e=this;(0,c.default)({url:"/news-at/api/4/story-extra/"+e.$route.params.id,method:"GET",callback:function(t){e.$set("extra",t)}})},hiddenShare:function(){document.body.style.overflow="initial",this.showShare=!this.showShare}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(7),n=i(s);t.default={components:{commonHeader:n.default},data:function(){return{editors:[]}},attached:function(){},route:{activate:function(e){var t=this;t.editors=JSON.parse(window.sessionStorage.editors),t.$nextTick(function(){window.document.body.scrollTop=0}),e.next()},deactivate:function(e){this.editors=[],e.next()}},methods:{goBack:function(){window.history.back()}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(103),n=i(s),a=o(101),c=i(a);t.default={components:{sideBar:n.default,listHeader:c.default},data:function(){return{loading:!1,showSidebar:!1,tip:""}},computed:{title:function(){switch(this.$route.params.id){case"13":return"日常心理学";case"12":return"用户推荐日报";case"3":return"电影日报";case"11":return"不许无聊";case"4":return"设计日报";case"5":return"大公司日报";case"6":return"财经日报";case"10":return"互联网安全";case"2":return"开始游戏";case"7":return"音乐日报";case"9":return"动漫日报";case"8":return"体育日报";default:return"首页"}},iconDisplay:function(){return!this.$route.params.id}},events:{changeTile:function(e){this.tip=e}},attached:function(){},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},showBar:function(){window.document.body.classList.add="scroll-stop",window.document.querySelector("html").classList.add="scroll-stop",this.showSidebar=!this.showSidebar},hiddenBar:function(){window.document.body.className="",window.document.querySelector("html").className="",this.showSidebar=!this.showSidebar}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s),a=o(7),c=i(a);t.default={components:{commonHeader:c.default},data:function(){return{detailId:"",recommenders:[],editors:[]}},attached:function(){},route:{activate:function(e){var t=this;t.detailId=window.sessionStorage.detailId,t.getRecommender(),t.$nextTick(function(){window.document.body.scrollTop=0}),e.next()},deactivate:function(e){this.recommenders=[],e.next()}},methods:{goBack:function(){window.history.back()},getRecommender:function(){var e=this;e.loading=!0,(0,n.default)({url:"/news-at/api/4/story/"+e.detailId+"/recommenders",method:"GET",callback:function(t){t.items&&(e.$set("recommenders",t.items[0].recommenders),console.log(e.recommenders)),t.editors&&e.$set("editors",t.editors),e.loading=!1}})}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s),a=o(8),c=i(a),r=o(7),d=i(r);t.default={components:{listComp:c.default,commonHeader:d.default},data:function(){return{stories:[],timestamp:"",name:"",sectionId:""}},route:{data:function(e){var t=this;t.sectionId=window.sessionStorage.sectionId,"true"===window.sessionStorage.ifSectionReq&&t.getLatest(),t.$nextTick(function(){window.document.body.scrollTop=window.sessionStorage.sectionScrollTop}),window.addEventListener("scroll",t.getScrollData,!1),e.next()},deactivate:function(e){var t=this;window.removeEventListener("scroll",t.getScrollData,!1),window.sessionStorage.sectionScrollTop=window.document.body.scrollTop,e.next()}},methods:{getLatest:function(){var e=this;e.loading=!0,(0,n.default)({url:"/news-at/api/3/section/"+e.sectionId,method:"GET",callback:function(t){e.stories.concat(t.stories),e.$set("stories",t.stories),e.$set("timestamp",t.timestamp),e.$set("name",t.name),e.loading=!1}})},getScrollData:function(){var e=this;window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getSection()},getSection:function(){var e=this;e.loading=!0,(0,n.default)({url:"/news-at/api/4/section/"+e.sectionId+"/before/"+e.timestamp,method:"GET",callback:function(t){e.$set("stories",e.stories.concat(t.stories)),e.$set("timestamp",t.timestamp),e.loading=!1}})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t){e.exports=' <div class=detail-content v-html="content | replaceUrl" v-cloak></div> '},function(e,t){e.exports=" <div class=slider> <div class=swiper-container> <div class=swiper-wrapper> <div v-for=\"item in top_stories\" class=swiper-slide :style=\"{ backgroundImage: 'url(' + replace(item.image) + ')' }\" v-link=\"{name: 'detail', params: { id: item.id }}\"> <div class=swiper-mask></div> <h1 class=slider-title>{{item.title}}</h1> </div> </div> <div class=swiper-pagination></div> </div> </div> "},function(e,t){e.exports=" <div class=main-list id=foo> <list-header :show-sidebar.sync=showSidebar :title=title :tip=tip :icon-display=iconDisplay> </list-header> <side-bar :show-sidebar.sync=showSidebar :tip.sync=tip> </side-bar> <div v-if=showSidebar class=sidebar-mask @click=hiddenBar></div> <router-view></router-view> </div> "},function(e,t){e.exports=' <div _v-06ff76ff=""> <div class=comments-header _v-06ff76ff=""> <div class=header-icon @click=goBack _v-06ff76ff=""><i class=iconfont _v-06ff76ff=""></i></div> <div class=header-cont _v-06ff76ff=""><p _v-06ff76ff=""><span _v-06ff76ff="">{{extra.comments}}</span> 条点评</p></div> <div class=header-icon _v-06ff76ff=""><i class=iconfont _v-06ff76ff=""></i><span _v-06ff76ff="">{{popularity}}</span></div> </div> <ul class=long-comments _v-06ff76ff=""> <li class=long-comments-nav _v-06ff76ff=""><span _v-06ff76ff="">{{extra.long_comments}}</span> 条长评</li> <div v-if="extra.long_comments === 0" class=no-comments _v-06ff76ff=""> <div class=no-comments-icon _v-06ff76ff=""> <i class=iconfont _v-06ff76ff=""></i> <p _v-06ff76ff="">深度长评虚位以待</p> </div> </div> <comments-comp @click=show v-for="item in longComments" :item=item _v-06ff76ff=""></comments-comp> </ul> <ul class=short-comments id=short-comments-top _v-06ff76ff=""> <li class=short-comments-nav @click=getShortComments _v-06ff76ff=""><span _v-06ff76ff="">{{extra.short_comments}}</span> 条短评 <i class="iconfont down" _v-06ff76ff=""></i></li> <comments-comp @click=show v-for="item in shortComments" :item=item _v-06ff76ff=""></comments-comp> </ul> <div v-if=showReply class=mask @click=hidden _v-06ff76ff=""> <div class=reply-box @click.stop="" _v-06ff76ff=""> <p _v-06ff76ff="">赞同</p> <p _v-06ff76ff="">举报</p> <p _v-06ff76ff="">复制</p> <p _v-06ff76ff="">回复</p> </div> </div> </div> '},function(e,t){e.exports=' <div _v-14ded6b8=""> <common-header :title="\'主编\'" _v-14ded6b8=""></common-header> <ul _v-14ded6b8=""> <li v-for="item in editors" _v-14ded6b8=""> <a :href="\'http://news-at.zhihu.com/api/4/editor/\'+item.id+\'/profile-page/android\'" _v-14ded6b8=""> <div class=img-box _v-14ded6b8=""> <img :src="item.avatar | replaceUrl" alt="" _v-14ded6b8=""> </div> <div class=info _v-14ded6b8=""> <p class=name _v-14ded6b8="">{{item.name}}</p> <p class=bio _v-14ded6b8="">{{item.bio}}</p> </div> </a> </li> </ul> </div> '},function(e,t){e.exports=' <div class=sidebar-box :class="{\'show-sidebar\':showSidebar}" _v-159f0112=""> <div class=swiper-slide _v-159f0112=""> <div class=sidebar-header v-link="{name: \'author\', params: { id: \'888\'}}" @click=hiddenBar _v-159f0112=""> <div class=user _v-159f0112=""> <img src=http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg alt="" _v-159f0112=""> <p _v-159f0112="">huajiang1989</p> </div> <div class=function _v-159f0112=""> <div class=function-sub _v-159f0112=""> <i class=iconfont _v-159f0112=""></i> <p _v-159f0112="">我的收藏</p> </div> <div class=function-sub _v-159f0112=""> <i class=iconfont _v-159f0112=""></i> <p _v-159f0112="">离线下载</p> </div> </div> </div> <div class=sidebar-list _v-159f0112=""> <p v-link="{path: \'/\'}" class=sidebar-list-first @click=hiddenBar _v-159f0112=""><i class=iconfont _v-159f0112=""></i>首页</p> <ul class=sidebar-list-ul _v-159f0112=""> <li class=sidebar-list-li v-for="item in list" @click=hiddenBar v-link="{name: \'theme\', params: { id: item.id }}" _v-159f0112=""> <p _v-159f0112="">{{item.name}}</p> <div _v-159f0112="">+</div> </li> </ul> </div> </div> </div> '},function(e,t){e.exports=' <div _v-182697d6=""> <div class=photo _v-182697d6=""> <img src=http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg alt="" _v-182697d6=""> </div> <p class=name _v-182697d6="">huajiang1989</p> <ul _v-182697d6=""> <li _v-182697d6=""><a href=https://github.com/huajiang1989/zhihudaily-vue _v-182697d6="">项目github地址</a></li> <li _v-182697d6=""><a href=http://www.huajiang1989.com/ _v-182697d6="">我的博客地址</a></li> <li _v-182697d6=""><p _v-182697d6="">给一个star好吗</p></li> <li _v-182697d6=""><p _v-182697d6="">(✪ω✪)</p></li> </ul> <div class=btn _v-182697d6=""> <p _v-182697d6="">登出</p> </div> </div> '},function(e,t){e.exports=' <slider :top_stories=topStories v-cloak="" _v-2f16f74c=""></slider> <div class="list-box s-{{* date}}" v-for="item in allStories" _v-2f16f74c=""> <ul _v-2f16f74c=""> <h2 class=title _v-2f16f74c="">{{item.date | dateTime}}</h2> <list-comp v-for="subItem in item.stories" :item=subItem _v-2f16f74c=""></list-comp> </ul> </div> '},function(e,t){e.exports=' <div class=list-header _v-2fb2b03f=""> <div class=header-icon @click=goBack _v-2fb2b03f=""><i class=iconfont _v-2fb2b03f=""></i></div> <div class=header-cont _v-2fb2b03f=""></div> <div class=header-icon @click=share _v-2fb2b03f=""><i class=iconfont _v-2fb2b03f=""></i></div> <div class=header-icon @click=showCollection _v-2fb2b03f=""><i :class="{\'collection\': collection}" class=iconfont _v-2fb2b03f=""></i></div> <div class=header-icon v-link="{ path: \'/comments\'}" _v-2fb2b03f=""><i class=iconfont _v-2fb2b03f=""></i><span _v-2fb2b03f="">{{comments}}</span></div> <div class=header-icon _v-2fb2b03f=""><i class=iconfont _v-2fb2b03f=""></i><span _v-2fb2b03f="">{{popularity | toK}}</span></div> </div> '},function(e,t){e.exports=' <div _v-31e447ac=""> <common-header :title=name _v-31e447ac=""></common-header> <ul class=list _v-31e447ac=""> <list-comp v-for="item in stories" :item=item _v-31e447ac=""> </list-comp> </ul> </div> '},function(e,t){e.exports=' <div _v-33debb9c=""> <detail-header :popularity=extra.popularity :comments=extra.comments :show-share.sync=showShare _v-33debb9c=""></detail-header> <div class=detail-main-box _v-33debb9c=""> <div v-if=image class="detail-img-box margin-top" :style="{ backgroundImage: \'url(\' + replace(image) + \')\' }" _v-33debb9c=""> <div class=detail-mask _v-33debb9c=""></div> <h1 class=detail-title _v-33debb9c="">{{title}}</h1> <p class=detail-image-source _v-33debb9c="">{{imageSource}}</p> </div> <div v-link="{path: \'/recommenders\' }" v-if="recommenders.length > 0" class=recommenders-box _v-33debb9c=""> <p _v-33debb9c="">推荐者</p> <div class=recommenders-item v-for="item in recommenders" _v-33debb9c=""> <img :src="item.avatar | replaceUrl" alt="" _v-33debb9c=""> </div> </div> <detail-content v-if=body :content=body _v-33debb9c=""> </detail-content> <iframe v-else="" :src=shareUrl frameborder=0 _v-33debb9c="">您的浏览器不支持iframe</iframe> <div v-if=section.name class=section-box v-link="{path: \'/section\'}" _v-33debb9c=""> <div class=section-btn _v-33debb9c=""> <img :src="thumbnail | replaceUrl" alt="" _v-33debb9c=""> <p _v-33debb9c="">本文来自: {{section.name}} · 合集</p> <div class=arrow _v-33debb9c=""></div> </div> </div> </div> <div v-if=showShare class=mask @click=hiddenShare _v-33debb9c=""> <div class=share-box @click.stop="" _v-33debb9c=""> <p class=share-title _v-33debb9c="">分享</p> <div class=share-content _v-33debb9c=""> <div class=child _v-33debb9c=""><div class="icon color-red" _v-33debb9c=""><i class=iconfont _v-33debb9c=""></i></div><p _v-33debb9c="">新浪微博</p></div> <div class=child _v-33debb9c=""><div class="icon color-green-1" _v-33debb9c=""><i class=iconfont _v-33debb9c=""></i></div><p _v-33debb9c="">微信</p></div> <div class=child _v-33debb9c=""><div class="icon color-green-2" _v-33debb9c=""><i class=iconfont _v-33debb9c=""></i></div><p _v-33debb9c="">微信朋友圈</p></div> <div class=child _v-33debb9c=""><div class="icon color-yellow" _v-33debb9c=""><i class=iconfont _v-33debb9c=""></i></div><p _v-33debb9c="">QQ空间</p></div> <div class=child _v-33debb9c=""><div class="icon color-blue-1" _v-33debb9c=""><i class=iconfont _v-33debb9c=""></i></div><p _v-33debb9c="">推特</p></div> <div class=child _v-33debb9c=""><div class="icon color-blue-2" _v-33debb9c=""><i class=iconfont _v-33debb9c=""></i></div><p _v-33debb9c="">QQ</p></div> <div class=child _v-33debb9c=""><div class="icon color-green-3" _v-33debb9c=""><i class=iconfont _v-33debb9c=""></i></div><p _v-33debb9c="">豆瓣</p></div> </div> </div> </div> </div> '},function(e,t){e.exports=' <div class=list-header _v-67a5e552=""> <div class=header-icon @click=showBar _v-67a5e552=""><i class=iconfont _v-67a5e552=""></i></div> <div v-if=!tip class=header-cont _v-67a5e552=""><p _v-67a5e552="">{{title}}</p></div> <div v-if=tip class=header-cont _v-67a5e552=""><p _v-67a5e552="">{{tip | dateTime}}</p></div> <div class=header-icon v-show=iconDisplay _v-67a5e552=""><i class=iconfont _v-67a5e552=""></i></div> <div class=header-icon v-show=iconDisplay @click=changeMode _v-67a5e552=""><i class=iconfont _v-67a5e552=""></i></div> </div> '},function(e,t){e.exports=' <div class=common-header _v-76967a65=""> <div class=header-icon @click=goBack _v-76967a65=""><i class=iconfont _v-76967a65=""></i></div> <div class=header-cont _v-76967a65=""><p _v-76967a65="">{{title}}</p></div> </div> '},function(e,t){e.exports=' <div class="detail-img-box margin-top" :style="{ backgroundImage: \'url(\' + replace(background) + \')\' }" _v-831a98d8=""> <div class=detail-mask _v-831a98d8=""></div> <h1 class=detail-title _v-831a98d8="">{{description}}</h1> <p class=detail-image-source _v-831a98d8="">{{imageSource}}</p> </div> <div v-link="{path: \'/editors\' }" v-if="editors.length > 0" class=editors-box _v-831a98d8=""> <p _v-831a98d8="">主编</p> <div class=editors-item v-for="item in editors" _v-831a98d8=""> <img :src="item.avatar | replaceUrl" alt="" _v-831a98d8=""> </div> </div> <div class=list-box _v-831a98d8=""> <ul _v-831a98d8=""> <list-comp v-for="item in allStories" :item=item _v-831a98d8=""></list-comp> </ul> </div> '},function(e,t){e.exports=' <li class=comment-li _v-b7724704=""> <div class=img-box _v-b7724704=""> <img :src="item.avatar | replaceUrl" alt="" _v-b7724704=""> </div> <div class=comment-content _v-b7724704=""> <div class=content-header _v-b7724704=""> <div class=author _v-b7724704=""> {{item.author}} </div> <div class=likes _v-b7724704=""> <i class=iconfont _v-b7724704=""></i> {{item.likes}} </div> </div> <div class=content-main _v-b7724704=""> <p _v-b7724704="">{{item.content}}</p> <p class=reply v-if=item.reply_to _v-b7724704=""> //{{item.reply_to.author}}: <span _v-b7724704=""> {{item.reply_to.content}}</span> </p> </div> <div class=content-time _v-b7724704=""> {{item.time | formatTime "MM-dd hh:mm"}} </div> </div> </li> '},function(e,t){e.exports=' <li v-link="{name: \'detail\', params: { id: id }}" class=list-detail-box v-cloak="" _v-d0192fd8=""> <div class=list-content-box _v-d0192fd8=""> <p _v-d0192fd8="">{{item.title}}</p> <p class=time v-if=item.display_date _v-d0192fd8="">{{item.display_date}}</p> </div> <div v-if=item.images class=list-img-box _v-d0192fd8=""> <img :src="item.images[0] | replaceUrl" alt="" _v-d0192fd8=""> <p v-if=item.multipic class=tip _v-d0192fd8=""><i class=iconfont _v-d0192fd8=""></i>多图</p> </div> </li> '},function(e,t){e.exports=' <div _v-de2109a4=""> <common-header :title="\'推荐者\'" _v-de2109a4=""></common-header> <ul _v-de2109a4=""> <p v-if=recommenders class=title _v-de2109a4="">本文推荐者</p> <li v-for="item in recommenders" _v-de2109a4=""> <a :href="\'http://www.zhihu.com/people/\' + item.zhihu_url_token" _v-de2109a4=""> <div class=img-box _v-de2109a4=""> <img :src="item.avatar | replaceUrl" alt="" _v-de2109a4=""> </div> <div class=info _v-de2109a4=""> <p class=name _v-de2109a4="">{{item.name}}</p> <p class=bio _v-de2109a4="">{{item.bio}}</p> </div> </a> </li> <li v-for="item in editors" _v-de2109a4=""> <a :href="\'http://www.zhihu.com/people/\' + item.zhihu_url_token" _v-de2109a4=""> <div class=img-box _v-de2109a4=""> <img :src="item.avatar | replaceUrl" alt="" _v-de2109a4=""> </div> <div class=info _v-de2109a4=""> <p class=name _v-de2109a4="">{{item.name}} <span class=zhubian _v-de2109a4="">主编</span> </p> <p class=bio _v-de2109a4="">{{item.bio}}</p> </div> </a> </li> </ul> </div> '},function(e,t,o){var i,s,n={};o(74),i=o(15),s=o(94),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(60),i=o(17),s=o(80),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(68),i=o(18),s=o(88),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(67),i=o(20),s=o(87),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;
s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(71),i=o(21),s=o(91),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(73),i=o(22),s=o(93),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(65),i=o(23),s=o(85),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(61),i=o(24),s=o(81),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(66),i=o(25),s=o(86),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(63),i=o(26),s=o(83),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(70),i=o(27),s=o(90),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(64),i=o(28),s=o(84),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(62),i=o(29),s=o(82),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(76),i=o(30),s=o(96),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})},function(e,t,o){var i,s,n={};o(69),i=o(31),s=o(89),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var t=n[e];a.computed[e]=function(){return t}})}]);
//# sourceMappingURL=app.96126cf4087010d00464.js.map
