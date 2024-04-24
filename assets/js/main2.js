$(document).ready(function () {
    // Function to load page content
    function loadPageContent(pageUrl, hash) {
    console.log("Loading page content...");

    // Add class to initiate transition animation
    $(".bostami-page-content-wrap").addClass("flip-out");

    $.ajax({
        url: pageUrl,
        type: "GET",
        dataType: "html",
        beforeSend: function () {
            console.log("Before sending AJAX request...");
        },
        success: function (response) {
            console.log("AJAX request successful!");

            // Update the URL hash and navigation active state
            window.location.hash = hash;
            $("nav ul li").removeClass("active");
            $("#" + hash + "-link").parent("li").addClass("active");

            // Use GSAP for page transition animation
            gsap.to(".bostami-page-content-wrap", {
                rotationY: 0,
                duration: 0.5,
                onComplete: function () {
                    console.log("Animation completed!");

                    // Replace the content of bostami-page-content-wrap with the loaded content
                    $(".bostami-page-content-wrap").html(response);

                    // Use GSAP to flip back and fade in the content
                    gsap.from(".bostami-page-content-wrap", {
                        rotationY: 360,
                        opacity: 0,
                        duration: 0.5,
                    });
                },
            });
        },
        error: function (xhr, status, error) {
            console.error("Error loading page content:", error);
        }
    });
}

    

    // Handle click event on the about link
    $("#about-link").click(function (e) {
        e.preventDefault();
        loadPageContent("about.php", "about");
    });

    // Load about.php content initially if there's no hash in the URL
    if (!window.location.hash) {
        loadPageContent("about.php", "about");
    }

// Functions
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

// $(document).ready(function () {
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

function initializeContactForm() {
    $(".input-box.name").click(function () {
        $(".input-box.name").addClass("height");
        $(".input-box.name").css("borderBottom", "1px solid #FE7878");
        $(".input-lebel.name").css("color", "#FE7878");
    });

    $(".input-box.email").click(function () {
        $(".input-box.email").addClass("height");
        $(".input-box.email").css("borderBottom", "1px solid #1B74E4");
        $(".input-lebel.email").css("color", "#1B74E4");
    });

    $(".input-box.message").click(function () {
        $(".input-box.message").addClass("height");
        $(".input-box.message").css("borderBottom", "1px solid #CE65F3");
        $(".input-lebel.message").css("color", "#CE65F3");
    });
}


    // Function to load portfolio content
    function loadPortfolioContent() {
        $.ajax({
            url: "portfolio2.php",
            type: "GET",
            dataType: "html",
            success: function (response) {
                window.location.hash = "portfolio";
                $("nav ul li").removeClass("active");
                $("#portfolio-link").parent("li").addClass("active");
                $(".bostami-page-content-wrap").html(response);
                mixitup('#gallery');
            },
            error: function (xhr, status, error) {
                console.error("Error loading portfolio content:", error);
            }
        });
    }

    // Function to load resume content
    function loadResumeContent() {
        $.ajax({
            url: "resume.php",
            type: "GET",
            dataType: "html",
            success: function (response) {
                window.location.hash = "resume";
                $("nav ul li").removeClass("active");
                $("#resume-link").parent("li").addClass("active");
                $(".bostami-page-content-wrap").html(response);
                updateSkillBars();
            },
            error: function (xhr, status, error) {
                console.error("Error loading resume:", error);
            }
        });
    }

    // Function to load blog content
    function loadBlogContent() {
        $.ajax({
            url: "blog.php",
            type: "GET",
            dataType: "html",
            success: function (response) {
                window.location.hash = "blog";
                $("nav ul li").removeClass("active");
                $("#blog-link").parent("li").addClass("active");
                $(".bostami-page-content-wrap").html(response);
                blogslider();
            },
            error: function (xhr, status, error) {
                console.error("Error loading blog content:", error);
            }
        });
    }

    // Function to load contact content
    function loadContactContent() {
        $.ajax({
            url: "contact.php",
            type: "GET",
            dataType: "html",
            success: function (response) {
                window.location.hash = "contact";
                $("nav ul li").removeClass("active");
                $("#contact-link").parent("li").addClass("active");
                $(".bostami-page-content-wrap").html(response);
                initializeContactForm();
            },
            error: function (xhr, status, error) {
                console.error("Error loading contact content:", error);
            }
        });
    }

    // Handle click events for different page links
    $("#portfolio-link").click(function (e) {
        e.preventDefault();
        loadPortfolioContent();
    });

    $("#resume-link").click(function (e) {
        e.preventDefault();
        loadResumeContent();
    });

    $("#blog-link").click(function (e) {
        e.preventDefault();
        loadBlogContent();
    });

    $("#contact-link").click(function (e) {
        e.preventDefault();
        loadContactContent();
    });

    // Function to load page content based on hash
    function loadPageFromHash() {
        var hash = window.location.hash;
        switch (hash) {
            case "#about":
                loadPageContent("about.php", "about");
                break;
            case "#portfolio":
                loadPortfolioContent();
                break;
            case "#resume":
                loadResumeContent();
                break;
            case "#blog":
                loadBlogContent();
                break;
            case "#contact":
                loadContactContent();
                break;
            // default:
            //     // Load default page (about.php)
            //     loadPageContent("about.php", "about");
            //     break;
        }
    }

    // Call loadPageFromHash when the page loads
    loadPageFromHash();
});
