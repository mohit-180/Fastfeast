function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        if (!name) {
            alert('Please enter your name');
        }
        else if (!email) {
            alert('Please enter a valid Email address');
        }
        else if (!phone) {
            alert('Please enter your Phone number');
        }
        else if (!message) {
            alert('Please enter your message');
        }
    } else {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');

        // You can add code here to submit the form data to your server if necessary
    }
}

function displayOrderMessage() {
    alert("Your order has been placed.");
}

function redirectTo(url) {
    window.location.href = 'https://www.youtube.com/watch?v=xVyLeNisRMg';
}