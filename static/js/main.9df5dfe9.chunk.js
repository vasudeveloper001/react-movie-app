(this.webpackJsonpmovies_app=this.webpackJsonpmovies_app||[]).push([[0],{26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),i=a.n(n),r=a(19),c=a.n(r),o=a(3),d=a.n(o),l=a(8),u=a(4),p=a(5),v=a(7),h=a(6),b=(a(26),a(9)),j=a.n(b),m=(a(45),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.genres,n=e.background_poster,i=e.title,r=e.description,c=e.poster_path,o=e.release_date,d=e.vote_average,l=e.vote_count;return Object(s.jsxs)("div",{className:"movie_card",id:"bright",children:[Object(s.jsxs)("div",{className:"info_section",children:[Object(s.jsxs)("div",{className:"movie_header",children:[Object(s.jsx)("img",{className:"locandina",src:c,alt:i}),Object(s.jsx)("h1",{children:i}),Object(s.jsx)("h4",{children:o}),Object(s.jsxs)("span",{className:"minutes",children:["Rating: ",d]}),Object(s.jsxs)("span",{className:"minutes",children:["Vote Count: ",l]}),Object(s.jsx)("p",{className:"type",children:a.join(", ")})]}),Object(s.jsx)("div",{className:"movie_desc",children:Object(s.jsx)("p",{className:"text",children:r.slice(0,160)+"..."})}),Object(s.jsx)("div",{className:"read_more",children:Object(s.jsx)("a",{href:"https://www.themoviedb.org/movie/".concat(t,"/"),children:"Complete Info"})})]}),Object(s.jsx)("div",{className:"blur_back",style:{background:"url(".concat(n)}})]})}}]),a}(i.a.Component)),g=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,secure_base_url:null,poster_sizes:[],genre_list:[],movies:[]},e.getConfig=Object(l.a)(d.a.mark((function t(){var a,s,n,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/configuration?api_key=424009d07c87cce545a0b72550a8d48a",t.next=3,j.a.get("https://api.themoviedb.org/3/configuration?api_key=424009d07c87cce545a0b72550a8d48a");case 3:a=t.sent,s=a.data.images,n=s.secure_base_url,i=s.poster_sizes,e.setState({secure_base_url:n,poster_sizes:i});case 8:case"end":return t.stop()}}),t)}))),e.getGenreList=Object(l.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/genre/movie/list?api_key=424009d07c87cce545a0b72550a8d48a&language=en-US",t.next=3,j.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=424009d07c87cce545a0b72550a8d48a&language=en-US");case 3:a=t.sent,s=a.data.genres,e.setState({genre_list:s});case 6:case"end":return t.stop()}}),t)}))),e.getMovieList=Object(l.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/week?api_key=424009d07c87cce545a0b72550a8d48a",t.next=3,j.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=424009d07c87cce545a0b72550a8d48a");case 3:a=t.sent,s=a.data.results,e.setState({movies:s,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getConfig(),this.getGenreList(),this.getMovieList()}},{key:"listMovies",value:function(e){var t=this.state.genre_list,a=this.state.secure_base_url+"/w500";return Object(s.jsx)("div",{className:"movie_listings",children:e.map((function(e){var n=t.filter((function(t){return e.genre_ids.includes(t.id)?t:null})).map((function(e){return e.name}));return Object(s.jsx)(m,{id:e.id,genres:n,background_poster:a+e.backdrop_path,title:e.original_title,description:e.overview,poster_path:a+e.poster_path,release_date:e.release_date,vote_average:e.vote_average,vote_count:e.vote_count},e.id)}))})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsxs)("div",{className:"movies_list",children:[Object(s.jsx)("h1",{className:"header",children:"Weekly 20 Top Trender"}),t?"Loading...":this.listMovies(a)]})}}]),a}(i.a.Component);a(46);var _=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(g,{})})};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9df5dfe9.chunk.js.map