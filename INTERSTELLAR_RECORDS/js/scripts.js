/**
 * Created by zsb on 12/2/17.
 */
$(document).ready(function () {
    // SHOW OR HIDE STICKY SCROLL-TO-TOP BUTTON
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn(200);
        }
        else {
            $('.navbar').fadeOut(200);
        }
    });
});
