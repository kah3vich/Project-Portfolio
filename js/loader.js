document.body.onload = function() {

    setTimeout( function() {
        var perloader = document.getElementById('page-preloader');
        if( !perloader.classList.contains('done') ) {
            perloader.classList.add('done');
        } 
    }, 1000)

}