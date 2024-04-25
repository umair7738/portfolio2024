$(document).ready(function () {

    // Function to load page content
    function loadPageContent(pageUrl, hash) {
        console.log("Loading page content...");
    
        // Add class to initiate transition animation
        $(".bostami-page-content-wrap").addClass("fade-out");
    
        $.ajax({
            url: pageUrl,
            type: "GET",
            dataType: "html",
            beforeSend: function () {
                console.log("Before sending AJAX request...");
                $(".bostami-page-content-wrap").addClass("fade-out");
            },
            success: function (response) {
                console.log("AJAX request successful!");
    
                // Update the URL hash and navigation active state
                window.location.hash = hash;
                $("nav ul li").removeClass("active");
                $("#" + hash + "-link").parent("li").addClass("active");
    
                // Use GSAP for page transition animation
                gsap.to(".bostami-page-content-wrap", {
                    opacity: 0,
                    duration: 0.6,
                    onComplete: function () {
                        console.log("Animation completed!");
                        
                        // Empty the content of .bostami-page-content-wrap before appending new content
                        $(".bostami-page-content-wrap").empty().html(response);
    
                        // Call specific initializers for the loaded content
                        if (hash === "about") {
                            initializeSwiper();
                        } else if (hash === "portfolio") {
                            mixitup('#gallery');
                        } else if (hash === "resume") {
                            updateSkillBars();
                        } else if (hash === "blog") {
                            blogslider();
                        } else if (hash === "contact") {
                            initializeContactForm();
                        }
    
                        // Use GSAP to fade in the content
                        gsap.to(".bostami-page-content-wrap", {
                            opacity: 1,
                            duration: 0.6,
                        });
                    },
                });
            },
            error: function (xhr, status, error) {
                console.error("Error loading page content:", error);
            }
        });
    }
    
    // Load about.php content initially if there's no hash in the URL
    if (!window.location.hash) {
        loadPageContent("about.php", "about");
    }

    // Handle click events for different page links
    $("#about-link").click(function (e) {
        e.preventDefault();
        loadPageContent("about.php", "about");
    });

    $("#portfolio-link").click(function (e) {
        e.preventDefault();
        loadPageContent("portfolio2.php", "portfolio");
    });

    $("#resume-link").click(function (e) {
        e.preventDefault();
        loadPageContent("resume.php", "resume");
    });

    $("#blog-link").click(function (e) {
        e.preventDefault();
        loadPageContent("blog.php", "blog");
    });

    $("#contact-link").click(function (e) {
        e.preventDefault();
        loadPageContent("contact.php", "contact");
    });

    // Functions
    function initializeSwiper() {
        if ($(".client_slide_active").length > 0) {
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
        if ($(".blog-slider-active").length > 0) {
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

    // Function to load page content based on hash
    function loadPageFromHash() {
        var hash = window.location.hash;
        switch (hash) {
            case "#about":
                loadPageContent("about.php", "about");
                break;
            case "#portfolio":
                loadPageContent("portfolio2.php", "portfolio");
                break;
            case "#resume":
                loadPageContent("resume.php", "resume");
                break;
            case "#blog":
                loadPageContent("blog.php", "blog");
                break;
            case "#contact":
                loadPageContent("contact.php", "contact");
                break;
            // default:
                // Load default page (about.php)
                // loadPageContent("about.php", "about");
                // break;
        }
    }
    
    // Call loadPageFromHash when the page loads
    loadPageFromHash();
});
