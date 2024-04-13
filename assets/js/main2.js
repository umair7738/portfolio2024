$(document).ready(function () {
    // Function to load page content
    function loadPageContent(pageUrl) {
        $.ajax({
            url: pageUrl,
            type: "GET",
            dataType: "html",
            success: function (response) {
                $(".bostami-page-content-wrap").html(response);
                // Initialize Swiper after loading the content
                initializeSwiper();
            },
            error: function (xhr, status, error) {
                console.error("Error loading page content:", error);
            }
        });
    }

    // Handle click event on the about link
    $("#about-link").click(function (e) {
        e.preventDefault();
        $("nav ul li").removeClass("active");
        $(this).parent("li").addClass("active");
        loadPageContent("about.php");
    });

    // Load about.php content initially
    loadPageContent("about.php");
});

// Function to initialize Swiper
function initializeSwiper() {
    if (jQuery(".client_slide_active").length > 0) {
        let swiperBrand = new Swiper(".client_slide_active", {
            slidesPerView: 4,
            loop: true,
            rtl: false,
            infinite: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
            },
        });
    }
}


$(document).ready(function () {
    function updateSkillBars() {
        $(".skill-bar-item").each(function () {
            // Find the .count span within the current .skill-bar-item
            var countSpan = $(this).find(".count");

            // Get the text content of the count span and set it as the data-count attribute
            var countNumber = countSpan.text();
            countSpan.attr("data-count", countNumber);

            // Get the numeric value from the count number (remove the percentage sign)
            var countPercent = parseFloat(countNumber.replace("%", ""));

            // Find the .progress-line element within the current .skill-bar-item
            var progressBar = $(this).find(".progress-line");

            // Set the width of the progress line based on the countPercent
            progressBar.css("width", countPercent + "%");
        });
    }


    // Handle click event on the resume link
    $("#resume-link").click(function (e) {
        e.preventDefault();
        $("nav ul li").removeClass("active");
        $(this).parent("li").addClass("active");
        $.ajax({
            url: "resume.php",
            type: "GET",
            dataType: "html",
            success: function (response) {
                $(".bostami-page-content-wrap").html(response);
                // Call the function to update skill bars after loading the content
                updateSkillBars();
            },
            error: function (xhr, status, error) {
                console.error("Error loading resume:", error);
            }
        });
    });

    // Call the function to update skill bars when the document is ready
    updateSkillBars();
});

$(document).ready(function () {
    // Function to load portfolio content
    function loadPortfolioContent() {
        // Perform AJAX request to load portfolio2.php
        $.ajax({
            url: "portfolio2.php", // URL of the target page
            type: "GET", // HTTP method
            dataType: "html", // Data type expected from the server
            success: function (response) {
                // Replace the content of bostami-page-content-wrap with the loaded content
                $(".bostami-page-content-wrap").html(response);

                // Initialize MixItUp after loading the portfolio content
                var mixer = mixitup('#gallery');

                // Update the URL hash to indicate that portfolio content is displayed
                window.location.hash = "portfolio";
                $("nav ul li").removeClass("active");
                $("#portfolio-link").parent("li").addClass("active");
            },
            error: function (xhr, status, error) {
                console.error("Error loading portfolio content:", error);
            }
        });
    }

    // Handle click event on the portfolio link
    $("#portfolio-link").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        $("nav ul li").removeClass("active");
        $(this).parent("li").addClass("active");
        // Call the function to load portfolio content
        loadPortfolioContent();
    });

    // Function to load portfolio content when the page loads
    function loadPortfolioFromHash() {
        // Check if the URL hash indicates portfolio content
        if (window.location.hash === "#portfolio") {
            // Call the function to load portfolio content
            loadPortfolioContent();
        }
    }

    // Call loadPortfolioFromHash when the page loads
    loadPortfolioFromHash();
});


// $(document).ready(function() {
//     // Handle click event on the resume link
//     $("#portfolio-link").click(function(e) {
//         e.preventDefault(); // Prevent the default behavior of the link
//         $("nav ul li").removeClass("active");
//         $(this).parent("li").addClass("active");
//         // Perform AJAX request to load resume.php
//         $.ajax({
//             url: "portfolio2.php", // URL of the target page
//             type: "GET", // HTTP method
//             dataType: "html", // Data type expected from the server
//             success: function(response) {
//                 // Replace the content of bostami-page-content-wrap with the loaded content
//                 $(".bostami-page-content-wrap").html(response);
//             },
//             error: function(xhr, status, error) {
//                 console.error("Error loading resume:", error);
//             }
//         });
//     });
// });

$(document).ready(function () {
    // Handle click event on the resume link
    $("#blog-link").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        $("nav ul li").removeClass("active");
        $(this).parent("li").addClass("active");
        // Perform AJAX request to load resume.php
        $.ajax({
            url: "blog.php", // URL of the target page
            type: "GET", // HTTP method
            dataType: "html", // Data type expected from the server
            success: function (response) {
                // Replace the content of bostami-page-content-wrap with the loaded content
                $(".bostami-page-content-wrap").html(response);
                blogslider();
            },
            error: function (xhr, status, error) {
                console.error("Error loading resume:", error);
            }
        });
    });
});
function blogslider() {
    if (jQuery(".blog-slider-active").length > 0) {
        let acooterbrand = new Swiper(".blog-slider-active", {
            slidesPerView: 1,
            loop: true,
            rtl: false,
            infinite: true,
            autoplay: false,
            pagination: {
                el: ".blog-progation",
                clickable: true,
            },
        });
    }
}
$(document).ready(function () {
    // Handle click event on the resume link
    $("#contact-link").click(function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        $("nav ul li").removeClass("active");
        $(this).parent("li").addClass("active");
        // Perform AJAX request to load resume.php
        $.ajax({
            url: "contact.php", // URL of the target page
            type: "GET", // HTTP method
            dataType: "html", // Data type expected from the server
            success: function (response) {
                // Replace the content of bostami-page-content-wrap with the loaded content
                $(".bostami-page-content-wrap").html(response);
                forminputs();
            },
            error: function (xhr, status, error) {
                console.error("Error loading resume:", error);
            }
        });
    });
});
function forminputs() {
    $(".input-box.name").click(function () {
        $(".input-box.name").addClass("height");
        $(".input-box.name").css("borderBottom", "1px solid #FE7878");
        $(".input-lebel.name").css("color", "#FE7878");
    });

    $(".input-box.gmail").click(function () {
        $(".input-box.gmail").addClass("height");
        $(".input-box.gmail").css("borderBottom", "1px solid #1B74E4");
        $(".input-lebel.gmail").css("color", "#1B74E4");
    });

    $(".input-box.message").click(function () {
        $(".input-box.message").addClass("height");
        $(".input-box.message").css("borderBottom", "1px solid #CE65F3");
        $(".input-lebel.message").css("color", "#CE65F3");
    });
}