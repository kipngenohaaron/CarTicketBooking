document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('home-page');
    const loginPage = document.getElementById('login-page');
    const loginForm = document.getElementById('login-form');
    const bookingPage = document.getElementById('booking-page');
    const bookingForm = document.getElementById('booking-form');
    const paymentContainer = document.getElementById('payment-container');
    const makePaymentBtn = document.getElementById('make-payment-btn');
    const feedbackContainer = document.getElementById('feedback-container');
    const submitFeedbackBtn = document.getElementById('submit-feedback-btn');
    const totalAmountSpan = document.getElementById('total-amount');
    const feedbackTextArea = document.getElementById('feedback-text');
    let isLoggedIn = false;
  
    document.getElementById('login-btn').addEventListener('click', () => {
      homePage.style.display = 'none';
      loginPage.style.display = 'block';
    });
  
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
  
      // Simulate login by checking hardcoded username and password
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (username === 'admin' && password === 'password') {
        isLoggedIn = true;
        loginPage.style.display = 'none';
        bookingPage.style.display = 'block';
      } else {
        alert('Invalid username or password');
      }
    });
  
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
  
      if (!isLoggedIn) {
        alert('Please login to book a ticket');
        return;
      }
  
      const name = document.getElementById('name').value;
      const car = document.getElementById('car').value;
      const seats = document.getElementById('seats').value;
  
      const booking = {
        name,
        car,
        seats
      };
  
      bookTicket(booking);
      paymentContainer.style.display = 'block';
      totalAmountSpan.textContent = calculateTotalAmount(booking).toFixed(2);
    });
  
    makePaymentBtn.addEventListener('click', () => {
      if (!isLoggedIn) {
        alert('Please login to make a payment');
        return;
      }
  
      const booking = getLatestBooking();
      makePayment(booking);
      paymentContainer.style.display = 'none';
      feedbackContainer.style.display = 'block';
    });
  
    submitFeedbackBtn.addEventListener('click', () => {
      if (!isLoggedIn) {
        alert('Please login to submit feedback');
        return;
      }
  
      const booking = getLatestBooking();
      const feedbackText = feedbackTextArea.value;
      provideFeedback(booking, feedbackText);
      feedbackContainer.style.display = 'none';
      resetForm();
      alert('Thank you for your feedback!');
    });
  
    function bookTicket(booking) {
      fetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(response => response.json())
      .then(data => console.log('Ticket booked:', data))
      .catch(error => console.error('Error:', error));
    }
  
    function calculateTotalAmount(booking) {
      const carPrices = {
        Sedan: 50,
        SUV: 70,
        Sports: 100
      };
      const pricePerSeat = carPrices[booking.car];
      return pricePerSeat * booking.seats;
    }
  
    function getLatestBooking() {
      return fetch('/bookings/latest')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error));
    }
  
    function makePayment(booking) {
      const payment = {
        bookingId: booking.id,
        amount: calculateTotalAmount(booking)
      };
  
      fetch('/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
      .then(response => response.json())
      .then(data => console.log('Payment made:', data))
      .catch(error => console.error('Error:', error));
    }
  
    function provideFeedback(booking, feedbackText) {
      const feedback = {
        bookingId: booking.id,
        feedbackText
      };
  
      fetch('/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      })
      .then(response => response.json())
      .then(data => console.log('Feedback submitted:', data))
      .catch(error => console.error('Error:', error));
    }
  
    function resetForm() {
      bookingForm.reset();
      feedbackTextArea.value = '';
    }
  });
  