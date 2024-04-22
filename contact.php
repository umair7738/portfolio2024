<!-- page title -->
<div class="section-wrapper pl-60 pr-60 pt-60">
    <div class="bostami-page-title-wrap mb-15">
        <h2 class="page-title">contact</h2>
    </div>
</div>

<!-- contact form -->
<div class="section-wrapper pr-60 pl-60 mb-60">
    <div class="contact-area bg-light-white-2">
        <h5 class="contact-title">I'm always open to discussing produuct</h5>
        <h5 class="contact-title-b">design work or partnerships.</h5>
        <form id="contactForm" class="contact-form" action="https://formspree.io/f/xleqapod" method="post">
            <div class="form-input-item mb-60">
                <label class="input-lebel name">Name *</label>
                <input id="nameInput" name="name" class="input-box name" type="text" required>
            </div>
            <div class="form-input-item mb-60">
                <label class="input-lebel email">Email *</label>
                <input id="emailInput" name="email" class="input-box email" type="email" required>
            </div>
            <div class="form-input-item mb-40">
                <label class="input-lebel message">Message *</label>
                <textarea id="messageInput" name="message" class="input-box message" cols="30" rows="10"
                    required></textarea>
            </div>
            <div class="form-btn-wrap">
                <button type="submit" value="Send" class="form-btn">Submit</button>
            </div>
        </form>
        <div id="toaster" class="toaster"></div>



        <script>
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Perform form validation
            if (!validateForm()) {
                showToast('Please fill in all fields correctly.', 'error');
                return;
            }

            // If validation passes, submit the form via AJAX
            var formData = new FormData(this);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', this.action);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;

                if (xhr.status === 200) {
                    // Success
                    toastr.success('Thank you! Your message has been sent.', 'success');
                    document.getElementById('contactForm').reset(); // Reset the form
                } else {
                    // Error
                    toastr.error('Oops! Something went wrong. Please try again later.', 'error');
                }
            };
            xhr.send(formData);
        });
        toastr.options = {
            "closeButton": true,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-bottom-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }


        // Function to validate the form
        function validateForm() {
            var nameInput = document.getElementById('nameInput');
            var emailInput = document.getElementById('emailInput');
            var messageInput = document.getElementById('messageInput');

            // Check if any of the input elements are null
            if (!nameInput || !emailInput || !messageInput) {
                console.error("One or more input elements not found.");
                return false;
            }

            var name = trimWhitespace(nameInput.value);
            var email = trimWhitespace(emailInput.value);
            var message = trimWhitespace(messageInput.value);

            // Check if any field is empty
            if (!name || !email || !message) {
                console.error("One or more fields are empty.");
                return false;
            }

            // Check if email is valid
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.error("Invalid email format.");
                return false;
            }

            return true;
        }

        // Function to trim whitespace using regular expressions
        function trimWhitespace(str) {
            return str.replace(/^\s+|\s+$/g, '');
        }
        </script>


    </div>
</div>

<!-- footer copyright -->
<div class="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
    <span>© 2024 All Rights Reserved by <a href="https://themeforest.net/user/elite-themes24" target="_blank"
            rel="noopener noreferrer">elite-themes24</a>.</span>
</div>