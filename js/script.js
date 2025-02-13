$(document).ready(function(){
  $('.fa-chevron-up').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
<script>
    $(document).ready(function(){
        $(".projects-slider").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive:{
                0:{ items:1 },
                600:{ items:2 },
                1000:{ items:3 }
            }
        });
    });
</script>

// inspired by 
// https://dribbble.com/shots/920939-Portfolio-Redesign-2013-early-stage?list=searches&tag=portfolio&offset=22
