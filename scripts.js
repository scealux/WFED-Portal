//Javascript
var projects = [
      'http://scealux.com/WEB_P_01/index.html',
      'http://scealux.com/project2/index2.html'
]
var labs = [
     'http://scealux.com/WEB_L_01.html',
     'http://scealux.com/WEB_L_02/debug_js.html',
     'http://scealux.com/WEB_L_03/index.html',
     'http://scealux.com/WEB_L_04/Lab4.html',
     'http://scealux.com/WEB_L_05/Lab5.html',
     'http://scealux.com/WEB_L_06/index.html'
]
var journals = [
     'https://affewd.wordpress.com/2017/09/07/first-blog-post/',
     'https://affewd.wordpress.com/2017/09/27/project-01-milestone-1/',
     'https://affewd.wordpress.com/2017/10/11/project-01-milestone-4/',
     'https://affewd.wordpress.com/2017/10/25/project-2-milestone-1/',
     'https://affewd.wordpress.com/2017/11/02/project-2-milestone2/',
     'https://affewd.wordpress.com/2017/11/16/project-2-milestone-4/',
     'https://affewd.wordpress.com/2017/11/29/project-3-milestone-1/'
]
var theFrame = $("#theFrame");
var isFrameOpen = false;
var transitioning = false;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

$("document").ready(function() {
     console.log(windowWidth +' '+ windowHeight)
     $( window ).resize(function() {
     });
     //PROJECTS
     $('#P01').bind("click", function(){
          changeIFrame(projects[0]);
     });
     $('#P02').bind("click", function(){
          changeIFrame(projects[1]);
     });
     //LABS
     $('#L01').bind("click", function(){
          changeIFrame(labs[0]);
     });
     $('#L02').bind("click", function(){
          changeIFrame(labs[1]);
     });
     $('#L03').bind("click", function(){
          changeIFrame(labs[2]);
     });
     $('#L04').bind("click", function(){
          changeIFrame(labs[3]);
     });
     $('#L05').bind("click", function(){
          changeIFrame(labs[4]);
     });
     $('#L06').bind("click", function(){
          changeIFrame(labs[5]);
     });
     //JOURNALS
     $('#J01').bind("click", function(){
          changeIFrame(journals[0]);
     });
     $('#J02').bind("click", function(){
          changeIFrame(journals[1]);
     });
     $('#J03').bind("click", function(){
          changeIFrame(journals[2]);
     });
     $('#J04').bind("click", function(){
          changeIFrame(journals[3]);
     });
     $('#J05').bind("click", function(){
          changeIFrame(journals[4]);
     });
     $('#J06').bind("click", function(){
          changeIFrame(journals[5]);
     });
     $('#J07').bind("click", function(){
          changeIFrame(journals[6]);
     });
     $('.tab').bind("mouseenter", function(){
          if(isFrameOpen){
               collapseFrame();
          }
     });
});

 function expandFrame(){
      if (!isFrameOpen && !transitioning){
           transitioning = true;
           //TODO: make frame collapse AND headers expand
           $( ".tab" ).animate({
                height: "6vh"
           }, 200, function() {
                console.log("Menu Retracted");// Animation complete.
         });
           $( "#contextMenu" ).animate({
                 height: "93vh"
           }, 200, function() {
                 console.log("Frame Collapsed");// Animation complete.
           });
    };
      isFrameOpen = true;
      transitioning = false;
};
function collapseFrame(){
     if (isFrameOpen && !transitioning){
          transitioning = true;
           //TODO: make frame collapse AND headers expand
           $( "#contextMenu" ).animate({
                height: "0vh"
           }, 300, function() {
                console.log("frameCollapsed");// Animation complete.
          });
          $( ".tab" ).animate({
               height: "100vh"
          }, 300, function() {
               console.log("menuExpanded");// Animation complete.
         });
    };
    changeIFrame( );
    isFrameOpen = false;
    transitioning = false;
};
function changeIFrame(url){
      console.log("Changing frame to: "+url);
      if (!isFrameOpen){
           expandFrame();
      };
      $("#theFrame").attr('src', url);
};
