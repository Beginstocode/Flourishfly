document.addEventListener('DOMContentLoaded', function() {
    // Pricing section toggle functionality
    const pricingToggleArea = document.getElementById('pricingToggleArea');
    const collapsiblePricingContent = document.getElementById('collapsiblePricingContent');

    if (pricingToggleArea && collapsiblePricingContent) {
        pricingToggleArea.addEventListener('click', function() {
            collapsiblePricingContent.classList.toggle('active');
            pricingToggleArea.classList.toggle('active'); // To rotate the icon
            if (collapsiblePricingContent.classList.contains('active')) {
                pricingToggleArea.querySelector('.click-to-reveal').textContent = 'Click here to hide plans & details';
            } else {
                pricingToggleArea.querySelector('.click-to-reveal').textContent = 'Click here to see all our plans & details';
            }
        });
    }

    // FAQ section accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle the clicked FAQ item
            item.classList.toggle('active');
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;

            // Name validation
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Email validation
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Message validation
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (isValid) {
                // If the form is valid, you can submit the form data,
                // for example, using fetch API or an XMLHttpRequest.
                alert('Form submitted successfully!');
                contactForm.reset(); // Clear the form
            }
        });
    }
});