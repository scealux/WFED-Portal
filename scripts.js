//Javascript
var projects = [
      'http://scealux.com/WEB_P_01/index.html',
      'http://scealux.com/project2/index2.html'
]
var labs = [

]
var theFrame = $("#theFrame");
var isFrameOpen = false;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

$("document").ready(function() {
     console.log(windowWidth +' '+ windowHeight)
     $( window ).resize(function() {
     }
     $('#P01').bind("click", function(){
          changeIFrame(projects[0]);
     });
     $('#P02').bind("click", function(){
          changeIFrame(projects[1]);
     });
});

 function expandFrame(){
      //TODO: make frame expand AND headers shrink
      isFrameOpen = true;
};
function collapseFrame(){
      //TODO: make frame collapse AND headers expand

      isFrameOpen = false;
};
function changeIFrame(url){
      console.log("Changing frame to: "+url);
      if (!isFrameOpen){
           expandFrame();
      };
      $("#theFrame").attr('src', url);
};
