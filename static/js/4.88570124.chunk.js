(this.webpackJsonpwebclubwebsite=this.webpackJsonpwebclubwebsite||[]).push([[4],{396:function(e,t,a){},441:function(e,t,a){e.exports=a.p+"static/media/blog_img.b7662fd9.png"},442:function(e,t,a){e.exports=a.p+"static/media/google-logo.648fa9fa.svg"},463:function(e,t,a){},572:function(e,t,a){},573:function(e,t,a){e.exports=a.p+"static/media/devices.a72bdbd2.svg"},578:function(e,t,a){"use strict";a.r(t);var n=a(12),s=a.n(n),r=a(21),o=a(10),l=a(26),i=a(27),c=a(28),u=a(0),d=a.n(u),h=a(37),p=a(34),g=(a(112),a(396),a(441)),m=a.n(g),b=a(442),f=a.n(b),v=a(23),x=a(42),w=a.n(x),E=a(24),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).componentDidMount=function(){a.htmlContent.current.innerHTML=a.props.sample_text;var e=0,t=a.props.tagList.map((function(t){return d.a.createElement("li",{className:"list-inline-item",key:e++,style:{background:a.props.color}},t)})),n=a.props.heading;n=(n=n.replace(/\s+/g," ")).replace(/\s/g,"-"),a.headingFirstChar.current.innerHTML=n[0],a.setState({tagList:t,heading:n})},a.htmlContent=d.a.createRef(),a.headingFirstChar=d.a.createRef(),a.state={tagList:[],heading:""},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(E.b,{to:"/blog/"+this.state.heading+"?id="+this.props.blogsid,className:"col-12",style:{textDecoration:"none"}},d.a.createElement("div",{className:"col-12 m-0"},d.a.createElement("div",{className:"blog-card my-2"},d.a.createElement("div",{className:"meta"},d.a.createElement("div",{className:"photo",style:{background:this.props.color}},d.a.createElement("span",{ref:this.headingFirstChar})),d.a.createElement("ul",{className:"details"},d.a.createElement("li",{className:"author py-3"},this.props.writer),d.a.createElement("li",{className:"date"},this.props.date))),d.a.createElement("div",{className:"description text-dark "},d.a.createElement("h1",{className:"py-3"},this.props.heading),d.a.createElement("p",{ref:this.htmlContent,className:"py-1"}," "),d.a.createElement("ul",{className:"tags list-inline pt-2"},this.state.tagList))))))}}]),t}(u.Component),y=a(32),N=a.n(y),S=a(405),C=a.n(S),j=a(459),I=a.n(j),O=a(462),B=a.n(O),_=(a(463),a(464),a(465),new(function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"show",value:function(e,t){var a=new B.a({text:e,layout:"topRight",theme:"bootstrap-v4",type:1===t?"success":"error"}).show();setTimeout((function(){a.close()}),8e3)}}]),e}()));C.a.defaults.xsrfHeaderName="X-CSRFTOKEN",C.a.defaults.xsrfCookieName="XCSRF-TOKEN";var L=new(function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"postBlog",value:function(e,t,a){var n,r,o,l,i,c,u;return s.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(n=new I.a(t),void 0!==(r=n.find("h1"))){d.next=7;break}if(void 0!==(r=n.find("h2"))){d.next=7;break}return _.show("Please enclose heading in h1 or h2 tag",2),d.abrupt("return");case 7:if(void 0!==(o=n.find("p"))){d.next=11;break}return _.show("Could not find sample text first paragraph will be taken as sample text",2),d.abrupt("return");case 11:return d.next=13,s.a.awrap(o.extract());case 13:return d.next=15,s.a.awrap(r.extract());case 15:if(t=n.prettify(),o=o.text,r=r.text,l=[],t=t.replace(/#[a-zA-Z_-]+/g,(function(e){return l.push(e.substr(1)),""})),0!==l.length){d.next=23;break}return _.show("Please include some topic tag i.e #Programming #ML #DSA",2),d.abrupt("return");case 23:return d.next=25,s.a.awrap(localStorage.getItem("token"));case 25:if(i=d.sent,c={content:t,heading:r,sample_text:o,tag_list:l,blogId:a,token:i},u=void 0,_.show("Wait while your blog get posted",1),-1!==c.blogId){d.next=34;break}return d.next=32,s.a.awrap(C.a.post(e,c).then((function(e){200===e.status&&(console.log(e),_.show(e.data.msg,1),u={id:e.data.id,heading:r})})).catch((function(e){void 0!==e.response&&401===e.response.status?_.show(e.response.data,2):void 0!==e.response&&403===e.response.status?_.show(e.response.data,2):_.show("Oops Something Went Wrong",2)})));case 32:d.next=36;break;case 34:return d.next=36,s.a.awrap(C.a.put(e,c).then((function(e){200===e.status&&(console.log(e),_.show(e.data.msg,1),u={id:e.data.id,heading:r})})).catch((function(e){void 0!==e.response&&401===e.response.status?_.show(e.response.data,2):void 0!==e.response&&403===e.response.status?_.show(e.response.data,2):_.show("Oops Something Went Wrong",2)})));case 36:return d.abrupt("return",u);case 37:case"end":return d.stop()}}))}},{key:"loadBlogWithId",value:function(e){var t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch("/getblogs/"+e));case 2:return t=a.sent,a.next=5,s.a.awrap(t.json());case 5:return t=a.sent,a.abrupt("return",t);case 7:case"end":return a.stop()}}))}},{key:"loadBlogs",value:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(fetch("/getblogs"));case 2:return e=t.sent,t.next=5,s.a.awrap(e.json());case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}))}},{key:"deleteBlog",value:function(e){var t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=!1,a.t0=s.a,a.t1=C.a,a.t2="/deleteblog",a.t3=e,a.next=7,s.a.awrap(localStorage.getItem("token"));case 7:return a.t4=a.sent,a.t5={id:a.t3,token:a.t4},a.t6={data:a.t5},a.t7=function(e){200===e.status&&(_.show(e.data,1),t=!0)},a.t8=function(e){console.log(e),void 0===e.response||403!==e.response.status&&401!==e.response.status?_.show("Oops Something Went Wrong",2):_.show(e.response.data,2),t=!0},a.t9=a.t1.delete.call(a.t1,a.t2,a.t6).then(a.t7).catch(a.t8),a.next=15,a.t0.awrap.call(a.t0,a.t9);case 15:return a.abrupt("return",t);case 16:case"end":return a.stop()}}))}}]),e}()),T=a(466),F=a.n(T),R=a(467),P=a.n(R),W=new(function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e){var t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=!1,a.next=3,s.a.awrap(C.a.post("/googlelogin",{token:e.token}).then((function(a){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:200===a.status&&(localStorage.setItem("token",e.token),localStorage.setItem("user_email",a.data),t=!0,_.show("Logged In Successfully For Next 1 Hour",1));case 1:case"end":return n.stop()}}))})).catch((function(e){localStorage.removeItem("token"),localStorage.removeItem("user_email"),void 0!==e.response&&401===e.response.status?_.show("Invalid Login Credentials",2):void 0!==e.response&&403===e.response.status?_.show("You Are Not Unauthorized To Write Blogs",2):_.show("Oops Something Went Wrong",2)})));case 3:return a.abrupt("return",t);case 4:case"end":return a.stop()}}))}},{key:"validateToken",value:function(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=!1,a.next=3,s.a.awrap(localStorage.getItem("token"));case 3:if(null!==(t=a.sent)&&void 0!==t){a.next=8;break}return a.abrupt("return",!1);case 8:return a.next=10,s.a.awrap(C.a.post("/googlelogin",{token:t}).then((function(t){200===t.status&&(e=!0,localStorage.setItem("user_email",t.data))})).catch((function(){})));case 10:return a.abrupt("return",e);case 11:case"end":return a.stop()}}))}}]),e}()),H=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).showSearchContainer=function(){a.searchResultContainer.current.style.display="block",a.searchForm.current.style.borderRadius="10px 10px 0 0"},a.hideSearchContainer=function(){a.searchResultContainer.current.style.display="none",a.searchForm.current.style.borderRadius="24px"},a.responseGoogle=function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={token:e.tokenId},n.next=3,s.a.awrap(W.login(t));case 3:!0===n.sent?(a.props.login(),a.setState({redirectToEditor:!0})):a.props.logout();case 5:case"end":return n.stop()}}))},a.handlePageClick=function(e){a.setState({currentPage:e.selected+1})},a.searchResultContainer=d.a.createRef(),a.searchForm=d.a.createRef(),a.searchInput=d.a.createRef(),a.activePageLink=d.a.createRef(),a.state={allBlogs:[],searchResult:[],loaderStatus:!0,blogsPerPage:10,currentPage:1,redirectToEditor:0},a.searchBlogs=a.searchBlogs.bind(Object(p.a)(a)),a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=0,t=["#6b0504","#a3320b","#2e5339","#e55381","#1c5d99","#3f4045","#9a4c95","#26532b","#51344d","#58641d"],o.next=4,s.a.awrap(L.loadBlogs());case 4:a=o.sent,n=a.blogs,r=n.map((function(a){var n=a.tags;return a=a.blog,d.a.createElement(k,{key:a.id,color:t[e++%10],blogsid:a.id,tagList:n,heading:a.heading,date:a.date,writer:a.user_name,sample_text:a.sample_text})})),this.setState({allBlogs:r,loaderStatus:!1});case 8:case"end":return o.stop()}}),null,this)}},{key:"searchBlogs",value:function(e){var t,a,n,r,o,l,i,c,u;return s.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:e.preventDefault(),t=this.searchInput.current.value,a=this.state.allBlogs,n=0,r=t.length,o=0;case 6:if(!(o<a.length)){s.next=21;break}l=a[o].props.tagList,i=0,c=0;case 10:if(!(c<l.length)){s.next=17;break}if(l[c].substr(0,r)!==t){s.next=14;break}return i=1,s.abrupt("break",17);case 14:c++,s.next=10;break;case 17:1===i&&(u=a[n],a[n]=a[o],a[o]=u,n++);case 18:o++,s.next=6;break;case 21:this.setState({allBlogs:a},(function(){}));case 22:case"end":return s.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.blogsPerPage,a=e.loaderStatus,n=e.allBlogs,s=e.currentPage,r=e.redirectToEditor,o=null;o=a?d.a.createElement(w.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100}):null;var l=s*t,i=l-t,c=n.slice(i,l),u=n.length/t;return d.a.createElement("div",null,d.a.createElement(N.a,null,d.a.createElement("title",null,"Blogs")),d.a.createElement("div",null,r&&d.a.createElement(h.a,{to:"/blog/editor"}),d.a.createElement("div",null,d.a.createElement(v.a,{sticky:"false",transp:"false"}),d.a.createElement("div",{className:"main-image center-flex",style:{background:"white"}},d.a.createElement("div",{className:"title-container px-4",style:{width:"100%"}},d.a.createElement("h1",{className:"main-title-blogs"},"Write an",d.a.createElement("br",null),"Inspiring",d.a.createElement("br",null),"Blog"),d.a.createElement(F.a,{clientId:"450857265760-h4n07vma47ofqrna2ktclm5rvgg3f24l.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,render:function(e){return d.a.createElement("button",{className:"my-btn d-flex flex-row",onClick:e.onClick,disabled:e.disabled},d.a.createElement("img",{style:{width:"30px"},alt:"google logo",src:f.a}),d.a.createElement("span",{style:{paddingTop:"4px"}},"Write Blog"))},cookiePolicy:"single_host_origin"})),d.a.createElement("img",{className:"bg-image",width:"700",src:m.a,alt:"background"})),d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 p-0 m-0"},d.a.createElement("form",{action:"#",id:"subject_search_form",ref:this.searchForm},d.a.createElement("input",{type:"search",name:"search",ref:this.searchInput,autoComplete:"off",id:"subject_search_input",placeholder:"Search topic tag",onFocus:this.showSearchContainer,onBlur:this.hideSearchContainer,onKeyUp:this.searchBlogs}),d.a.createElement("button",{type:"submit",onClick:this.searchBlogs,className:"pl-3"},d.a.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",id:"search_icon"},d.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))),d.a.createElement("div",{className:"search_result_container",ref:this.searchResultContainer},this.state.searchResult))),d.a.createElement("div",{className:"col-12 text-center"},o),c,d.a.createElement("div",{className:"col-12 pt-2 d-flex justify-content-center "},d.a.createElement(P.a,{pageCount:u,onPageChange:this.handlePageClick,breakClassName:"page-item",pageRangeDisplayed:5,marginPagesDisplayed:5,breakLinkClassName:"page-link",containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"})))))))}}]),t}(d.a.Component),D=(a(414),a(415)),M=a.n(D),z=a(574),q=a(576),A=a(575),G=a(577),K=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).deleteBlog=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.state.blogId,!window.confirm("Delete Blog ?")){t.next=6;break}return t.next=4,s.a.awrap(L.deleteBlog(e));case 4:!0===t.sent&&a.setState({redirectstatus:!0});case 6:case"end":return t.stop()}}))},a.htmlContent=d.a.createRef(),a.htmlHeading=d.a.createRef(),a.htmlSampleText=d.a.createRef(),a.editblogdiv=d.a.createRef(),a.state={content:"",loaderStatus:!0,blogId:null,tagList_:[],editBlogStatus:!1,pagenotfound:!1,redirectstatus:!1},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,r,o;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(void 0!==(e=M.a.parse(this.props.location.search).id)){l.next=4;break}return this.setState({pagenotfound:!0}),l.abrupt("return");case 4:return l.next=6,s.a.awrap(L.loadBlogWithId(e));case 6:if(0!==(t=l.sent)){l.next=11;break}this.setState({pagenotfound:!0}),l.next=25;break;case 11:for(this.setState({blogId:e}),a=d.a.createElement("div",{className:"container-fluid bg-light pb-5 ql-snow ",style:{paddingTop:"60px",minHeight:"500px"}},d.a.createElement("div",{style:{maxWidth:"1000px"},className:"mx-auto ql-editor"},d.a.createElement("p",{className:"blog-heading pt-5",ref:this.htmlHeading}),d.a.createElement("p",{className:"posted-on"},"Posted on: ",t.date," by-",d.a.createElement("span",null,t.writer)),d.a.createElement("p",{className:"pb-2"},d.a.createElement("b",null,"Introduction")),d.a.createElement("p",{ref:this.htmlSampleText}),d.a.createElement("p",{className:"blog-content  text-justify",ref:this.htmlContent}))),n=[],r=0,o=0;o<t.tag_list.length;o++)n.push(d.a.createElement("li",{className:"list-inline-item",key:r++,style:{background:"#1490e4",padding:"5px 10px",borderRadius:"4px",color:"white"}},t.tag_list[o]));return this.setState({content:a,loaderStatus:!1,tagList_:n}),this.htmlContent.current.innerHTML=t.content,this.htmlHeading.current.innerHTML=t.heading,this.htmlSampleText.current.innerHTML=t.sample_text,this.editblogdiv.current.style.display="block",l.next=23,s.a.awrap(localStorage.getItem("user_email"));case 23:l.sent===t.user_email&&this.setState({editBlogStatus:!0});case 25:case"end":return l.stop()}}),null,this)}},{key:"render",value:function(){var e=null;return e=this.state.loaderStatus?d.a.createElement("div",{className:"pt-5 text-center mt-5"},d.a.createElement(w.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100})):null,d.a.createElement(d.a.Fragment,null,this.state.pagenotfound&&d.a.createElement(h.a,{to:"/pagenotfound"}),this.state.redirectstatus&&d.a.createElement(h.a,{to:"/blog"}),d.a.createElement(N.a,null,d.a.createElement("title",null,"Blog")),d.a.createElement(v.a,{sticky:"false",transp:"false"}),d.a.createElement("div",{className:"position-fixed  share-icon"},d.a.createElement(z.a,{url:window.location.href},d.a.createElement(A.a,{size:32,round:!0})),d.a.createElement("br",null),d.a.createElement(q.a,{url:window.location.href},d.a.createElement(G.a,{size:32,round:!0}))),e,this.state.content,d.a.createElement("div",{className:"bg-light",style:{display:"none"},ref:this.editblogdiv},d.a.createElement("div",{style:{maxWidth:"1000px"},className:"mx-auto py-3"},d.a.createElement("ul",{className:"tags list-inline"},this.state.tagList_),this.state.editBlogStatus&&[d.a.createElement(E.b,{to:"/blog/editor/editblog?id="+this.state.blogId,key:"1",className:"btn btn-outline-secondary mr-3"},d.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"}),"Edit"),d.a.createElement("span",{onClick:this.deleteBlog,className:"btn btn-outline-secondary",key:"2"},d.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"}),"Delete")])))}}]),t}(u.Component),U=a(90),V=a(470),J=a.n(V),X=(a(572),a(113),a(573)),Y=a.n(X),Z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).alertUser=function(e){console.log(e),e.preventDefault(),e.returnValue=""},a.publishButton=d.a.createRef(),a.state={editorHtml:"",theme:"snow",blgoId:-1,redirectStatus:0,pageNotFound:!1,header:"new-blog"},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.postBlog=a.postBlog.bind(Object(p.a)(a)),a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({editorHtml:e})}},{key:"componentDidMount",value:function(){var e,t,a,n,r,o;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,s.a.awrap(M.a.parse(this.props.location.search).id);case 2:if(void 0===(e=l.sent)){l.next=10;break}return this.setState({blgoId:e}),_.show("Loading your blog in the editor",1),l.next=8,s.a.awrap(L.loadBlogWithId(e));case 8:if(0===(t=l.sent))this.setState({pageNotFound:!0});else{for(a=t.tag_list,n="",r=0;r<a.length;r++)n+="<span>#".concat(a[r],"</span>");o="<h1>".concat(t.heading,"</h1><p>").concat(t.sample_text,"</p><p>").concat(t.content,"</p><p>").concat(n,"</p>"),this.setState({editorHtml:o})}case 10:case"end":return l.stop()}}),null,this)}},{key:"postBlog",value:function(){var e,t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.state.editorHtml,this.publishButton.current.style.display="none",a.next=4,s.a.awrap(L.postBlog("/addblog",e,this.state.blgoId));case 4:void 0===(t=a.sent)?this.publishButton.current.style.display="block":this.setState({blgoId:t.id,heading:t.heading,redirectStatus:!0});case 6:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(v.a,{sticky:"true",transp:"false"}),!0===this.state.redirectStatus&&d.a.createElement(h.a,{to:"/blog/".concat(this.state.heading,"?id=").concat(this.state.blgoId)}),!0===this.state.pageNotFound&&d.a.createElement(h.a,{to:"/blog/pagenotfound"}),d.a.createElement("div",{className:"d-md-none py-5",id:"main_container"},d.a.createElement("img",{src:Y.a,style:{width:"100%"},alt:""}),d.a.createElement("p",{className:"text"},"This page only works in Desktop")),d.a.createElement("div",{className:"d-none d-md-block"},d.a.createElement(J.a,{className:"text_editor",theme:this.state.theme,onChange:this.handleChange,value:this.state.editorHtml,modules:t.modules,formats:t.formats,bounds:".app",placeholder:"Type here..."}),d.a.createElement("div",{style:{background:"white"},className:"p-2"},d.a.createElement("div",{style:{maxWidth:"800px"},className:"mx-auto"},d.a.createElement("button",{className:"my-btn border-0",ref:this.publishButton,onClick:this.postBlog},"Publish")))))}}]),t}(d.a.Component);Z.modules={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{color:["#000000","red","green","blue","pink","lightgrey","Tomato","MediumSeaGreen","Violet","SlateBlue"]}],["link","image"],[{handlers:{color:function(e){"custom-color"===e&&(e=window.prompt("Enter Hex Color Code")),this.quill.format("color",e)}}}]],clipboard:{matchVisual:!1}},Z.formats=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","color","link","image"];var Q=Z,$=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).componentDidMount=function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(W.validateToken());case 2:!0===e.sent&&a.setState({logedIn:!0});case 4:case"end":return e.stop()}}))},a.login=function(){a.setState({logedIn:!0})},a.logout=function(){a.setState({logedIn:!1})},a.path=Object(h.f)(),a.state={logedIn:!1},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return d.a.createElement(h.d,null,d.a.createElement(h.b,{exact:!0,path:"/blog"},d.a.createElement(H,Object.assign({isLogedIn:this.state.logedIn,login:this.login,logout:this.logout},this.props))),this.state.logedIn&&d.a.createElement(h.b,{exact:!0,path:"/blog/editor"},d.a.createElement(Q,Object.assign({isLogedIn:this.state.logedIn,login:this.login,logout:this.logout},this.props))),this.state.logedIn&&d.a.createElement(h.b,{exact:!0,path:"/blog/editor/editblog"},d.a.createElement(Q,Object.assign({isLogedIn:this.state.logedIn,login:this.login,logout:this.logout},this.props))),d.a.createElement(h.b,{exact:!0,path:"/blog/:slug",component:K}),d.a.createElement(h.b,{component:U.a}))}}]),t}(u.Component);t.default=$}}]);
//# sourceMappingURL=4.88570124.chunk.js.map