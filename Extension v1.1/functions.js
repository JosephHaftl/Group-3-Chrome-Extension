//code to avoid inline script
document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("checkSource").addEventListener("click", checkSource);
 });
 
 //check source function
 function checkSource() {
   chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;
     // alert(url);
      if(url.includes("fox") || url.includes("breitbart") || url.includes("dailymail") || url.includes("nationalreview") || url.includes("dailywire")|| url.includes("federalist")){
         document.getElementById("iconChange").src = "RightBias_128.png";
         document.getElementById("rightBias").style.display = "inline";
      }
      if(url.includes("abc") || url.includes("bloomberg") || url.includes("buzzfeed") || url.includes("cbs") || url.includes("cnn")|| url.includes("huff")){
         document.getElementById("iconChange").src = "LeftBias_128.png";
         document.getElementById("leftBias").style.display = "inline";
      }
      if(url.includes("associated") || url.includes("apnews") || url.includes("axios") || url.includes("bbc") || url.includes("forbes") || url.includes("npr")|| url.includes("thehill")){
         document.getElementById("iconChange").src = "Neutral_128.png";
         document.getElementById("neutral").style.display = "inline";
      }
  });
   //window.open("checkSource.html" , "_blank"); 
 }

  //code to avoid inline script
  document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("link").addEventListener("click", openLink);
 });

 //used to open hyperlinks without inline script
 function openLink(){
   window.open("https://www.allsides.com/media-bias/media-bias-ratings" , "_blank");
 }
 //code to avoid inline script
 document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("checkText").addEventListener("click", checkText);
 });
//script for check text button
function checkText(){
   document.getElementById("search").style.display = "inline";
}
 //code to avoid inline script
 document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("logIn").addEventListener("click", login);
 });
//script for login buttopn
 function login(){

 }
 


