$(document).ready(function(){
    
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})