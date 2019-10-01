$(document).ready(function () {

    $(".sidenav").sidenav();

    $('.slider').slider();
});


var pswpInit = function (startsAtIndex) {

    if (!startsAtIndex) {
        startsAtIndex = 0;
    }

    var pswpElement = document.querySelectorAll('.pswp')[0];

    if (window.djangoAlbumImages && window.djangoAlbumImages.length > 0) {
        
        var options = {
            
            index: startsAtIndex 
        };

        
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, window.djangoAlbumImages, options);
        gallery.init();
    }
}

    
