 // When the user scrolls the page, execute myFunction 
 window.onscroll = function() {
   myFunction();
   scrollFunction();
  };

 // Get the header
 var header = document.getElementById("header");
 
 // Get the offset position of the navbar
 var sticky = header.offsetTop;
 
 // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
 function myFunction() {
   if (window.pageYOffset >= sticky) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
 }


 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var i=false;
$(".form-inline .search i").click(function(){

  if(i){
    $(".form-inline .search i").removeClass("fa-times");
    $(".form-inline .form-control,.search-sub i").hide(500);
    i=false;
  }
  else{
    $(".form-inline .search i").addClass("fa-times");
    $(".form-inline .form-control,.search-sub i").show(500);
    i=true;
  }
  
})


////acordion on services page
var accr = new Accordion("#accordion_services");


