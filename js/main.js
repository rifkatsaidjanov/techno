                            
                            // PANEL DATA
var elBlogPanelData = document.querySelector(".blog-panel-data");

var elMissionButton = document.querySelector(".mission-button");
var elVissionButton = document.querySelector(".vission-button");
var elPartnerButton = document.querySelector(".partner-button");
var elKompanyButton = document.querySelector(".kompany-button");

var elPanelMission = document.querySelector(".panel-mission");
var elPanelVission = document.querySelector(".panel-vission");
var elPanelPartner = document.querySelector(".panel-partner");
var elPanelKompany = document.querySelector(".panel-kompany");


elMissionButton.addEventListener('click', function() {
    elPanelVission.classList.remove("show")
    elPanelPartner.classList.remove("show")
    elPanelKompany.classList.remove("show")
    elPanelMission.classList.add("show")


    elKompanyButton.classList.remove("from-button")
    elPartnerButton.classList.remove("from-button")
    elVissionButton.classList.remove("from-button")
    elMissionButton.classList.add("from-button")
});

elVissionButton.addEventListener('click', function() {
    elPanelMission.classList.remove("show")
    elPanelPartner.classList.remove("show")
    elPanelKompany.classList.remove("show")
    elPanelVission.classList.add("show")

    elKompanyButton.classList.remove("from-button")
    elPartnerButton.classList.remove("from-button")
    elMissionButton.classList.remove("from-button")
    elVissionButton.classList.add("from-button")
});

elPartnerButton.addEventListener('click', function() {
    elPanelMission.classList.remove("show")
    elPanelVission.classList.remove("show")
    elPanelKompany.classList.remove("show")
    elPanelPartner.classList.add("show")

    elKompanyButton.classList.remove("from-button")
    elMissionButton.classList.remove("from-button")
    elVissionButton.classList.remove("from-button")
    elPartnerButton.classList.add("from-button")
});

elKompanyButton.addEventListener('click', function() {
    elPanelMission.classList.remove("show")
    elPanelVission.classList.remove("show")
    elPanelPartner.classList.remove("show")
    elPanelKompany.classList.add("show")

    elMissionButton.classList.remove("from-button")
    elVissionButton.classList.remove("from-button")
    elPartnerButton.classList.remove("from-button")
    elKompanyButton.classList.add("from-button")
});



                                // carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:80,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


var owl = $('.product_detail-slider');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var owl = $('.customer_reviews-slider');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

                                
                                // counterUp
$('.counter').counterUp({
    delay: 5,
    time: 2000
});


                                // NAVBAR FIXED


var elNavbarFixed = document.querySelector(".sticky-header");

    // bu esa scroll bo'ganda brauzerni qiynamaslik uchun kod
var debounce = function (func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// scroll 200 
var onWindowScroll = function(){
  if (window.scrollY > 150) {
      elNavbarFixed.classList.add("navbar-fixed")
      document.body.style.marginTop = elNavbar.offsetHeight + "px"
  }else{
        document.body.style.marginTop = "0"
        elNavbarFixed.classList.remove("navbar-fixed")
    }
}

document.addEventListener("scroll", debounce(onWindowScroll, 100))
