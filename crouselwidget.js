jQuery(document).ready(function() { 

 //Set Default State of each portfolio piece
 $(".paging").show();
 $(".paging a:first").addClass("active");

 //Get size of images, how many there are, then determin the size of the image reel.
 var imageWidth = $(".sompret").width();
 var imageSum = $(".image_reel img").size();
 var imageReelWidth = imageWidth * imageSum;
 
 //Adjust the image reel to its new size
 $(".image_reel").css({'width' : imageReelWidth});

 //Paging + Slider Function
 rotate = function(){ 
     var triggerID = $active.attr("rel") - 1; //Get number of times to slide
     var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide
 
     $(".paging a").removeClass('active'); //Remove all active class
     $active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)
    
  $(".crott").stop(true,true).slideUp('slow');
  
  $(".crott").eq( $('.paging a.active').attr("rel") - 1 ).slideDown("slow");
  
     //Slider Animation
     $(".image_reel").animate({
         left: -image_reelPosition
     }, 500 );
 
  
 };

 //Rotation + Timing Event
 rotateSwitch = function(){ 
 $(".crott").eq( $('.paging a.active').attr("rel") - 1 ).slideDown("slow"); 
     play = setInterval(function(){ //Set timer - this will repeat itself every 3 seconds
         $active = $('.paging a.active').next();
         if ( $active.length === 0) { //If paging reaches the end...
             $active = $('.paging a:first'); //go back to first
         }
         rotate(); //Trigger the paging and slider function
     }, 5000); //Timer speed in milliseconds (3 seconds) 
 
 };
 
 rotateSwitch(); //Run function on launch

 //On Click
    $(".paging a").click(function() {   
        $active = $(this); //Activate the clicked paging
        //Reset Timer
        clearInterval(play); //Stop the rotation
        rotate(); //Trigger rotation immediately
        rotateSwitch(); // Resume rotation
        return false; //Prevent browser jump to link anchor
    });   

});


imgr = new Array();
imgr[0] = "http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg";
showRandomImg = true;
aBold = true;
summaryPost1 = 80;
summaryTitle = 20;
numposts1 = 6;

function removeHtmlTag(strx,chop){
    var s = strx.split("<");
    for(var i=0;i<s.length;i++){
        if(s[i].indexOf(">")!=-1){
            s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
        }
    }
    s =  s.join("");
    s = s.substring(0,chop-1);
    return s;
}

function showrecentposts1(json) {
 j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
 img  = new Array();
    
   for (var i = 0; i < numposts1; i++) {
     var entry = json.feed.entry[i];
     var posttitle = entry.title.$t;
  var pcm;
     var posturl;
     if (i == json.feed.entry.length) break;
     for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
          posturl = entry.link[k].href;
          break;
        }
     }
  
  for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
          pcm = entry.link[k].title.split(" ")[0];
          break;
        }
     }
  
     if ("content" in entry) {
        var postcontent = entry.content.$t;}
     else
     if ("summary" in entry) {
        var postcontent = entry.summary.$t;}
     else var postcontent = "";
     
     postdate = entry.published.$t;
 
 if(j>imgr.length-1) j=0;
 img[i] = imgr[j];
 
 s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

 if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

 //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


 var month = [1,2,3,4,5,6,7,8,9,10,11,12];
 var month2 = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 var day = postdate.split("-")[2].substring(0,2);
 var m = postdate.split("-")[1];
 var y = postdate.split("-")[0];

 for(var u2=0;u2<month.length;u2++){
  if(parseInt(m)==month[u2]) {
   m = month2[u2] ; break;
  }
 }

 var daystr = m+ ' ' + day + ' ' + y ;
 
 var trtd = '<div class="crott"><a href="'+posturl+'">'+posttitle+'</a><p>'+removeHtmlTag(postcontent,summaryPost1)+'... </p></div>';     
  document.write(trtd);     
    
     j++;
 }
 
}

function showrecentposts2(json) {
 j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
 img  = new Array();
  
   for (var i = 0; i < numposts1 ; i++) {
     var entry = json.feed.entry[i];
     var posttitle = entry.title.$t;
  var pcm;
     var posturl;
     if (i == json.feed.entry.length) break;
     for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
          posturl = entry.link[k].href;
          break;
        }
     }
  
  for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
          pcm = entry.link[k].title.split(" ")[0];
          break;
        }
     }
  
     if ("content" in entry) {
        var postcontent = entry.content.$t;}
     else
     if ("summary" in entry) {
        var postcontent = entry.summary.$t;}
     else var postcontent = "";
     
     postdate = entry.published.$t;
 
 if(j>imgr.length-1) j=0;
 img[i] = imgr[j];
 
 s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

 if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

 //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


 var month = [1,2,3,4,5,6,7,8,9,10,11,12];
 var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

 var day = postdate.split("-")[2].substring(0,2);
 var m = postdate.split("-")[1];
 var y = postdate.split("-")[0];

 for(var u2=0;u2<month.length;u2++){
  if(parseInt(m)==month[u2]) {
   m = month2[u2] ; break;
  }
 }

 var daystr = day+ ' ' + m + ' ' + y ;
 
 var trtd = '<a href="'+posturl+'"><img src="'+img[i]+'"/></a>';
  document.write(trtd);     
    
     j++;
 }
 
}
