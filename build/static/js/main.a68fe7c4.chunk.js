(this["webpackJsonplevans-news"]=this["webpackJsonplevans-news"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),c=a(9),n=a.n(c);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);var l=a(7),r=a(2),o=a(3),m=a(5),d=a(4),u=a(6),p=(a(17),a(1)),v=a.n(p),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleScroll=function(e){var t,s=v()("#navbar"),i=11*parseInt(v()("#header-text").css("font-size"));(console.log(i),a.state.sY=i,window.scrollY>=a.state.sY/2?(s.css("position","fixed"),s.css("top","0px")):(s.css("position","absolute"),s.css({top:a.state.sY-window.scrollY+"px",height:"8.57vw",transition:"0s"})),window.scrollY>=a.state.sY/1.5)?(s.css({height:"5vw",transition:"0.25s"}),v()("#icons").css("right","-3.9vw"),v()("#aljir").css({width:"4vw","margin-top":"0.5vw","margin-left":"0.5vw"}),v()(".block_navbar").css({top:"0.25vw",width:"6.5vw"}),v()("#icon").css({top:"0.5vw",right:"6vw",transition:"0.2s",height:"3.5vw",width:"3.5vw"}),v()("#search_icon").css((t={top:"0.5vw",right:"10vw",transition:"0.2s",height:"3.5vw",width:"3.5vw"},Object(l.a)(t,"transition","0.2s"),Object(l.a)(t,"transform","rotate(0deg)"),t)),v()("#search").css(Object(l.a)({top:"0.5vw",right:"10vw",transition:"0.2s",height:"3.5vw",width:"3.5vw"},"transition","0.2s")),v()("#search_input").css({transition:"0.2s",height:"3vw","padding-left":"0.02vw",width:"0.1vw",right:"0vw"}),a.state.pos_y=1,a.state.search_pos=0,setTimeout((function(){v()("#search_icon").css("transition","1s"),v()("#search_input").css("transition","1s"),v()("#search").css("transition","1s"),v()("#search_input").css("display","none")}),200)):(s.css("height","8.57vw"),v()("#icons").css("right","0vw"),v()("#aljir").css({width:"6vw","margin-top":"1.5vw","margin-left":"2vw"}),v()(".block_navbar").css({top:"0.5vw",width:"11vw"}),v()("#icon").css({top:"2vw",right:"2vw",height:"4.8vw",width:"4.8vw"}),v()("#search_icon").css({top:"2vw",right:"8vw",transition:"0.2s",height:"4.8vw",width:"4.8vw",transform:"rotate(0deg)"}),v()("#search").css({top:"2vw",right:"8vw",transition:"0.2s",height:"4.8vw",width:"4.8vw"}),v()("#search_input").css({transition:"0.2s",height:"4.3vw","padding-left":"0.1vw",width:"0.3vw",right:"0vw"}),a.state.pos_y=0,a.state.search_pos=0,setTimeout((function(){s.css("transition","0s"),v()("#search_icon").css("transition","1s"),v()("#search_input").css("transition","1s"),v()("#search").css("transition","1s"),v()("#search_input").css("display","none")}),200))},a.state={sY:312,search_pos:0,pos_y:0,burger:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("DOMContentLoaded",this.loader)}},{key:"componentWillUnmount",value:function(){window.rvwoveEventListener("scroll",this.handleScroll)}},{key:"search_click",value:function(e){0==this.state.pos_y?0==this.state.search_pos?(v()("#search").css("width","25vw"),v()("#search_icon").css("right","28.7vw").css("transform","rotate(-360deg)"),v()("#search_input").css("display","block"),setTimeout((function(){v()("#search_input").css("opacity","1"),v()("#search_input").css("width","20.5vw")}),1),this.state.search_pos=1):(v()("#search").css("width","4.8vw"),v()("#search_icon").css("right","8vw"),v()("#search_icon").css("transform","rotate(0deg)"),v()("#search_input").css("opacity","0"),v()("#search_input").css("width","4vw"),setTimeout((function(){v()("#search_input").css("display","none")}),1e3),this.state.search_pos=0):0==this.state.search_pos?(v()("#search").css("width","23vw"),v()("#search_icon").css("right","30.39vw"),v()("#search_icon").css("transform","rotate(-360deg)"),v()("#search_input").css("display","block"),setTimeout((function(){v()("#search_input").css("opacity","1"),v()("#search_input").css("width","20vw")}),1),this.state.search_pos=1):(v()("#search").css("width","3.5vw"),v()("#search_icon").css("right","10.675vw"),v()("#search_icon").css("transform","rotate(0deg)"),v()("#search_input").css("opacity","0"),v()("#search_input").css("width","3vw"),setTimeout((function(){v()("#search_input").css("display","none")}),1e3),this.state.search_pos=0)}},{key:"loader",value:function(e){window.innerWidth<=window.innerHeight&&(v()(".block_navbar").css("font-size","1.2em"),window.innerWidth<=window.innerHeight/1.7&&(v()(".block_navbar").css({height:"2vw"}),v()("#nav_blocks").css({width:"11vw",height:"5vw",opacity:"0","margin-top":"-20vw",top:"-15vw","font-size":"1em"}),v()("#burger").css({"margin-left":"12vw",display:"block"})))}},{key:"burger",value:function(e){0==this.state.burger?(this.state.burger=1,v()("#nav_blocks").css({opacity:"1","margin-top":"10vw",top:"0vw"}),v()("#burger").css({height:"35vw",width:"18vw"}),v()("#burger").css("margin-top","-33vw"),v()("#aljir").css("margin-top","-51.5vw")):(this.state.burger=0,v()("#nav_blocks").css({opacity:"0","margin-top":"-20vw",top:"-15vw"}),v()("#burger").css({height:"8vw",width:"8vw"}),v()("#burger").css("margin-top","-7vw"),v()("#aljir").css("margin-top","1.5vw"))}},{key:"render",value:function(){return i.a.createElement("div",{id:"HEADER",className:"container-fluid"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{id:"header"},i.a.createElement("img",{src:"media\\img\\header\\LOGO.png",alt:"LeVans",id:"logo"}),i.a.createElement("div",{id:"polosa"}),i.a.createElement("div",{id:"header-text"},"\u041d\u043e\u0432\u043e\u0441\u0442\u043d\u043e\u0439 \u043f\u043e\u0440\u0442\u0430\u043b")),i.a.createElement("div",{id:"navbar"},i.a.createElement("img",{src:"media\\img\\header\\aljir.png",alt:"",id:"aljir"}),i.a.createElement("div",{id:"nav_blocks",className:"container"},i.a.createElement("div",{className:"block_navbar"}," #World\ud83c\udf0d"),i.a.createElement("div",{className:"block_navbar"}," #Tech\ud83d\udcbb"),i.a.createElement("div",{className:"block_navbar"}," #Games\ud83c\udfae"),i.a.createElement("div",{className:"block_navbar"}," #Music\ud83c\udfb6")),i.a.createElement("div",{id:"burger",className:"container",onClick:this.burger.bind(this)},i.a.createElement("div",{id:"one_burger",className:"col"}),i.a.createElement("div",{id:"two_burger",className:"col"}),i.a.createElement("div",{id:"three_burger",className:"col"})),i.a.createElement("div",{id:"icons",className:"container"},i.a.createElement("img",{src:"media\\img\\header\\user.png",alt:"",id:"icon"}),i.a.createElement("img",{src:"media\\img\\header\\search.png",alt:"",id:"search_icon",onClick:this.search_click.bind(this)}),i.a.createElement("div",{id:"search"},i.a.createElement("input",{type:"text",id:"search_input",placeholder:"search..."}))))))}}]),t}(i.a.Component),E=(a(18),function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).adapt=function(){setInterval((function(){v()("#top_news").css("height",parseInt(v()("#top_news").css("width"))/16*9+"px")}),1e3)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){v()("#top_news").css("height",parseInt(v()("#top_news").css("width"))/16*9+"px"),this.adapt()}},{key:"render",value:function(){return i.a.createElement("div",{id:"all_top_news",className:"container-fluid"},i.a.createElement("div",{id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},i.a.createElement("div",{id:"top_news"},i.a.createElement("div",{id:"title_top_news_block"},i.a.createElement("p",{id:"title_top_news"},"TOP NEWS\ud83d\udd25")),i.a.createElement("div",{id:"top_news_block"},i.a.createElement("div",{class:"carousel-inner"},i.a.createElement("div",{class:"carousel-item active post"},i.a.createElement("div",{class:"post_img"},i.a.createElement("img",{src:"https://img.rg.ru/img/content/153/10/69/1_d_850.jpg"})),i.a.createElement("div",{class:"post_display"},i.a.createElement("div",{class:"post_display_title"},i.a.createElement("p",null,"\u0410\u043d\u0438\u043c\u0435 \u0443\u0431\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u0434\u0440\u043e\u0441\u0442\u043a\u043e\u0432!")),i.a.createElement("div",{class:"post_display_tag"},i.a.createElement("p",null,"#world\ud83c\udf0d")),i.a.createElement("div",{class:"post_display_short_text"},i.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi autem laborum ducimus accusantium vel numquam cumque eum esse quos impedit, minima deleniti nam animi debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae modi maiores vitae perspiciatis eius! Lorem ipsum dolor sit amet."),i.a.createElement("button",null,i.a.createElement("p",null,"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435..."))))),i.a.createElement("div",{class:"carousel-item post"},i.a.createElement("div",{class:"post_img"},i.a.createElement("img",{src:"media\\img\\top_news\\149959687159620847f228d4.34486523.jpg"})),i.a.createElement("div",{class:"post_display"},i.a.createElement("div",{class:"post_display_title"},i.a.createElement("p",null,"Lorem \u0438\u043b\u0438 Ipsum?")),i.a.createElement("div",{class:"post_display_tag"},i.a.createElement("p",null,"#world\ud83c\udf0d")),i.a.createElement("div",{class:"post_display_short_text"},i.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi autem laborum ducimus accusantium vel numquam cumque eum esse quos impedit, minima deleniti nam animi debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae modi maiores vitae perspiciatis eius! Lorem ipsum dolor sit amet."),i.a.createElement("button",null,i.a.createElement("p",null,"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435..."))))),i.a.createElement("div",{class:"carousel-item post"},i.a.createElement("div",{class:"post_img"},i.a.createElement("img",{src:"media\\img\\top_news\\1516121172182195986.jpg"})),i.a.createElement("div",{class:"post_display"},i.a.createElement("div",{class:"post_display_title"},i.a.createElement("p",null,"\u041a\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u044f\u0442 \u0443\u043b\u0438\u0446\u044b \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u0440\u0430\u043d\u0442\u0438\u043d\u0430?")),i.a.createElement("div",{class:"post_display_tag"},i.a.createElement("p",null,"#world\ud83c\udf0d")),i.a.createElement("div",{class:"post_display_short_text"},i.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi autem laborum ducimus accusantium vel numquam cumque eum esse quos impedit, minima deleniti nam animi debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae modi maiores vitae perspiciatis eius! Lorem ipsum dolor sit amet."),i.a.createElement("button",null,i.a.createElement("p",null,"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435...")))))),i.a.createElement("a",{class:"carousel-control-prev self_style_button self_style_button_left",href:"#carouselExampleControls",role:"button","data-slide":"prev"},i.a.createElement("span",{class:"carousel_contol_self","aria-hidden":"true"},"<"),i.a.createElement("span",{class:"sr-only"},"Previous")),i.a.createElement("a",{class:"carousel-control-next self_style_button self_style_button_right",href:"#carouselExampleControls",role:"button","data-slide":"next"},i.a.createElement("span",{class:"carousel_contol_self","aria-hidden":"true"},">"),i.a.createElement("span",{class:"sr-only"},"Next"))))))}}]),t}(i.a.Component)),g=(a(19),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"news"},i.a.createElement("div",{id:"title_news_block"},i.a.createElement("p",{id:"title_news"},"NEWS \ud83d\udcf0")),i.a.createElement("div",{id:"news_block",className:"container-fluid"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing."))),i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing."))),i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing.")))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing."))),i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing."))),i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing.")))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing."))),i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing."))),i.a.createElement("div",{class:"article"},i.a.createElement("div",{class:"article_tag"},i.a.createElement("p",null,"#world")),i.a.createElement("div",{class:"article_img"},i.a.createElement("img",{src:"./sadas.jpg",alt:""})),i.a.createElement("div",{class:"article_display"},i.a.createElement("p",null,"by Lorem Ipsum"),i.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing."))))),i.a.createElement("div",{id:"button_block"},i.a.createElement("button",null,"\u0427\u0438\u0442\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435")))}}]),t}(i.a.Component)),w=(a(20),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleScroll=function(e){var t=v()("#footer"),s=v()("#height");a.state.height=parseInt(t.css("height")),a.state.all_height=parseInt(s.css("height")),a.state.all_height-window.scrollY-window.innerHeight>=a.state.height?t.css("bottom","-"+a.state.height+"px"):a.state.all_height-window.scrollY-window.innerHeight<a.state.height&&t.css("bottom","0")},a.state={pos_y:0,height:0,all_height:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return i.a.createElement("div",{id:"footer"},i.a.createElement("div",{id:"wrapper"},i.a.createElement("footer",null,i.a.createElement("div",{id:"site_title"},i.a.createElement("p",null,"LeVans \xa9 2020"),i.a.createElement("hr",null)),i.a.createElement("div",{id:"web_links"},i.a.createElement("div",{class:"web_link"},i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"media\\img\\footer\\vk.png",alt:""}))),i.a.createElement("div",{class:"web_link"},i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"media\\img\\footer\\telegram.png",alt:""}))),i.a.createElement("div",{class:"web_link"},i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"media\\img\\footer\\reddi.png",alt:""}))),i.a.createElement("div",{class:"web_link"},i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:"media\\img\\footer\\facebook.png",alt:""})))))))}}]),t}(i.a.Component));var _=function(){return i.a.createElement("div",{id:"wrapper"},i.a.createElement(h,null),i.a.createElement(E,null),i.a.createElement(g,null),i.a.createElement(w,null))};n.a.render(i.a.createElement((function(){return i.a.createElement("div",{id:"page"},i.a.createElement(_,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a68fe7c4.chunk.js.map