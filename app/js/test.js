$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

  });

// var here = document.getElementById('here');
// function myFunction(x){
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//         // destinos.style.backgroundColor = "yellow";
//         // destinos.className = destinos.className+"owl-carousel";
//         // here.style.display="none";
//         // here.className = " row owl-carousel";
//     } else {
//         // destinos.style.backgroundColor = "none";
//         // here.style.display="block";
//         // here.className = " row";
//         doc.body.style.backgroundColor = "yellow";
        
        
//     }
// }

// var x = window.matchMedia("(max-width: 576px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes