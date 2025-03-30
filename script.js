document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeModal = document.querySelector('.close');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    
    // Toggle password visibility
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const eyeIcon = document.querySelector('.toggle-password');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to your backend
        console.log('Login attempt with:', { email, password, rememberMe });
        
        // Simulate successful login
        simulateLogin();
    });
    
    // Forgot password modal
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
        forgotPasswordModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });
    
    // Reset password form
    resetPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value;
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        // Here you would typically send a reset request to your backend
        console.log('Password reset requested for:', email);
        alert(`A password reset link has been sent to ${email} (simulated)`);
        forgotPasswordModal.style.display = 'none';
    });
    
    // Simulate login function (for demo purposes)
    function simulateLogin() {
        const loginButton = document.querySelector('.login-button');
        const originalText = loginButton.textContent;
        
        loginButton.textContent = 'Signing in...';
        loginButton.disabled = true;
        
        setTimeout(() => {
            loginButton.textContent = 'Success! Redirecting...';
            loginButton.style.backgroundColor = 'var(--success-color)';
            
            // Simulate redirect after successful login
            setTimeout(() => {
                alert('Login successful! In a real app, this would redirect to the member dashboard.');
                loginButton.textContent = originalText;
                loginButton.disabled = false;
                loginButton.style.backgroundColor = 'var(--secondary-color)';
                loginForm.reset();
            }, 1500);
        }, 2000);
    }
    
    // Social login buttons
    document.querySelectorAll('.social-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('google') ? 'Google' : 
                           this.classList.contains('facebook') ? 'Facebook' : 'Apple';
            alert(`In a real app, this would initiate ${platform} OAuth login`);
        });
    });
    
    // Sign up link
    document.getElementById('signup').addEventListener('click', function(e) {
        e.preventDefault();
        alert('In a real app, this would redirect to the signup page');
    });
});