$(document).ready(
    function(){
        $('.about-section').waypoint(
            function(direction){
                if(direction == 'down'){
                    $('nav').addClass('sticky');
                } else{
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '500px'
            }
        )

        //scroll
        $('a').click(function (event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 700);
            event.preventDefault();
        });

        //mb-nav-icon
        $('.mb-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);
                if($('.mb-nav-icon').hasClass('fa-bars')){
                    $('.mb-nav-icon').removeClass('fa-bars');
                    $('.mb-nav-icon').addClass('fa-times');
            }else{
                $('.mb-nav-icon').addClass('fa-bars');
                $('.mb-nav-icon').removeClass('fa-times');
            }
            }
        )
    }
)