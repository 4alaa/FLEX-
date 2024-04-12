
$(document).ready(function () {



  // fire function of Pure Counter 
  
    new PureCounter();



  $(".loader").fadeOut(1000,function () {
    $(".loading").fadeOut(1000,function () {
      $("body").removeClass("overflow-hidden")
    })
  
  })

  var boxColorsWidth=$(".boxColors").outerWidth(true)

  $("aside").css("left" ,- boxColorsWidth)


// for aside colors and imgs
$("#gear").click(function () {



  if($("aside").css("left")=="0px")
  {
    $("aside").animate({"left" : - boxColorsWidth},2000)

  }
  else
  {
    $("aside").animate({"left" : 0},2000)

  }

})

  var spanColors=$(".boxColors .spanColors span")
  spanColors.eq(0).css(`background-color`, "rgb(80,140,175)" )
  spanColors.eq(1).css(`background-color`, "rgb(125,198,25)" )
  spanColors.eq(2).css(`background-color`, "#1dbec4" )
  spanColors.eq(3).css(`background-color`, "rgb(196,180,175)" )
  

  $(".boxColors span").click(function (e) {

    var chosenColor=$(e.target).css(`background-color`)

    $("h1,h2,h3").css("color",chosenColor)
  })



  $(".asideImgs img").click(function (e) {

    var chosenImg=$(e.target).attr("src")

    $(".homeImg").attr("src",chosenImg)

    // console.log(chosenImg)

  })
  


// for fancy slider video
$("#show-video").click(function (){


    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        
      });
      
      
      
      new Fancybox(
        // Array containing gallery items
        [
          // Gallery item
          {
            src: "img/show-videos/Building The Ultimate Photography Portfolio - Dani Diamond.mp4",
            thumb: "img/show-videos/Building The Ultimate Photography Portfolio - Dani Diamond.mp4",
          },
       
        ],
        // Gallery options
        {
          hideScrollbar: false,
        }
      );


})


$("#show-video1").click(function (){


    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        
      });
      
      
      
      new Fancybox(
        // Array containing gallery items
        [
          // Gallery item
          {
            src: "img/show-videos/Building The Ultimate Photography Portfolio - Dani Diamond.mp4",
            thumb: "img/show-videos/Building The Ultimate Photography Portfolio - Dani Diamond.mp4",
          },
       
        ],
        // Gallery options
        {
          hideScrollbar: false,
        }
      );


})

// for nav active
$("nav .nav-link[href]").click(function (e) {

    let selectedLink=$(e.target).attr("href")
    if(selectedLink=="#Home")
    {
        $("nav .nav-link[href]").removeClass("activeLink")
        $("#homeLink").addClass("activeLink")
    }
    else if(selectedLink=="#About")
    {
        $("nav .nav-link[href]").removeClass("activeLink")
        $("#AboutLink").addClass("activeLink")
    }
    else if(selectedLink=="#Services")
    {
        $("nav .nav-link[href]").removeClass("activeLink")
        $("#ServicesLink").addClass("activeLink")
    }
    else if(selectedLink=="#Portfolio")
    {
        $("nav .nav-link[href]").removeClass("activeLink")
        $("#PortfolioLink").addClass("activeLink")
    }
    else if(selectedLink=="#Team")
    {
        $("nav .nav-link[href]").removeClass("activeLink")
        $("#TeamLink").addClass("activeLink")
    }
    else if(selectedLink=="#Blog")
    {
        $("nav .nav-link[href]").removeClass("activeLink")
        $("#BlogLink").addClass("activeLink")
    }
    else if(selectedLink=="#Contact")
    {
        $("nav .nav-link[href]").removeClass("activeLink")
        $("#ContactLink").addClass("activeLink")
    }

})

// nice scroll

$("nav .nav-link[href]").click(function (e) {
  let selectedLink=$(e.target).attr("href")

  let sectionTop=$(selectedLink).offset().top

 
  $("html,body").animate({scrollTop:sectionTop},2000)

})

let homeTop=0
let AboutTop=$("#About").offset().top - 30
let ServicesTop=$("#Services").offset().top - 50
let PortfolioTop=$("#Portfolio").offset().top - 50
let TeamTop=$("#Team").offset().top - 50
let BlogTop=$("#Blog").offset().top - 50
let ContactTop=$("#Contact").offset().top - 50





// for btn in the home ====> get started
$("#getStart").click(function () {
  
  $("html,body").animate({scrollTop:AboutTop+50},2000)
})


$(window).scroll(function () {
let windowTop=$(window).scrollTop()
if(windowTop>homeTop&&windowTop<AboutTop)
{
  $("nav .nav-link[href]").removeClass("activeLink")
  $("#homeLink").addClass("activeLink")
}
else if(windowTop>AboutTop&&windowTop<ServicesTop)
{
  $("nav .nav-link[href]").removeClass("activeLink")
  $("#AboutLink").addClass("activeLink")
}
else if(windowTop>ServicesTop&&windowTop<PortfolioTop)
{
  $("nav .nav-link[href]").removeClass("activeLink")
  $("#ServicesLink").addClass("activeLink")
}
else if(windowTop>PortfolioTop&&windowTop<TeamTop)
{
  $("nav .nav-link[href]").removeClass("activeLink")
  $("#PortfolioLink").addClass("activeLink")
}
else if(windowTop>TeamTop&&windowTop<BlogTop)
{
  $("nav .nav-link[href]").removeClass("activeLink")
  $("#TeamLink").addClass("activeLink")
}
else if(windowTop>BlogTop&&windowTop<ContactTop)
{
  $("nav .nav-link[href]").removeClass("activeLink")
  $("#BlogLink").addClass("activeLink")
}
else if(windowTop>ContactTop)
{
  $("nav .nav-link[href]").removeClass("activeLink")
  $("#ContactLink").addClass("activeLink")
}


if(windowTop>200)
{
  // $(".arrowUp").addClass("d-flex")

  $(".arrowCont").fadeIn(1000)

}
else
{
  $(".arrowCont").fadeOut(1000)
  // $(".arrowUp").removeClass("d-flex")


}









})


$(".arrowUp").click(function () {
  
  $("html,body").animate({scrollTop:0},1500)
})












// init Isotope
var $grid = $('.protoDetails .row ').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

})



Fancybox.bind('[data-fancybox="proto"]', {
  //
});  


Fancybox.bind('[data-fancybox="teaming"]', {
  //
});  


Fancybox.bind('[data-fancybox="bloging"]', {
  //
});  


Fancybox.bind('[data-fancybox="valus"]', {
  //
});  

Fancybox.bind('[data-fancybox="progresssss"]', {
  //
});  





(function() {

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }





  });

  // fire function of owl
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  slideBy:1,
  dotsEach:1,
  autoplay:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
})



  







    /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
  
  
  
  
    /**
     * Skills animation
     */
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }


})();





