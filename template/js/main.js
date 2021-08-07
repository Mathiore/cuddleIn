$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-hand-holding-heart');
        $('#topmenu').toggleClass('nav-toggle');
    });
    $('nav ul li a').click(function () {
        $('.fa-bars').removeClass('fa-hand-holding-heart');
        $('#topmenu').removeClass('nav-toggle');
    });
});