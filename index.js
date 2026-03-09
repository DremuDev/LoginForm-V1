document.addEventListener('DOMContentLoaded', function() {
    const eyeIcon = document.getElementById('eye-icon');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    const form = document.getElementById('login-form');
    const formError = document.getElementById('form-error');
    let isPasswordVisible = false;

    // Password visibility toggle
    function togglePasswordVisibility() {
        isPasswordVisible = !isPasswordVisible;
        
        if (isPasswordVisible) {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
            eyeIcon.setAttribute('aria-pressed', 'true');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
            eyeIcon.setAttribute('aria-pressed', 'false');
        }
    }

    // Click and keyboard support for eye icon
    eyeIcon.addEventListener('click', togglePasswordVisibility);
    eyeIcon.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            togglePasswordVisibility();
        }
    });

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        formError.style.display = 'none';
        formError.textContent = '';

        // Validation checks
        if (!emailInput.value.trim()) {
            showError('Please enter your email address');
            return;
        }

        if (!isValidEmail(emailInput.value)) {
            showError('Please enter a valid email address');
            return;
        }

        if (!passwordInput.value.trim()) {
            showError('Please enter your password');
            return;
        }

        if (passwordInput.value.length < 6) {
            showError('Password must be at least 6 characters');
            return;
        }

        // If all validations pass
        console.log('Form submitted successfully:', {
            email: emailInput.value,
            password: '***hidden***'
        });
        // Here you would typically send data to backend
        alert('Login attempt processed!');
    });

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show error message
    function showError(message) {
        formError.textContent = message;
        formError.style.display = 'block';
    }

    // Clear error on input
    emailInput.addEventListener('input', function() {
        if (formError.style.display === 'block') {
            formError.style.display = 'none';
        }
    });

    passwordInput.addEventListener('input', function() {
        if (formError.style.display === 'block') {
            formError.style.display = 'none';
        }
    });

    // Social button click handlers (placeholder)
    document.getElementById('google').addEventListener('click', function() {
        console.log('Google sign-in clicked');
    });

    document.getElementById('microsoft').addEventListener('click', function() {
        console.log('Microsoft sign-in clicked');
    });

    document.getElementById('apple').addEventListener('click', function() {
        console.log('Apple sign-in clicked');
    });
});


