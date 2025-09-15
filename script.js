// Intersection Observer to reveal elements on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  })
},{ threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Contact form validation
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function(event) {
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;

    // Reset errors
    nameError.textContent = '';
    nameError.style.display = 'none';
    emailError.textContent = '';
    emailError.style.display = 'none';
    phoneError.textContent = '';
    phoneError.style.display = 'none';
    messageError.textContent = '';
    messageError.style.display = 'none';

    // Name validation
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Please enter your name.';
      nameError.style.display = 'block';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9\s+()-]*$/;
    if (phoneInput.value.trim() === '') {
      phoneError.textContent = 'Please enter your phone number.';
      phoneError.style.display = 'block';
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
      phoneError.textContent = 'Please enter a valid phone number.';
      phoneError.style.display = 'block';
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Please enter a message.';
      messageError.style.display = 'block';
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  
}
