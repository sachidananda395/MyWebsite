// Simple jQuery enhancements
$(document).ready(function () {
    // Highlight current page link based on URL
    const path = window.location.pathname.split("/").pop();

    $(".nav-links a").each(function () {
        const href = $(this).attr("href");
        if (href === path || (path === "" && href === "index.html")) {
            $(".nav-links a").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Fade-in effect for main content
    $("main").css("opacity", 0).animate({ opacity: 1 }, 500);

    // Set current year in footer
    const year = new Date().getFullYear();
    $("#year").text(year);
});
