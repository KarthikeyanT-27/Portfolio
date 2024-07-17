var poplay=document.querySelector(".overlay");
var proj=document.getElementById("proj");
var hproj=document.getElementById("projj");
var hidd=document.querySelector(".hiddenh");
var certi=document.querySelector(".certification");
var skills=document.querySelector(".skills");

hproj.addEventListener("click",function(){
    poplay.style.display="block";
    proj.style.display="block";
    hidd.style.display="block";
    hidd.textContent="Project section";
   

});

var poplay=document.querySelector(".overlay");
var proj=document.getElementById("proj");
var butt=document.querySelector(".butt");
var certi=document.querySelector(".certification");
var skills=document.querySelector(".skills");
butt.addEventListener("click",function(){
    poplay.style.display="none";
    proj.style.display="none";
    
   
});

var poplay=document.querySelector(".overlay");
var cont=document.getElementById("cont");
var contt=document.getElementById("contt");
var hidd=document.querySelector(".hiddenh");
var certi=document.querySelector(".certification");
var skills=document.querySelector(".skills");

contt.addEventListener("click",function(){
    poplay.style.display="block";
    cont.style.display="block";
    hidd.textContent="contact details";
    hidd.style.display="block"
   
    

});

var poplay=document.querySelector(".overlay");
var cont=document.getElementById("cont");
var certi=document.querySelector(".certification");
var skills=document.querySelector(".skills");
var butt=document.querySelector(".butt");
butt.addEventListener("click",function(){
    poplay.style.display="none";
    cont.style.display="none";
  
});
