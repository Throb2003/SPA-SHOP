const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginButton = document.querySelector('.btn'); // Add this line to select the login button
const signUpButton = document.querySelector('.register .btn'); // Add this line to select the sign-up button

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

// Add event listener to the login button
loginButton.onclick = (event) => {
    // Prevent the form from submitting immediately
    event.preventDefault();
    
    // Prompt the user
    const confirmed = confirm("Are you sure you want to log in?");
    
    // Redirect to the main web page if the user confirms
    if (confirmed) {
        window.location.href = 'https://throb2003.github.io/BEAUTY-SHOP/'; // Replace 'mainPage.html' with the actual URL of your main web page
    }
};

// Add event listener to the sign-up button
signUpButton.onclick = (event) => {
    // Prevent the form from submitting immediately
    event.preventDefault();
    
    // Prompt the user
    const confirmed = confirm("Are you sure you want to sign up?");
    
    // Redirect to the main web page if the user confirms
    if (confirmed) {
        window.location.href = 'https://throb2003.github.io/BEAUTY-SHOP/'; // Replace 'mainPage.html' with the actual URL of your main web page
    }
};