$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-hand-holding-heart');
        $('nav').toggleClass('nav-toggle');
    });
    $('nav ul li a').click(function () {
        $('.fa-bars').removeClass('fa-hand-holding-heart');
        $('nav').removeClass('nav-toggle');
    });
});