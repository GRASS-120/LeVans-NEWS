
$(document).ready(function(){
    $('#next').click(function(){
        let currentImage = $('.post.active')
        let currentImageIndex = $('.post.active').index()
        let nextImageIndex = currentImageIndex + 1
        let nextImage = $('.post').eq(nextImageIndex)

        currentImage.fadeOut(1000);
        currentImage.removeClass('active');

        if(nextImageIndex == $('.post:last').index() + 1){
            $('.post').eq(0).fadeIn(1000);
            $('.post').eq(0).addClass('active');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('active')
        }
    })

    $('#prev').click(function(){
        let currentImage = $('.post.active')
        let currentImageIndex = $('.post.active').index()
        let prevImageIndex = currentImageIndex - 1
        let prevImage = $('.post').eq(prevImageIndex)

        currentImage.fadeOut(1000);
        currentImage.removeClass('active');
        prevImage.fadeIn(1000);
        prevImage.addClass('active');
    })
})

