
$(document).ready(function () {

    checkWidth();
    $(window).resize(checkWidth);

});

// Breakpoint function
function checkWidth() {
    var vw = $(document).width();
    console.log('width ' + vw);

    // Hide username from navbar
    if (vw < 765) {
        $('#my-account-username').hide();
    } else {
        $('#my-account-username').show();
    }

}

