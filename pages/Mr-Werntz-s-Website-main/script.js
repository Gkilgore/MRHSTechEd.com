// Wait for the document to load
$(document).ready(function() {
    console.log("jQuery is working!"); // Debugging

    // Toggle additional info on image click
    $("#img1").click(function() {
        $("#info1").slideToggle();
    });

    $("#img2").click(function() {
        $("#info2").slideToggle();
    });

    $("#img3").click(function() {
        $("#info3").slideToggle();
    });

    // Navigation Click Events
    $("#VE").click(function() {
        window.open("video1.html", "_blank");
    });

    $("#VE2").click(function() {
        window.open("video2.html", "_blank");
    });

    $("#HE").click(function() {
        window.open("index.html", "_blank");
    });

    $("#YT").click(function() {
        window.open("https://www.youtube.com/channel/UC9aXXl56PYVK-GSPISyCLQg?view_as=subscriber", "_blank");
    });

    // Scroll Down Function
    function scrollDown() {
        window.scrollBy({ top: 900, behavior: "smooth" });
    }

    // Navbar Burger Toggle
    $(".burger").click(function() {
        $(".nav-links").toggleClass("nav-active");
        $(".burger").toggleClass("toggle");
    });

    // Debugging Clicks
    $("#img1, #img2, #img3").click(function() {
        console.log("Image clicked!");
    });
});
