function getMeImg(a){var t=[a,a,!1];return void 0!==a?-1!==a.url.indexOf("img.youtube")?(t[0]=a.url.replace("default.jpg","hqdefault.jpg"),t[1]=a.url.replace("default.jpg","mqdefault.jpg"),t[2]=!0):(t[0]=a.url.replace("s72-c","w100-h75-c"),t[1]=a.url.replace("s72-c","s500-c")):(t[0]="https://4.bp.blogspot.com/-THLip_5EXck/V4zK2o3lA6I/AAAAAAAAJfg/RG-Qo6D73z0zLAigWBEdfnFveop1IIa5gCLcB/s1600/thumb.png",t[1]="https://4.bp.blogspot.com/-THLip_5EXck/V4zK2o3lA6I/AAAAAAAAJfg/RG-Qo6D73z0zLAigWBEdfnFveop1IIa5gCLcB/s1600/thumb.png"),t}function load_w_tab(a){var t=a.find(".rctab-content>.active"),e=t.attr("data-load");$.ajax({type:"GET",url:"/feeds/posts/summary/-/"+e+"?max-results=12&alt=json-in-script",async:!1,contentType:"application/json",dataType:"jsonp",success:function(a){if(a.feed.entry){t.append('<div class="wtab-inner"></div>');for(var e=0;e<a.feed.entry.length;e++){for(var i=a.feed.entry[e],d=0;d<a.feed.entry[e].link.length;d++)if("alternate"==a.feed.entry[e].link[d].rel){var s=a.feed.entry[e].link[d].href;break}var n=i.title.$t,l=getMeImg(i.media$thumbnail),r='<div class="rctab-item"><div class="rctab-item-inner"><a href="'+s+'"><img src="'+l[0]+'"/></a><h3><a href="'+s+'">'+n+'</a></h3><div style="clear:both"></div></div></div>';t.find(".wtab-inner").append(r)}t.addClass("hide-load")}}})}function getwtabs(e){for(var labelArr=eval(e.attr("data-label")),html='<div class="rctab-button">',i=0;i<labelArr.length;i++)html+='<span data-target="'+labelArr[i]+'-genova">'+labelArr[i]+"</span>";html+='</div><div class="rctab-content">';for(var i=0;i<labelArr.length;i++)html+='<div data-load="'+labelArr[i]+'" data-container="'+labelArr[i]+'-genova">'+loaderHTML+"</div>";html+="</div>",e.append(html),e.find(".rctab-button>span").first().addClass("active"),e.find(".rctab-content>div").hide(0),e.find(".rctab-content>div").first().show(0).addClass("active loaded"),setTimeout(function(){load_w_tab(e)},500),e.find(".rctab-button>span").click(function(){var a=$(this).attr("data-target"),t=$(this),i="";e.find(".rctab-content>div").each(function(){$(this).attr("data-container")==a&&(e.find(".rctab-button>span").removeClass("active"),t.addClass("active"),e.find(".rctab-content>div").removeClass("active").hide(0),$(this).fadeIn().addClass("active"),i=$(this))}),i.hasClass("loaded")||(i.addClass("loaded"),setTimeout(function(){load_w_tab(e)},500))})}var loaderHTML='<div class="loader"> <div class="squarin" ></div> <div class="squarin"></div> <div class="squarin last"></div> <div class="squarin clear"></div> <div class="squarin"></div> <div class="squarin last"></div> <div class="squarin clear"></div> <div class="squarin "></div> <div class="squarin last"></div> </div>';$(function(){getwtabs($(".recent-labpost"))});
//tab2
function getMeImg(a){var t=[a,a,!1];return void 0!==a?-1!==a.url.indexOf("img.youtube")?(t[0]=a.url.replace("default.jpg","hqdefault.jpg"),t[1]=a.url.replace("default.jpg","mqdefault.jpg"),t[2]=!0):(t[0]=a.url.replace("s72-c","w100-h75-c"),t[1]=a.url.replace("s72-c","s500-c")):(t[0]="https://4.bp.blogspot.com/-THLip_5EXck/V4zK2o3lA6I/AAAAAAAAJfg/RG-Qo6D73z0zLAigWBEdfnFveop1IIa5gCLcB/s1600/thumb.png",t[1]="https://4.bp.blogspot.com/-THLip_5EXck/V4zK2o3lA6I/AAAAAAAAJfg/RG-Qo6D73z0zLAigWBEdfnFveop1IIa5gCLcB/s1600/thumb.png"),t}function getauthor(a){for(var t=0;t<a.length;t++)var e="<span class='author'>&#xf007; "+a[t].name.$t+"</span>";return e}function getmeta(a){var t=[];t[1]="Jan",t[2]="Feb",t[3]="Mar",t[4]="Apr",t[5]="May",t[6]="Jun",t[7]="Jul",t[8]="Aug",t[9]="Sep",t[10]="Oct",t[11]="Nov",t[12]="Dec";var e=a.substring(0,4),s=a.substring(5,7),n=a.substring(8,10),i="<span class='date'>&#xf017; "+t[parseInt(s,10)]+" "+n+" "+e+"</span>";return i}function t(a){var a,t,e=[];for(t=0;a>t;t++)e.push(t);return shuffle(e)}function getmashrandom(a){var e="/feeds/posts/summary/?max-results=500&alt=json-in-script",s=a.find("div.tab-mash-random");s.find("span#tab-mash-random").addClass("loaded"),s.append('<ul class="random-inner"></ul>'),$.ajax({type:"GET",url:e,async:!0,contentType:"application/json",dataType:"jsonp",success:function(a){s.addClass("hide-load");for(var e=a.feed.entry,n=e.length,i=t(n),r=0;5>r;r++){for(var d=0;d<a.feed.entry[i[r]].link.length;d++)if("alternate"==e[i[r]].link[d].rel){var l=a.feed.entry[i[r]].link[d].href;break}var c=getMeImg(e[i[r]].media$thumbnail),o=e[i[r]].title.$t,u=e[i[r]].published.$t,h=getmeta(u),f=getauthor(e[i[r]].author),m='<li><a href="'+l+'"><img  class="toLoad" src="'+c[0]+'"/></a><div class="recent-list-c"><h3><a href="'+l+'">'+o+'</a></h3><div class="meta">'+f+" "+h+"</div></div></li>";s.find("ul").append(m)}}})}function getmashrecent(a){a.find("span#tab-mash-recent").addClass("loaded"),$.ajax({type:"GET",url:"/feeds/posts/summary?max-results=12&alt=json-in-script",async:!1,contentType:"application/json",dataType:"jsonp",success:function(t){if(t.feed.entry){a.find("div.tab-mash-recent").append('<ul class="recent-post-list"></ul>');for(var e=0;e<t.feed.entry.length;e++){for(var s=t.feed.entry[e],n=0;n<t.feed.entry[e].link.length;n++)if("alternate"==t.feed.entry[e].link[n].rel){var i=t.feed.entry[e].link[n].href;break}var r=s.title.$t,d=getmeta(s.published.$t),l=getauthor(s.author),c=getMeImg(s.media$thumbnail),o="<li class='recent-post-item'><a href='"+i+"'><img src='"+c[0]+"'/></a><div class='recent-list-content'><h3><a href='"+i+"'>"+r+"</a></h3><div class='recent-list-meta'>"+d+l+"</div></div></li>";a.find("div.tab-mash-recent ul").append(o)}}}})}var loaderHTML='<div class="loader"> <div class="squarin" ></div> <div class="squarin"></div> <div class="squarin last"></div> <div class="squarin clear"></div> <div class="squarin"></div> <div class="squarin last"></div> <div class="squarin clear"></div> <div class="squarin "></div> <div class="squarin last"></div> </div>';shuffle=function(a){for(var t,e,s=a.length;s;t=parseInt(Math.random()*s),e=a[--s],a[s]=a[t],a[t]=e);return a},$(function(){$(".thetabs").each(function(){var a=$(this);a.append("<div class='tab-mash-outer'><div class='tab-mash-button'><span class='active' id='tab-mash-recent'><i class='fa fa-rss'></i> Recent</span><span id='tab-mash-random'><i class='fa fa-random'></i> Random</span></div><div class='tab-mash-content'><div class='tab-mash-recent min-height-need'></div><div class='tab-mash-random min-height-need' style='display:none;'>"+loaderHTML+"</div></div></div>"),getmashrecent(a),a.find(".tab-mash-button>span").click(function(){var t=$(this),e=a.find(".tab-mash-content>div");e.each(function(){$(this).hasClass(t.attr("id"))?($(this).fadeIn(),a.find(".tab-mash-button>span").removeClass("active"),t.addClass("active"),t.hasClass("loaded")||("tab-mash-random"==t.attr("id")?(t.addClass("loaded"),setTimeout(function(){getmashrandom(a)},500)):"tab-mash-comment"==t.attr("id")&&(t.addClass("loaded"),setTimeout(function(){getmashcomment(a)},2e3)))):$(this).hide(0)})})})});
//artikel terkait
var ry='';rcomment='comments';rdisable='disable comments';commentYN='yes';
                            var dw='';titles=new Array();titlesNum=0;urls=new Array();timeR=new Array();thumb=new Array();commentsNum=new Array();comments=new Array();function related_results_labels(c){for(var b=0;b<c.feed.entry.length;b++){var d=c.feed.entry[b];titles[titlesNum]=d.title.$t;for(var a=0;a<d.link.length;a++){if('thr$total' in d){commentsNum[titlesNum]=d.thr$total.$t+' '+rcomment}else{commentsNum[titlesNum]=rdisable};if(d.link[a].rel=="alternate"){urls[titlesNum]=d.link[a].href;timeR[titlesNum]=d.published.$t;if('media$thumbnail' in d){thumb[titlesNum]=d.media$thumbnail.url}else{thumb[titlesNum]='http://1.bp.blogspot.com/-pmznJmXBJ7M/UfWrTRltmLI/AAAAAAAAFg8/8VCw4AcPMyc/s1600/no+image.jpg'};titlesNum++;break}}}}function removeRelatedDuplicates(){var b=new Array(0);c=new Array(0);e=new Array(0);f=new Array(0);g=new Array(0);for(var a=0;a<urls.length;a++){if(!contains(b,urls[a])){b.length+=1;b[b.length-1]=urls[a];c.length+=1;c[c.length-1]=titles[a];e.length+=1;e[e.length-1]=timeR[a];f.length+=1;f[f.length-1]=thumb[a];g.length+=1;g[g.length-1]=commentsNum[a]}}urls=b;titles=c;timeR=e;thumb=f;commentsNum=g}function contains(b,d){for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false}function printRelatedLabels(a){var y=a.indexOf('?m=0');if(y!=-1){a=a.replace(/\?m=0/g,'')}for(var b=0;b<urls.length;b++){if(urls[b]==a){urls.splice(b,1);titles.splice(b,1);timeR.splice(b,1);thumb.splice(b,1);commentsNum.splice(b,1)}}var c=Math.floor((titles.length-1)*Math.random());var b=0;if(titles.length==0){dw+=rn}else{dw+=ry;dw+='<ul>';while(b<titles.length&&b<20&&b<maxresults){if(y!=-1){urls[c]=urls[c]+'?m=0'}if(commentYN=='yes'){comments[c]=' - '+commentsNum[c]}else{comments[c]=''};dw+='<li><div class="pthumb"><a href="'+urls[c]+'" rel="nofollow"><img alt="'+titles[c]+'" src="'+ thumb[c].replace("/s72-c/","/s200/")+'" title="'+titles[c]+'"/></a></div><a href="'+urls[c]+'" title="'+titles[c]+'" rel="nofollow">'+titles[c]+'</a><div class="clear"></div></li></div>';if(c<titles.length-1){c++}else{c=0}b++}dw+='</ul>'};urls.splice(0,urls.length);titles.splice(0,titles.length);document.getElementById('artikel-terkait-fhd').innerHTML=dw};
